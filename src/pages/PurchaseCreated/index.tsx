import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/index";
import {
  ShoppingValue,
  Container,
  Shopping,
  Header,
  ShoppingList,
  SearchData,
  ShoppingProperty,
  DetailsButton,
  DetailsButtonText,
} from "./styles";
import uniqBy from "lodash/uniqBy";
import moment from "moment";

interface PurchaseFormData {
  id: number;
  quantity: number;
  value: number;
  obs: string;
  submit_date: any;
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

export default function PurchaseCreated() {
  const [purchases, setPurchaces] = useState<PurchaseFormData[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [filterParams, setFilterParams] = useState({});

  const navigation = useNavigation();

  function navigateToDetail(id: number) {
    navigation.navigate("PurchaseDetail", { id });
  }

  function loadShoppings() {
    api
      .get("/purchases/", {
        params: { page },
      })
      .then((response) => {
        setPurchaces(makeResponseData(response.data));
        setTotal(response.headers["x-total-count"]);
        setPage(page + 1);
        setLoading(false);
      });
  }

  const onSubmitFilter = (dates: DateProps) => {
    setPurchaces([]);
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
    if (Number(total) > 0 && Number(purchases.length) === Number(total)) {
      return;
    }
    setPage(page + 1);
  };

  useEffect(() => {
    setLoading(true);

    api
      .get("/purchases/", {
        params: { page, ...filterParams },
      })
      .then((response) => {
        const resData = makeResponseData(response.data);
        const data = uniqBy([...purchases, ...resData], "id");
        setPurchaces(data);
        setTotal(response.headers["x-total-count"]);
        setLoading(false);
      });
  }, [page, filterParams]);

  useEffect(() => {
    loadShoppings();
  }, []);

  return (
    <Container>

<SearchData
        placeholder="Buscar compras por data..."
        //onChangeText={onFilterChange}
        //value={filterValue}
        autoCorrect={false}
      />
      <Header></Header>


      <ShoppingList
        data={purchases}
        keyExtractor={(purchase) => String(purchase.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.2}
        renderItem={({ item: purchase }) => (
          <Shopping>
            <ShoppingProperty>Data:</ShoppingProperty>
            <ShoppingValue>{humanDate(purchase.submit_date)}</ShoppingValue>

            <ShoppingProperty>Quantidade:</ShoppingProperty>
            <ShoppingValue>{purchase.quantity}</ShoppingValue>

            <ShoppingProperty>Valor Unitário:</ShoppingProperty>
            <ShoppingValue>{purchase.value}</ShoppingValue>

            <ShoppingProperty>total:</ShoppingProperty>
            <ShoppingValue>{purchase.quantity * purchase.value}</ShoppingValue>

            <DetailsButton onPress={() => navigateToDetail(purchase.id)}>
              <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
              <Icon name="arrow-right" size={16} color="#E02041" />
            </DetailsButton>
          </Shopping>
        )}
      />
    </Container>
  );
}
