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

const HomeCarboyLoan : React.FC = () => {
const navigation = useNavigation();

function navigationCarboyLoanCreate() {
  navigation.navigate('CarboyLoanCreate')
}

function navigationCarboyLoanCreated() {
  navigation.navigate('CarboyLoanCreated')
}

  return (
    <>

      <Container>
      <ContainerList>
          <RoutesTitle>Cadastrar Empréstimos.</RoutesTitle>
          <RoutesDescription>Acesse para registrar empréstimos. </RoutesDescription>
      <RoutesButton onPress={navigationCarboyLoanCreate}>
       <RoutesButtonText>Acessar</RoutesButtonText>
        </RoutesButton>
        </ContainerList>

        <ContainerList>
          <RoutesTitle>Empréstimos Registrados.</RoutesTitle>
          <RoutesDescription>Acesse para ver empréstimos registrados.</RoutesDescription>
      <RoutesButton onPress={navigationCarboyLoanCreated}>
       <RoutesButtonText>Acessar</RoutesButtonText>
        </RoutesButton>
        </ContainerList>

      </Container>

    </>
  )}
export default HomeCarboyLoan;
