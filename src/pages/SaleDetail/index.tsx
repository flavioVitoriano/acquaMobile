import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Linking, ScrollView, Alert, Button } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import {
  Container,
  Header,
  Action,
  ActionText,
  Actions,
  SaleDescription,
  SaleTitle,
  Sales,
  Title,
  ContactBox,
  Input,
  Description,

} from "./styles";
import api from "../../services";
import { Formik } from "formik";
import * as Yup from "yup";

interface saleRouteParams {
  id: number;
}
interface SaleDetail {
  client: number;
  discounts: number;
  quantity: number;
  user: number;
  value: number;
  obs: string;
  total: number;
}

const initialValues: SaleDetail = {
  client: 0,
  discounts: 0,
  quantity: 0,
  user: 0,
  value: 0,
  obs: "",
  total: 0,
};

const schema = Yup.object().shape({
  obs: Yup.string().required("Campo obrigatório"),
});

export default function SaleDetail() {
  const route = useRoute();
  const navigation = useNavigation();

  const params = route.params as saleRouteParams;
  const [sale, setSale] = useState<SaleDetail>(initialValues);

  useEffect(() => {
    api.get(`/sales/${params.id}/`).then((response) => {
      setSale({ ...sale, ...response.data });
    });
  }, [params.id]);

  const updatesale = (values: object) => {
    try {
      api
        .patch(`/sales/${params.id}/`, values)
      Alert.alert("sucesso!", "venda atualizada")
    } catch {
      Alert.alert("fracasso!", "contate o administrador do sistema")
    }
  };

  function navigateBack() {
    navigation.goBack();
  }


  return (
    <>
      <Container style={{ paddingHorizontal: 24 }}>
        <Header>

          <RectButton onPress={navigateBack}>
            <Icon name="arrow-left" size={28} color="#E82041" />
          </RectButton>
          <Title>Toque Para editar Venda</Title>

          <RectButton onPress={() => { }}>
            <Icon name="edit" size={28} color="#e82041" />
          </RectButton>
        </Header>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Sales>
            <Formik
              initialValues={sale}
              enableReinitialize={true}
              onSubmit={updatesale}
              validationSchema={schema}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => {
                return (
                  <>


                    <Description>Cliente: </Description>
                    <Input
                      autoCorrect={false}
                      placeholder="Cliente"
                      keyboardType="numeric"
                      onChangeText={handleChange("client")}
                      onBlur={handleBlur("client")}
                      value={String(values.client)}
                      returnKeyType="next"
                    />

                    <Description>Desconto: </Description>
                    <Input
                      autoCorrect={false}
                      placeholder="Desconto"
                      keyboardType="numeric"
                      onChangeText={handleChange("discounts")}
                      onBlur={handleBlur("discounts")}
                      value={String(values.discounts)}
                      returnKeyType="next"
                    />

                    <Description>Quantidade: </Description>
                    <Input
                      autoCorrect={false}
                      placeholder="Quantidade"
                      keyboardType="numeric"
                      onChangeText={handleChange("quantity")}
                      onBlur={handleBlur("quantity")}
                      value={String(values.quantity)}
                      returnKeyType="next"
                    />

                    <Description>Usuário: </Description>
                    <Input
                      autoCorrect={false}
                      autoCapitalize="characters"
                      placeholder="Usuário"
                      onChangeText={handleChange("user")}
                      onBlur={handleBlur("user")}
                      value={String(values.user)}
                      keyboardType="numeric"
                      returnKeyType="next"
                    />

                    <Description>Valor: </Description>
                    <Input
                      autoCorrect={false}
                      autoCapitalize="characters"
                      placeholder="Valor"
                      onChangeText={handleChange("value")}
                      onBlur={handleBlur("value")}
                      value={String(values.value)}
                      keyboardType="numeric"
                      returnKeyType="next"
                    />
                    <Description>Observação: </Description>

                    <Input
                      autoCorrect={false}
                      autoCapitalize="words"
                      placeholder="Observação"
                      onChangeText={handleChange("obs")}
                      onBlur={handleBlur("obs")}
                      value={values.obs}
                      returnKeyType="next"
                    />

                    <Description>Total: </Description>
                    <Input
                      autoCorrect={false}
                      autoCapitalize="characters"
                      placeholder="Total"
                      onChangeText={handleChange("total")}
                      onBlur={handleBlur("total")}
                      value={String(values.total)}
                      keyboardType="numeric"
                      returnKeyType="next"
                    />
                    <Button onPress={handleSubmit} title="Salvar Edições" color="#000" />
                  </>
                );
              }}
            </Formik>
          </Sales>

          <ContactBox>
            <SaleTitle>Entre em contato e</SaleTitle>
            <SaleTitle>converse com o dono dessa compra</SaleTitle>

            <SaleDescription>Entrar em contato via:</SaleDescription>

            <Actions>
              <Action onPress={() => { }}>
                <ActionText>WhatsApp</ActionText>
              </Action>
            </Actions>
          </ContactBox>
        </ScrollView>
      </Container>
    </>
  );
}
