import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/index";
import {
  ClientValue,
  Container,
  Client,
  Header,
  Description,
  ClientList,
  ClientProperty,
  DetailsButton,
  DetailsButtonText,
} from "./styles";

interface ClientFormData {
  id: number;
  full_name: string;
  phone: string;
  preferred_price: number;
  city: string;
}

export default function ClientCreated() {
  const [clients, setClientList] = useState<ClientFormData[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [filterValue, setFilterValue] = useState("");

  const navigation = useNavigation();

  function navigateToDetail(id: number) {
    navigation.navigate("ClientDetail", { id });
  }

  function loadClients() {
    api
      .get("/clients/", {
        params: { page },
      })
      .then((response) => {
        setClientList(response.data);
        setTotal(response.headers["x-total-count"]);
        setPage(page + 1);
        setLoading(false);
      });
  }

  const onFilterChange = (text: string) => {
    setClientList([]);
    setPage(1);
    setFilterValue(text);
  };

  const onEndReached = () => {
    if (loading) {
      return;
    }
    if (Number(total) > 0 && Number(clients.length) === Number(total)) {
      return;
    }
    setPage(page + 1);
  };

  useEffect(() => {
    setLoading(true);

    api
      .get("/clients/", {
        params: { page, full_name_contains: filterValue },
      })
      .then((response) => {
        const data = new Set([...clients, ...response.data]);
        setClientList(Array.from(data.values()));
        setTotal(response.headers["x-total-count"]);
        setLoading(false);
      });
  }, [page, filterValue]);

  useEffect(() => {
    loadClients();
  }, []);

  return (
    <Container>
      <Header></Header>
      <Description
        placeholder="Buscar clientes por nome..."
        onChangeText={onFilterChange}
        value={filterValue}
        autoCorrect={false}
      />
      <ClientList
        data={clients}
        keyExtractor={(client) => String(client.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.2}
        renderItem={({ item: clients }) => (
          <Client>
            <ClientProperty>Nome:</ClientProperty>
            <ClientValue>{clients.full_name}</ClientValue>

            <ClientProperty>Cidade:</ClientProperty>
            <ClientValue>{clients.city}</ClientValue>

            <ClientProperty>telefone:</ClientProperty>
            <ClientValue>{clients.phone}</ClientValue>

            <ClientProperty>preço:</ClientProperty>
            <ClientValue>{Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(clients.preferred_price)}</ClientValue>

            <DetailsButton onPress={() => navigateToDetail(clients.id)}>
              <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
              <Icon name="arrow-right" size={16} color="#E02041" />
            </DetailsButton>
          </Client>
        )}
      />
    </Container>
  );
}
