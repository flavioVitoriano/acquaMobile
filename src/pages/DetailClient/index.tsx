import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";

import styles from "./styles";
import api from "../../services";

interface clientsDetailRouteParams {
  id: number;
}
interface clientsDetail {
  address: string;
  city: string;
  full_name: string;
  id: number;
  number_address: number;
  phone: string;
  preferred_price: number | any;
}

export default function DetailClient() {
  const route = useRoute();
  const params = route.params as clientsDetailRouteParams;
  const navigation = useNavigation();
  const [clients, setClients] = useState<clientsDetail>();

  useEffect(() => {
    if (params.id) {
      api.get(`/clients/${params.id}/`).then((response) => {
        setClients(response.data);
      });
    }
  }, [params.id]);

  const message = `Olá ${
    clients?.full_name
  }, estou entrando em contato pois gostaria de ajudar no caso
  "${clients?.full_name} do  ${clients?.preferred_price}" com o valor de
  ${Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    clients?.preferred_price,
  )}`;

  function navigateBack() {
    navigation.navigate("ClientCreated");
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=+55${clients?.phone}&text=${message}`,
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={navigateBack}>
            <Icon name="arrow-left" size={30} color="#E82041" />
          </TouchableOpacity>
        </View>

        <View style={styles.clients}>
          <Text style={[styles.clientsProperty, { marginTop: 0 }]}>Nome:</Text>
          <Text style={styles.clientsValue}>{clients?.full_name}</Text>

          <Text style={styles.clientsProperty}>endereço:</Text>
          <Text style={styles.clientsValue}>
            {clients?.city}/{clients?.address} e casa número{" "}
            {clients?.number_address}
          </Text>

          <Text style={styles.clientsProperty}>telefone:</Text>
          <Text style={styles.clientsValue}>{clients?.phone}</Text>

          <Text style={styles.clientsProperty}>VALOR:</Text>
          <Text style={styles.clientsValue}>
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(clients?.preferred_price)}
          </Text>
        </View>

        <View style={styles.contactBox}>
          <Text style={styles.heroTitle}>Entre em contato e</Text>
          <Text style={styles.heroTitle}>converse com seu cliente</Text>

          <Text style={styles.heroDescription}>Entrar em contato via:</Text>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
              <Text style={styles.actionText}>WhatsApp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
