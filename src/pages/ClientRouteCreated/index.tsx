import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/index";
import {
  PathValue,
  Container,
  Path,
  Header,
  PathList,
  PathProperty,
  DetailsButton,
  DetailsButtonText,
} from "./styles";
import RemoteSelect from "../../components/RemoteSelect";
import moment from "moment";
import { Alert } from "react-native";
import uniqBy from "lodash/uniqBy";

interface ClientData {
  id: number;
  full_name: string;
}

interface PathFormData {
  id: number;
  quantity: number;
  value: number;
  obs: string;
  submit_date: any;
  client: ClientData;
}

interface DateProps {
  startDate: Date;
  endDate: Date;
}

const humanDate = (date: any) => {
  return date.format("DD/MM/YYYY");
};

const makeResponseData = (data: Array<object>) =>
  data.map((item: any) => {
    item.submit_date = moment(item.submit_date);
    return item;
  });

export default function ClientRouteCreated() {
  const [paths, setPaths] = useState<PathFormData[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [filterParams, setFilterParams] = useState({});
  const [client, setClient] = useState("");
  const [clients, setClients] = useState([]);

  const navigation = useNavigation();

  function navigateToDetail(id: number) {
    navigation.navigate("ClientRouteDetail", { id });
  }

  function loadPaths() {
    api
      .get("/paths/", {
        params: { page },
      })
      .then((response) => {
        setPaths(makeResponseData(response.data));
        setTotal(response.headers["x-total-count"]);
        setPage(page + 1);
        setLoading(false);
      });
  }

  const onClientChange = (value: string) => {
    setClient(value);
  };

  const getClientData = () => {
    api
      .get("/clients/", { params: { limit: 1000 } })
      .then((response) => setClients(response.data))
      .catch((error) => Alert.alert("Fracasso"));
  };

  const onSubmitFilter = (dates: DateProps) => {
    setPaths([]);
    setPage(1);
    setFilterParams({
      start_date: dates.startDate,
      end_date: dates.endDate,
      client: client,
    });
  };

  const onEndReached = () => {
    if (loading) {
      return;
    }
    if (Number(total) > 0 && Number(paths.length) === Number(total)) {
      return;
    }
    setPage(page + 1);
  };

  useEffect(() => {
    setLoading(true);

    api
      .get("/paths/", {
        params: { page, ...filterParams },
      })
      .then((response) => {
        const resData = makeResponseData(response.data);
        const data = uniqBy([...paths, ...resData], "id");
        setPaths(data);
        setTotal(response.headers["x-total-count"]);
        setLoading(false);
      });
  }, [page, filterParams]);

  useEffect(() => {
    loadPaths();
  }, []);

  useEffect(() => {
    getClientData();
  }, []);

  return (
    <Container>
      <Header></Header>
      <RemoteSelect
        onSelectChange={onClientChange}
        data={clients}
        labelField="full_name"
        valueField="id"
        initialLabel="Selecione um cliente"
      />
      <PathList
        data={paths}
        keyExtractor={(path) => String(path.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.2}
        renderItem={({ item: path }) => (
          <Path>
            <PathProperty>ID e cliente:</PathProperty>
            <PathValue>
              {path.id}-{path.client.full_name}
            </PathValue>

            <PathProperty>Data:</PathProperty>
            <PathValue>{humanDate(path.submit_date)}</PathValue>

            <PathProperty>Quantidade:</PathProperty>
            <PathValue>{path.quantity}</PathValue>

            <PathProperty>Valor Unitário:</PathProperty>
            <PathValue>{path.value}</PathValue>

            <DetailsButton onPress={() => navigateToDetail(path.id)}>
              <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
              <Icon name="arrow-right" size={16} color="#E02041" />
            </DetailsButton>
          </Path>
        )}
      />
    </Container>
  );
}
