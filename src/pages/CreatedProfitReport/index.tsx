import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from "@react-navigation/native";

interface ProfitFormData {
  entry_sum: number;
  out_sum: number;
  profit: number;
}

import api from '../../services/index';
import {
  ContainerList,
  AtrasadoList,
  ProfitDescription,
  ProfitTitle,
  Container,

} from './styles';

export default function CreatedProfitReport() {
  const navigation = useNavigation();
  const [profit, setProfit] = useState<ProfitFormData>();

  async function loadProfit() {
    const response = await api.get('/moves/report/', {
      params: {
        initial_date:"2020-10-10",
        end_date:"2020-10-30",
      }
    })
    setProfit(response.data);
  }

  useEffect(() => {
    loadProfit()
  }, []);


  return (
    <>

      <Container>

        <ContainerList>
          <ProfitTitle>Veja Seus Lucros:</ProfitTitle>
          <ProfitDescription>Soma de entrada: {profit?.entry_sum}.</ProfitDescription>
          <ProfitDescription>Soma de Saida: {profit?.out_sum}.</ProfitDescription>
          <ProfitDescription>Lucro: {profit?.profit}.</ProfitDescription>
        </ContainerList>
      </Container>

    </>
  );
}

