import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  ContainerList,
  RoutesButton,
  RoutesButtonText,
  AtrasadoList,
  RoutesDescription,
  RoutesTitle,
  Container,

} from './styles';

const Home : React.FC = () => {
const navigation = useNavigation();

function NavigationCreatedReports() {
  navigation.navigate('CreatedReports')
}


function CreatedProfitReport() {
  navigation.navigate('CreatedProfitReport')
}

  return (
    <>

      <Container>
      <ContainerList>
          <RoutesTitle>Relatório de rotas.</RoutesTitle>
          <RoutesDescription>Acesse para mais detalhes.</RoutesDescription>
      <RoutesButton onPress={NavigationCreatedReports}>
       <RoutesButtonText>Acessar</RoutesButtonText>
        </RoutesButton>
        </ContainerList>

        <ContainerList>
          <RoutesTitle>Relatório de lucro.</RoutesTitle>
          <RoutesDescription>Acesse para mais detalhes.</RoutesDescription>
      <RoutesButton onPress={CreatedProfitReport}>
       <RoutesButtonText>Acessar</RoutesButtonText>
        </RoutesButton>
        </ContainerList>

      </Container>

    </>
  )}
export default Home;
