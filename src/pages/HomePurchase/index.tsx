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

const HomePurchase : React.FC = () => {
const navigation = useNavigation();

function navigationCreatePurchases() {
  navigation.navigate('CreatePurchase')
}

function navigationCreatedPurchase() {
  navigation.navigate('CreatedPurchase')
}

  return (
    <>

      <Container>
      <ContainerList>
          <RoutesTitle>Cadastrar Compras.</RoutesTitle>
          <RoutesDescription>Acesse para registrar compras.</RoutesDescription>
      <RoutesButton onPress={navigationCreatePurchases}>
       <RoutesButtonText>Acessar</RoutesButtonText>
        </RoutesButton>
        </ContainerList>

        <ContainerList>
          <RoutesTitle>Compras Registradas.</RoutesTitle>
          <RoutesDescription>Acesse para ver compras registradas.</RoutesDescription>
      <RoutesButton onPress={navigationCreatedPurchase}>
       <RoutesButtonText>Acessar</RoutesButtonText>
        </RoutesButton>
        </ContainerList>

      </Container>

    </>
  )}
export default HomePurchase;
