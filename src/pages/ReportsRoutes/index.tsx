import React, { useEffect, useState } from 'react';

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
}

import api from '../../services/index';
import {

  RouterContainer,
  RouteProperty,
  RouterValue,
  ContainerList,
  RouterList,
  RoutesDescription,
  RoutesTitle,
  Container,

} from './styles';

export default function ReportsRoutes() {
  const [routes, setRoutes] = useState<RoutesFormData>();
  const [results, setResults] = useState<resultsFormData[]>([]);
  const [conter, setConter] =useState(0)

  function AddCounte(){
    setConter(conter+1);
  }

  async function loadroutes() {
    const response = await api.get('/paths/status/')
    setRoutes(response.data);
    setResults(response.data.results)
  }

  useEffect(() => {
    loadroutes()
  }, []);


  return (
    <>
      <Container>

        <ContainerList>
          <RoutesTitle>Veja suas rotas:</RoutesTitle>
          <RoutesDescription>No prazo: {routes?.qtd_no_prazo}.</RoutesDescription>
          <RoutesDescription>atenção: {routes?.qtd_atencao ? routes.qtd_atencao : 0}.</RoutesDescription>
          <RoutesDescription>Atrasadas: {routes?.qtd_atrasado ? routes.qtd_atrasado : 0}.</RoutesDescription>
        </ContainerList>

        <RouterList
          data={results}
          keyExtractor={(results) => String(results.client_id)}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.2}
          renderItem={({ item: results }) => (
            <RouterContainer>
              <RouteProperty>ID do cliente:</RouteProperty>
              <RouterValue>
                {results.client_id}
              </RouterValue>

              <RouteProperty>Id da Rota:</RouteProperty>
              <RouterValue>{results.path_id}</RouterValue>

              <RouteProperty>Dtatus:</RouteProperty>
              <RouterValue>{results.status}</RouterValue>

              <RouteProperty>Dias Restantes:</RouteProperty>
              <RouterValue>{results.until_days}</RouterValue>
            </RouterContainer>
          )}
        />
      </Container>

    </>
  );
}

