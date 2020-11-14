import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/index";
import {
  MoveValue,
  Container,
  Move,
  Header,
  MoveList,
  MoveProperty,
  DetailsButton,
  DetailsButtonText,
} from "./styles";
import uniqBy from "lodash/uniqBy";
import moment from "moment";

interface MoveFormData {
  id: number;
  obs: string;
  submit_date: any;
  value: number;
  type: number;
}

interface DateProps {
  startDate: Date;
  endDate: Date;
}

const humanDate = (date: any) => {
  return date.format("DD/MM/YYYY");
};

const formatType = (type: number) => (type == 0 ? "ENTRADA" : "SAIDA");

const makeResponseData = (data: Array<object>) =>
  data.map((item: any) => {
    item.submit_date = moment(item.submit_date);
    return item;
  });

export default function MoveCreated() {
  const [moves, setMoves] = useState<MoveFormData[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [filterParams, setFilterParams] = useState({});

  const navigation = useNavigation();

  function navigateToDetail(id: number) {
    navigation.navigate("MoveDetail", { id });
  }

  function loadMoves() {
    api
      .get("/moves/", {
        params: { page },
      })
      .then((response) => {
        setMoves(makeResponseData(response.data));
        setTotal(response.headers["x-total-count"]);
        setPage(page + 1);
        setLoading(false);
      });
  }

  const onSubmitFilter = (dates: DateProps) => {
    setMoves([]);
    setPage(1);
    setFilterParams({
      start_date: dates.startDate,
      end_date: dates.endDate,
    });
  };

  const onEndReached = () => {
    if (loading) {
      return;
    }
    if (Number(total) > 0 && Number(moves.length) === Number(total)) {
      return;
    }
    setPage(page + 1);
  };

  useEffect(() => {
    setLoading(true);

    api
      .get("/moves/", {
        params: { page, ...filterParams },
      })
      .then((response) => {
        const resData = makeResponseData(response.data);
        const data = uniqBy([...moves, ...resData], "id");
        setMoves(data);
        setTotal(response.headers["x-total-count"]);
        setLoading(false);
      });
  }, [page, filterParams]);

  useEffect(() => {
    loadMoves();
  }, []);

  return (
    <Container>
      <Header></Header>
      <MoveList
        data={moves}
        keyExtractor={(move: MoveFormData) => String(move.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.2}
        renderItem={({ item: move }) => (
          <Move>
            <MoveProperty>Data:</MoveProperty>
            <MoveValue>{humanDate(move.submit_date)}</MoveValue>

            <MoveProperty>Valor: </MoveProperty>
            <MoveValue>{move.value}</MoveValue>

            <MoveProperty>Obs: </MoveProperty>
            <MoveValue>{move.obs}</MoveValue>

            <MoveProperty>Tipo</MoveProperty>
            <MoveValue>{formatType(move.type)}</MoveValue>

            <DetailsButton onPress={() => navigateToDetail(move.id)}>
              <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
              <Icon name="arrow-right" size={16} color="#E02041" />
            </DetailsButton>
          </Move>
        )}
      />
    </Container>
  );
}
