import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Linking, ScrollView, Alert, Button, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
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
  ContactBox,
  Input,
} from "./styles";
import api from "../../services";
import { Formik } from "formik";
import * as Yup from "yup";
import { Description } from "../ClientCreated/styles";

interface clientDetailRouteParams {
  id: number;
}
interface clientDetail {
  address: string;
  city: string;
  full_name: string;
  number_address: string;
  phone: string;
  preferred_price: string;
}

const initialValues: clientDetail = {
  address: "",
  city: "",
  full_name: "",
  number_address: "",
  phone: "",
  preferred_price: "",
};

const schema = Yup.object().shape({
  full_name: Yup.string().required("Campo necessário"),
});

export default function DetailClient() {
  const route = useRoute();
  const navigation = useNavigation();

  const params = route.params as clientDetailRouteParams;
  const [client, setClient] = useState<clientDetail>(initialValues);

  useEffect(() => {
    api.get(`/clients/${params.id}/`).then((response) => {
      setClient({ ...client, ...response.data });
    });
  }, [params.id]);

  const updateClient = (values: object) => {
    api
      .patch(`/clients/${params.id}/`, values)
      .then((res) => Alert.alert("sucesso!", "cliente atualizado"))
      .catch((error) =>
        Alert.alert("fracasso!", "contate o administrador do sistema"),
      );
  };

  const message = `Olá ${client?.full_name}, estou entrando em contato pois gostaria de saber se o senhor
   vai fazer pedido de garrafões.`;

  function navigateBack() {
    navigation.navigate("ClientCreated");
  }

  function sendWhatsapp() {
    if (!client.phone) return;
    Linking.openURL(
      `whatsapp://send?phone=+55${client?.phone}&text=${message}`,
    );
  }

  return (
    <>
      <Container style={{ paddingHorizontal: 24 }}>
        <Header>
          <RectButton onPress={navigateBack}>
            <Icon name="arrow-left" size={28} color="#E82041" />
          </RectButton>
          <Title>Toque Para editar Cliente</Title>

          <RectButton onPress={() => {}}>
            <Icon name="edit" size={28} color="#e82041" />
          </RectButton>
        </Header>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Clients>
            <Formik
              initialValues={client}
              enableReinitialize={true}
              onSubmit={updateClient}
              validationSchema={schema}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => {
                return (
                  <>
<<<<<<< HEAD
                    <Description>Nome: </Description>
=======
                    <Description style={{ color: "#4169b3" }}>
                      Nome:{" "}
                    </Description>
>>>>>>> f5a2ebf89674087251cf4e52653adfa0318e7617
                    <Input
                      autoCapitalize="words"
                      autoCorrect={false}
                      placeholder="Nome completo"
                      onChangeText={handleChange("full_name")}
                      onBlur={handleBlur("full_name")}
                      value={values.full_name}
                      returnKeyType="next"
                    />
<<<<<<< HEAD
                    <Description>Telefone: </Description>
=======
                    {errors.full_name && (
                      <Text style={{ color: "red" }}>{errors.full_name}</Text>
                    )}

                    <Description style={{ color: "#4169b3" }}>
                      Telefone:{" "}
                    </Description>
>>>>>>> f5a2ebf89674087251cf4e52653adfa0318e7617

                    <Input
                      autoCorrect={false}
                      autoCapitalize="characters"
                      placeholder="Número de contato"
                      onChangeText={handleChange("phone")}
                      onBlur={handleBlur("phone")}
                      value={values.phone}
                      keyboardType="phone-pad"
                      returnKeyType="next"
                    />
<<<<<<< HEAD
                    <Description>Cidade: </Description>
=======
                    <Description style={{ color: "#4169b3" }}>
                      Cidade:{" "}
                    </Description>
>>>>>>> f5a2ebf89674087251cf4e52653adfa0318e7617

                    <Input
                      autoCorrect={false}
                      autoCapitalize="words"
                      placeholder="Nome da cidade"
                      onChangeText={handleChange("city")}
                      onBlur={handleBlur("city")}
                      value={values.city}
                      returnKeyType="next"
                    />
<<<<<<< HEAD
                    <Description>Preço Padrão: </Description>
=======
                    <Description style={{ color: "#4169b3" }}>
                      Preço Padrão:{" "}
                    </Description>
>>>>>>> f5a2ebf89674087251cf4e52653adfa0318e7617

                    <Input
                      keyboardType="numeric"
                      placeholder="Preço padrão"
                      onChangeText={handleChange("preferred_price")}
                      onBlur={handleBlur("preferred_price")}
                      value={String(values.preferred_price)}
                      returnKeyType="send"
                    />
<<<<<<< HEAD
                    <Button onPress={handleSubmit} title="Salvar Edições"  color="#000" />
=======
                    <Button
                      onPress={handleSubmit}
                      title="Salvar Edições"
                      color="#000"
                    />
>>>>>>> f5a2ebf89674087251cf4e52653adfa0318e7617
                  </>
                );
              }}
            </Formik>
          </Clients>

          <ContactBox>
            <ClientTitle>Entre em contato e</ClientTitle>
            <ClientTitle>converse com seu cliente</ClientTitle>

            <ClientDescription>Entrar em contato via:</ClientDescription>

            <Actions>
              <Action onPress={sendWhatsapp}>
                <ActionText>WhatsApp</ActionText>
              </Action>
            </Actions>
          </ContactBox>
        </ScrollView>
      </Container>
    </>
  );
}
