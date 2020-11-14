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
  SeachData,
  LoansDescription,
  LoansTitle,
  Loans,
  Title,
  ContactBox,
  Input,
  Description,

} from "./styles";
import api from "../../services";
import { Formik } from "formik";
import * as Yup from "yup";

interface loansRouteParams {
  id: number;
}
interface loansDetail {
 // accept_date
 //status
  client: number;
  quantity: number;
  user: number;
  obs: string;
}

const initialValues: loansDetail = {
  client: 0,
  quantity: 0,
  user: 0,
  obs: "",
};

const schema = Yup.object().shape({
  obs: Yup.string().required("Campo obrigatório"),
});

export default function CarboyLoanDetail() {
  const route = useRoute();
  const navigation = useNavigation();

  const params = route.params as loansRouteParams;
  const [loans, setLoans] = useState<loansDetail>(initialValues);

  useEffect(() => {
    api.get(`/loans/${params.id}/`).then((response) => {
      setLoans({ ...loans, ...response.data });
    });
  }, [params.id]);

  const updateloans = (values: object) => {
    try {
      api
        .patch(`/loans/${params.id}/`, values)
      Alert.alert("sucesso!", "empréstimo atualizado")
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
          <Title>Toque Para editar Empréstimo</Title>

          <RectButton onPress={() => { }}>
            <Icon name="edit" size={28} color="#e82041" />
          </RectButton>
        </Header>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Loans>
            <Formik
              initialValues={loans}
              enableReinitialize={true}
              onSubmit={updateloans}
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


                    <Button onPress={handleSubmit} title="Salvar Edições" color="#000" />
                  </>
                );
              }}
            </Formik>
          </Loans>

          <ContactBox>
            <LoansTitle>Entre em contato e</LoansTitle>
            <LoansTitle>converse com o dono dessa compra</LoansTitle>

            <LoansDescription>Entrar em contato via:</LoansDescription>

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
