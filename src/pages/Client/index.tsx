import React, { useRef } from "react";
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";

import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Title } from "./styles";

const Client: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <View>
              <Title>Cadastrar Cliente</Title>
            </View>

            <Form ref={formRef} onSubmit={() => {}}>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                name="username"
                icon="user"
                placeholder="Nome do cliente"
                returnKeyType="next"
              />
              <Input
                name="city"
                icon="phone"
                placeholder="telefone"
                returnKeyType="next"
              />
              <Input
                name="preferred_price"
                icon="bell"
                placeholder="preço padrão"
                returnKeyType="send"
              />
              <Input
                name="city"
                icon="city"
                placeholder="Cidade"
                returnKeyType="send"
              />
              <Input
                name="address"
                icon="address"
                placeholder="Endereco"
                returnKeyType="send"
              />
              <Input
                name="number_address"
                icon="bell"
                placeholder="número endereço"
                returnKeyType="send"
              />

              <View>
                <Button
                  onPress={() => {
                    formRef.current?.submitForm();
                  }}
                >
                  Cadastrar
                </Button>
              </View>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Client;
