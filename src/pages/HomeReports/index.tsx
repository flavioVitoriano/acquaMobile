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

const HomeReports: React.FC = () => {
  const navigation = useNavigation();

  function navigationReportsStackRoutes() {
    navigation.navigate('ReportsRoutes')
  }

  function navigationReportsProfit() {
    navigation.navigate('ReportsProfit')
  }

  return (
    <>

      <Container>
        <ContainerList>
          <RoutesTitle>Relatório de Rotas.</RoutesTitle>
          <RoutesDescription>Acesse para mais detalhes.</RoutesDescription>
          <RoutesButton onPress={navigationReportsStackRoutes}>
            <RoutesButtonText>Acessar</RoutesButtonText>
          </RoutesButton>
        </ContainerList>

        <ContainerList>
          <RoutesTitle>Relatório de Lucro.</RoutesTitle>
          <RoutesDescription>Acesse para mais detalhes.</RoutesDescription>
          <RoutesButton onPress={navigationReportsProfit}>
            <RoutesButtonText>Acessar</RoutesButtonText>
          </RoutesButton>
        </ContainerList>

      </Container>

    </>
  )
}
export default HomeReports;
