import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation,useRoute } from "@react-navigation/native";
import api from "../../services/index";

import {ClientValue,
   Container,
   Client,
   Header,
   Description,
   ClientList,
   ClientProperty,
   DetailsButton,
   DetailsButtonText
  } from './styles';

interface ClientData {
  id: number;
  full_name: string;
  phone: string;
  preferred_price: number;
  city: string;
}

export default function ClientCreated() {

  const [clients, setClientList] = useState<ClientData[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate("Inputs", { clients });
  }

  function loadclient() {
    if (loading) {
      return;
    }
    if (Number(total) > 0 && Number(clients.length) === Number(total)) {
      return;
    }

    setLoading(true);

    api
      .get("/clients/", {
        params: { page },
      })
      .then((response) => {
        setClientList([...clients, ...response.data]);
        setTotal(response.headers["x-total-count"]);
        setPage(page + 1);
        setLoading(false);
      });
  }

  useEffect(() => {
    loadclient();
  }, []);

  return (
    <Container>
      <Header></Header>

      <Description>
        Escolha um de seus clientes e entre em contato.
      </Description>

      <ClientList
        data={clients}
        keyExtractor={(client) => String(client.id)}
         showsVerticalScrollIndicator={false}
        onEndReached={loadclient}
        onEndReachedThreshold={0.2}
        renderItem={({ item: clients }) => (
          <Client>
            <ClientProperty>Nome:</ClientProperty>
            <ClientValue>{clients.full_name}</ClientValue>

            <ClientProperty>Cidade:</ClientProperty>
            <ClientValue>{clients.city}</ClientValue>

            <ClientProperty>telefone:</ClientProperty>
            <ClientValue>{clients.phone}</ClientValue>

            <ClientProperty>preço sugerido:</ClientProperty>
            <ClientValue>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(clients.preferred_price)}
            </ClientValue>


            <DetailsButton
              onPress={navigateToDetail}
            >

              <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
              <Icon name="arrow-right" size={16} color="#E02041" />
            </DetailsButton>
          </Client>
        )}
      />
    </Container>
  );
}

