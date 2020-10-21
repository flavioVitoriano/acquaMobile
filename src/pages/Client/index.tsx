import React, { useRef, useCallback } from 'react';
import {
  TextInput,
  ScrollView,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import api from '../../services/index';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Title, } from './styles';

interface ClientFormData {
  full_name: string;
  phone: string;
  preferred_price: number;
}

const Client: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const phoneInputRef = useRef<TextInput>(null);
  const passswordInputRef = useRef<TextInput>(null);

  const handleSignUp = useCallback(
    async (data: ClientFormData) => {
      try {
        formRef.current?.setErrors({});


        const schema = Yup.object().shape({
          full_name: Yup.string().required('Nome obrigatório'),
          phone: Yup.string().required('telefone obrigatório'),
          preferred_price: Yup.number().min(1, 'digite um número'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/clients/', data)
        Alert.alert(
          'Cadastro realizado com sucesso!',
          'Você já pode fazer login na aplicação',
        );
        navigation.navigate('ClientCreated')
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
        Alert.alert('Erro no cadastro', 'Ocorreu um erro ao fazer cadastro');
      }
    },
    [navigation],
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <Container>
          <View>
            <Title>Cadastrar Cliente</Title>
          </View>

          <Form ref={formRef} onSubmit={handleSignUp}>
            <Input
              autoCapitalize="none"
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
              autoCapitalize="none"
              name="phone"
              icon="phone"
              placeholder="telefone"
              returnKeyType="next"
              onSubmitEditing={() => {
                passswordInputRef.current?.focus();
              }}
            />
            <Input
              ref={passswordInputRef}
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

export default Client;
