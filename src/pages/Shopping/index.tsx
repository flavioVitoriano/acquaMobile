import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/index";
import {
  ShoppingValue,
  Container,
  Shopping,
  Header,
  Description,
  ShoppingList,
  ShoppingProperty,
  DetailsButton,
  DetailsButtonText,
} from "./styles";
import { DateTime } from "luxon";

interface PurchaseFormData {
  id: number;
  quantity: number;
  value: number;
  obs: string;
  submit_date: DateTime;
}

const humanDate = (date: Date) => date.toLocaleString();

export default function ShoppingCreated() {
  const [purchases, setPurchaces] = useState<PurchaseFormData[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [filterValue, setFilterValue] = useState("");

  const navigation = useNavigation();

  function navigateToDetail(id: number) {
    navigation.navigate("DetailShopping", { id });
  }

  function loadShoppings() {
    api
      .get("/purchases/", {
        params: { page },
      })
      .then((response) => {
        setPurchaces(
          response.data.map((item: any) => {
            item.submit_date = DateTime.fromISO(item.submit_date);
            return item;
          }),
        );
        setTotal(response.headers["x-total-count"]);
        setPage(page + 1);
        setLoading(false);
      });
  }

  const onFilterChange = (text: string) => {
    setPurchaces([]);
    setPage(1);
    setFilterValue(text);
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
        params: { page, full_name_contains: filterValue },
      })
      .then((response) => {
        const data = new Set([...purchases, ...response.data]);
        setPurchaces(Array.from(data.values()));
        setTotal(response.headers["x-total-count"]);
        setLoading(false);
      });
  }, [page, filterValue]);

  useEffect(() => {
    loadShoppings();
  }, []);

  return (
    <Container>
      <Header></Header>
      <Description
        placeholder="Buscar compras por nome..."
        onChangeText={onFilterChange}
        value={filterValue}
        autoCorrect={false}
      />
      <ShoppingList
        data={purchases}
        keyExtractor={(purchase: PurchaseFormData) => String(purchase.id)}
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
