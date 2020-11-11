import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";


interface resultsFormData {
  client_id: number;
  path_id: number;
  status: string;
  until_days: string;
}
interface RoutesFormData {
  qtd_atencao: number;
  qtd_atrasado: number;
  qtd_no_prazo: number;
  results: Array<resultsFormData>;
}

import api from '../../services/index';
import {
  ContainerList,
  RoutesButton,
  RoutesButtonText,
  AtrasadoList,
  RoutesDescription,
  RoutesTitle,
  Container,

} from './styles';

export default function CreatedReports() {
  const navigation = useNavigation();
  const [routes, setRoutes] = useState<RoutesFormData>();

  async function loadroutes() {
    const response = await api.get('/paths/status/')
    setRoutes(response.data);
  }

  useEffect(() => {
    loadroutes()
  }, []);


  return (
    <>

      <Container>

        <ContainerList>
          <RoutesTitle>Veja suas rotas:</RoutesTitle>
          <RoutesDescription>No prazo: {routes?.qtd_no_prazo}.</RoutesDescription>
          <RoutesDescription>atenção: {routes?.qtd_atencao}.</RoutesDescription>
          <RoutesDescription>Atrasadas: {routes?.qtd_atrasado}.</RoutesDescription>
        </ContainerList>

        <AtrasadoList>
          <RoutesTitle>Id/Cliente: {routes?.results[0].client_id} </RoutesTitle>
          <RoutesTitle>Id/Rota: {routes?.results[0].path_id} </RoutesTitle>
          <RoutesTitle>Dias faltantes: {routes?.results[0].until_days} </RoutesTitle>
          {routes?.results[0].status ? (
            <RoutesTitle style={{ color: "#0f0" }}>Status: {routes?.results[0].status} </RoutesTitle>
          ) :
            <RoutesTitle style={{ color: "#f00" }}>Status: {routes?.results[0].status} </RoutesTitle>
          }

        </AtrasadoList>


      </Container>

    </>
  );
}

