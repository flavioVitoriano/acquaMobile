import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  ContainerList,
  RoutesButton,
  RoutesButtonText,
  RoutesDescription,
  RoutesTitle,
  Container,
} from './styles';

const HomeSale : React.FC = () => {
const navigation = useNavigation();

function navigationSaleCreate() {
  navigation.navigate('SaleCreate')
}

function navigationSaleCreated() {
  navigation.navigate('SaleCreated')
}

  return (
    <>

      <Container>
      <ContainerList>
          <RoutesTitle>Cadastrar Vendas.</RoutesTitle>
          <RoutesDescription>Acesse para registrar vendas.</RoutesDescription>
      <RoutesButton onPress={navigationSaleCreate}>
       <RoutesButtonText>Acessar</RoutesButtonText>
        </RoutesButton>
        </ContainerList>

        <ContainerList>
          <RoutesTitle>Vendas Registradas.</RoutesTitle>
          <RoutesDescription>Acesse para ver vendas registradas.</RoutesDescription>
      <RoutesButton onPress={navigationSaleCreated}>
       <RoutesButtonText>Acessar</RoutesButtonText>
        </RoutesButton>
        </ContainerList>

      </Container>

    </>
  )}
export default HomeSale;
