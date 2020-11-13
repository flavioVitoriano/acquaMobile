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

const Home : React.FC = () => {
const navigation = useNavigation();

function navigationReportsStackRoutes() {
  navigation.navigate('ReportsRoutes')
}

function navigationProfitReport() {
  navigation.navigate('ProfitReport')
}

  return (
    <>

      <Container>
      <ContainerList>
          <RoutesTitle>Relatório de rotas.</RoutesTitle>
          <RoutesDescription>Acesse para mais detalhes.</RoutesDescription>
      <RoutesButton onPress={navigationReportsStackRoutes}>
       <RoutesButtonText>Acessar</RoutesButtonText>
        </RoutesButton>
        </ContainerList>

        <ContainerList>
          <RoutesTitle>Relatório de lucro.</RoutesTitle>
          <RoutesDescription>Acesse para mais detalhes.</RoutesDescription>
      <RoutesButton onPress={navigationProfitReport}>
       <RoutesButtonText>Acessar</RoutesButtonText>
        </RoutesButton>
        </ContainerList>

      </Container>

    </>
  )}
export default Home;
