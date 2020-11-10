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
  results: resultsFormData[];
}

import api from '../../services/index';
import {
  ContainerList,
  RoutesButton,
  RoutesButtonText,
  RoutesDescription,
  RoutesTitle,
  Container,

} from './styles';

export default function Main() {
  const navigation = useNavigation();

  const [routes, setRoutes] = useState<RoutesFormData>();

  function navigationHome() {
    navigation.navigate('Home')
  }
  async function loadroutes() {
    const response = await api.get('/paths/status/')
    setRoutes(response.data);
  }

  useEffect(() => {
    loadroutes()
  }, []);


  return (
    <>

      <RoutesTitle style={{paddingLeft: 20}}>O número de rotas é: {routes?.qtd_atrasado + routes?.qtd_atencao + routes?.qtd_no_prazo} nesse momento.</RoutesTitle>
      <Container>

        <ContainerList>
          <RoutesTitle>Rotas no Prazo</RoutesTitle>
          <RoutesDescription>{routes?.qtd_no_prazo} nesse momento</RoutesDescription>
          <RoutesButton onPress={navigationHome}>
            <RoutesButtonText>Acessar</RoutesButtonText>
          </RoutesButton>
        </ContainerList>

        <ContainerList>
          <RoutesTitle>Rotas em Atenção</RoutesTitle>
          <RoutesDescription>{routes?.qtd_atencao} nesse momento</RoutesDescription>
          <RoutesButton onPress={navigationHome}>
            <RoutesButtonText>Acessar</RoutesButtonText>
          </RoutesButton>
        </ContainerList>

        <ContainerList>
          <RoutesTitle>Rotas em Atraso</RoutesTitle>
          <RoutesDescription>{routes?.qtd_atrasado} nesse momento</RoutesDescription>
          <RoutesButton onPress={navigationHome}>
            <RoutesButtonText>Acessar</RoutesButtonText>
          </RoutesButton>
        </ContainerList>

      </Container>

    </>
  );
}

