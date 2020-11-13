import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TextInput, TouchableOpacity, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import api from "../../services/index";

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

export default function CreatedProfitReport() {
  const navigation = useNavigation();
  const route = useRoute();
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
        <TouchableOpacity onPress={loadProfit} style={styles.loadButton}>
          <Icon name="filter" size={20} color="#FFF" />
        </TouchableOpacity>
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
const styles = StyleSheet.create({
  loadButton: {
    width: 50,
    height: 50,
    backgroundColor: "#8E4Dff",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },
  searchForm: {
    position: "absolute",
    top: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: "row",
  },
});
