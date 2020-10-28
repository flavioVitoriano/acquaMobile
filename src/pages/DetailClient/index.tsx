import React,{useState, useEffect} from 'react';
import Icon from "react-native-vector-icons/Feather";
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Linking,ScrollView } from 'react-native';

import {
  Container,
  Header,
  Action,
  ActionText,
  Actions,
  ClientDescription,
  ClientTitle,
  Clients,
  ClientsProperty,
  ClientsValue,
  ContactBox
} from './styles';
import api from '../../services';

interface clientsDetailRouteParams{
  id: number;
}
interface clientsDetail{
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
    api.get(`/clients/${params.id}/`).then(response=> {
      setClients(response.data);
    })
  },[params.id])

  const message = `Olá ${clients?.full_name}, estou entrando em contato pois gostaria de ajudar no caso
  "${clients?.full_name} do  ${clients?.preferred_price}" com o valor de
  ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(clients?.preferred_price)}`;

  function navigateBack() {
    navigation.navigate('ClientCreated')
  }


  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${clients?.phone}&text=${message}`);
  }

  return (
    <ScrollView>

    <Container style={{paddingHorizontal:24}}>
      <Header>

        <TouchableOpacity onPress={navigateBack}>
          <Icon name="arrow-left" size={30} color="#E82041" />
        </TouchableOpacity>
      </Header>

      <Clients>
      <ClientsProperty style={{marginTop: 0}}>Nome:</ClientsProperty>
        <ClientsValue>{clients?.full_name}</ClientsValue>

        <ClientsProperty>Endereço:</ClientsProperty>
  <ClientsValue>{clients?.city}/{clients?.address} e casa número {clients?.number_address}</ClientsValue>

        <ClientsProperty>Telefone:</ClientsProperty>
        <ClientsValue>{clients?.phone}</ClientsValue>

        <ClientsProperty>Valor:</ClientsProperty>
        <ClientsValue>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(clients?.preferred_price)}
        </ClientsValue>
      </Clients>

      <ContactBox>
        <ClientTitle>Entre em contato e</ClientTitle>
        <ClientTitle>converse com seu cliente</ClientTitle>

        <ClientDescription>Entrar em contato  via:</ClientDescription>

        <Actions>
          <Action onPress={sendWhatsapp}>
            <ActionText>WhatsApp</ActionText>
          </Action>

        </Actions>
      </ContactBox>
    </Container>
    </ScrollView>
  );
}
