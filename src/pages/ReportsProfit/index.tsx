import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import api from "../../services/index";
import Button from '../../components/Button'
import DateInput from "../../components/DateInput";
interface ProfitFormData {
  entry_sum: number;
  out_sum: number;
  profit: number;
}

import {
  ContainerList,
  ProfitDescription,
  ProfitTitle,
  Container,
} from "./styles";

export default function ReportsProfit() {

  const [initial_date, setInitial_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [profit, setProfit] = useState<ProfitFormData>();

  async function loadProfit() {
    const response = await api.get("/moves/report/", {
      params: { initial_date, end_date },
    });
    setProfit(response.data);
  }

  return (
    <>
      <Container>
        <DateInput icon="bell"
        value={initial_date}
        handleChange={setInitial_date}
        />
        <DateInput icon="bell"
        value={end_date}
         handleChange={setEnd_date}
          />
<Button onPress={loadProfit}>Acessar</Button>
<View style={{paddingTop:16}}></View>
        <ContainerList>
          <ProfitTitle>Veja Seus Lucros:</ProfitTitle>
          <ProfitDescription>
            Soma de entrada: {profit?.entry_sum ? profit?.entry_sum : 0}.
          </ProfitDescription>
          <ProfitDescription>
            Soma de Saida: {profit?.out_sum ? profit.out_sum : 0} .
          </ProfitDescription>
          <ProfitDescription>
            Lucro: {profit?.profit ? profit.profit : 0}.
          </ProfitDescription>
        </ContainerList>
      </Container>
    </>
  );
}
