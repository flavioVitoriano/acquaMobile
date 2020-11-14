import React, { useRef, useCallback } from 'react';
import {
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import api from "../../services/index";

import getValidationErrors from "../../utils/getValidationErrors";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Title } from "./styles";
import Icon  from 'react-native-vector-icons/Feather';

interface ClientFormData {
  full_name: string;
  phone: string;
  preferred_price: number;
  city: string;
}

const ClientCreate: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const phoneInputRef = useRef<TextInput>(null);
  const passswordInputRef = useRef<TextInput>(null);
  const cityInputRef = useRef<TextInput>(null);

  const handleSignUp = useCallback(
    async (data: ClientFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          full_name: Yup.string().required("Nome obrigatório"),
          phone: Yup.string().required("telefone obrigatório"),
          city: Yup.string().required("Cidade obrigatório"),
          preferred_price: Yup.number().min(1, "digite um número"),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post("/clients/", data);
        Alert.alert(
          "Cadastro realizado com sucesso!",
          "Veja agora seus clientes cadastrados",
        );
        navigation.navigate("ClientStackRoutes");
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
        Alert.alert("Erro no cadastro", "Ocorreu um erro ao fazer cadastro");
      }
    },
    [navigation],
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >

        <Container>

          <View>
            <Title>Cadastrar Cliente</Title>
          </View>

          <Form ref={formRef} onSubmit={handleSignUp}>
            <Input
              autoCapitalize="words"
              autoCorrect={false}
              name="full_name"
              icon="user"
              placeholder="Nome"
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
              placeholder="telefone"
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
              placeholder="cidade"
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
              placeholder="preço padrão"
              returnKeyType="send"
              onSubmitEditing={() => formRef.current?.submitForm()}
            />

            <View>
              <Button onPress={() => formRef.current?.submitForm()}>
                Cadastrar
              </Button>
            </View>
          </Form>
        </Container>
      </KeyboardAvoidingView>
    </>
  );
};

export default ClientCreate;
