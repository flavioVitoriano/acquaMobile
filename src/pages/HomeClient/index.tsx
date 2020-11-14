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

const ClientHome : React.FC = () => {
const navigation = useNavigation();

function navigationClientCreate() {
  navigation.navigate('ClientCreate')
}

function navigationClientCreated() {
  navigation.navigate('ClientCreated')
}

  return (
    <>

      <Container>
      <ContainerList>
          <RoutesTitle>Cadastrar Cliente.</RoutesTitle>
          <RoutesDescription>Acesse para registrar clientes.</RoutesDescription>
      <RoutesButton onPress={navigationClientCreate}>
       <RoutesButtonText>Acessar</RoutesButtonText>
        </RoutesButton>
        </ContainerList>

        <ContainerList>
          <RoutesTitle>Clientes Cadastrados.</RoutesTitle>
          <RoutesDescription>Acesse para ver clientes registrados.</RoutesDescription>
      <RoutesButton onPress={navigationClientCreated}>
       <RoutesButtonText>Acessar</RoutesButtonText>
        </RoutesButton>
        </ContainerList>
      </Container>

    </>
  )}
export default ClientHome;
