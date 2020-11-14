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

const HomeMove : React.FC = () => {
const navigation = useNavigation();

function navigationMoveCreate() {
  navigation.navigate('MoveCreate')
}

function navigationMoveCreated() {
  navigation.navigate('MoveCreated')
}

  return (
    <>

      <Container>
      <ContainerList>
          <RoutesTitle>Cadastrar Movimentos.</RoutesTitle>
          <RoutesDescription>Acesse para registrar movimento. </RoutesDescription>
      <RoutesButton onPress={navigationMoveCreate}>
       <RoutesButtonText>Acessar</RoutesButtonText>
        </RoutesButton>
        </ContainerList>

        <ContainerList>
          <RoutesTitle>Movimentos registrados.</RoutesTitle>
          <RoutesDescription>Acesse para ver movimentos registrados.</RoutesDescription>
      <RoutesButton onPress={navigationMoveCreated}>
       <RoutesButtonText>Acessar</RoutesButtonText>
        </RoutesButton>
        </ContainerList>

      </Container>

    </>
  )}
export default HomeMove;
