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

const HomeClientRoute : React.FC = () => {
const navigation = useNavigation();

function navigationCreateRouteClient() {
  navigation.navigate('CreateRouteClient')
}

function navigationCreatedRouteClient() {
  navigation.navigate('CreatedRouteClient')
}

  return (
    <>

      <Container>
      <ContainerList>
          <RoutesTitle>Cadastrar Rota de Clientes.</RoutesTitle>
          <RoutesDescription>Acesse para registrar Rota de clientes. </RoutesDescription>
      <RoutesButton onPress={navigationCreateRouteClient}>
       <RoutesButtonText>Acessar</RoutesButtonText>
        </RoutesButton>
        </ContainerList>

        <ContainerList>
          <RoutesTitle>Rota de Clientes Registradas.</RoutesTitle>
          <RoutesDescription>Acesse para ver rota de clientes registradas.</RoutesDescription>
      <RoutesButton onPress={navigationCreatedRouteClient}>
       <RoutesButtonText>Acessar</RoutesButtonText>
        </RoutesButton>
        </ContainerList>

      </Container>

    </>
  )}
export default HomeClientRoute;
