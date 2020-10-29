import React, { useState, useEffect, useCallback, useRef } from 'react';
import Icon from "react-native-vector-icons/Feather";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Linking, ScrollView, Alert,TextInput,View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import {
  Container,
  Header,
  Action,
  ActionText,
  Actions,
  ClientDescription,
  ClientTitle,
  Clients,
  Title,
  ContactBox
} from './styles';
import api from '../../services';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';
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
  preferred_price: number;
}

export default function DetailClient() {
  const route = useRoute();
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const phoneInputRef = useRef<TextInput>(null);
  const passswordInputRef = useRef<TextInput>(null);
  const cityInputRef = useRef<TextInput>(null);
  const params = route.params as clientsDetailRouteParams;
  const [clients, setClients] = useState<clientsDetail>();

  useEffect(() => {
    api.get(`/clients/${params.id}/`).then(response => {
      setClients(response.data);
    })
  }, [params.id])


  const EditClient = useCallback(
    async (data: clientsDetail) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          full_name: Yup.string().notRequired(),
          phone: Yup.string().notRequired(),
          city: Yup.string().notRequired(),
          preferred_price: Yup.string().notRequired(),
        }).test('Erro',"Atualize no minimo 1 campo", value =>
        !!(value?.full_name || value?.phone || value?.city || value?.preferred_price))

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.patch(`/clients/${params.id}/`, data)
        Alert.alert(
          'Edição realizada com sucesso 😃!',
          'dados do cliente atualizados',
        );
      } catch (err) {
        if (err instanceof Yup.ValidationError) {

          return Alert.alert('Erro na edição 🙁', 'Ocorreu um erro ao fazer edição do cliente');

        }
      }
    },
    [params.id],
  );

  const message = `Olá ${clients?.full_name}, estou entrando em contato pois gostaria de saber se o senhor
   vai fazer pedido de garrafões.`;

  function navigateBack() {
    navigation.navigate('ClientCreated')
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${clients?.phone}&text=${message}`);
  }

  return (
          <Container style={{ paddingHorizontal: 24 }}>

        <Header>
          <RectButton onPress={navigateBack}>
            <Icon name="arrow-left" size={28} color="#E82041" />
          </RectButton>
          <Title>Toque Para editar Cliente</Title>

          <RectButton onPress={()=> {}}>
            <Icon name="edit" size={28} color="#e82041" />
          </RectButton>
        </Header>

        <ScrollView>

        <Clients>
        <Form ref={formRef} onSubmit={EditClient}>
            <Input
              autoCapitalize="words"
              autoCorrect={false}
              name="full_name"
              icon="user"
              placeholder={clients?.full_name ? clients.full_name : "Nome completo"}
              returnKeyType="next"
              onSubmitEditing={() => {
                phoneInputRef.current?.focus();
              }}
            />
            <Input
              ref={phoneInputRef}
              autoCorrect={false}
              autoCapitalize="characters"
              name="phone"
              icon="phone"
              placeholder={clients?.phone ? clients.phone : "Número de contato"}
              keyboardType="phone-pad"
              returnKeyType="next"
              onSubmitEditing={() => {
                cityInputRef.current?.focus();
              }}
            />

              <Input
              ref={cityInputRef}
              autoCorrect={false}
              autoCapitalize="words"
              name="city"
              icon="map-pin"
              placeholder={clients?.city ? clients.city : "Nome da cidade"}
              returnKeyType="next"
              onSubmitEditing={() => {
                passswordInputRef.current?.focus();
              }}
            />

            <Input
              ref={passswordInputRef}
              keyboardType="numeric"
              name="preferred_price"
              icon="bell"
              placeholder={clients?.preferred_price ? String(clients.preferred_price) : "Preço padrão"}
              returnKeyType="send"
              onSubmitEditing={() => formRef.current?.submitForm()}
            />

            <View>
              <Button onPress={() => formRef.current?.submitForm()}>
                Salvar Edições
                  </Button>
            </View>
          </Form>
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
            </ScrollView>

      </Container>
  );
}
