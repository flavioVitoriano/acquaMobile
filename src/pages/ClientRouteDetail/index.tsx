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
  PathsDescription,
  PathsTitle,
  Paths,
  Title,
  ContactBox,
  Input,
  Description,

} from "./styles";
import api from "../../services";
import { Formik } from "formik";
import * as Yup from "yup";

interface pathsRouteParams {
  id: number;
}
interface pathsDetail {
  client: number;
  quantity: number;
  step_days: number;
  total: number;
  user: number;
  value: number;
  warning_sub_day: number;
}

const initialValues: pathsDetail = {
  client: 0,
  quantity: 0,
  step_days: 0,
  total: 0,
  user: 0,
  value: 0,
  warning_sub_day: 0,
};

const schema = Yup.object().shape({
  client: Yup.string().required("Campo obrigatório"),
});

export default function ClientRouteDetail() {
  const route = useRoute();
  const navigation = useNavigation();

  const params = route.params as pathsRouteParams;
  const [paths, setPaths] = useState<pathsDetail>(initialValues);

  useEffect(() => {
    api.get(`/paths/${params.id}/`).then((response) => {
      setPaths({ ...paths, ...response.data });
    });
  }, [params.id]);

  const updatepaths = (values: object) => {
    try {
      api
        .patch(`/paths/${params.id}/`, values)
      Alert.alert("sucesso!", "rota atualizada")
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
          <Title>Toque Para editar Rota</Title>

          <RectButton onPress={() => { }}>
            <Icon name="edit" size={28} color="#e82041" />
          </RectButton>
        </Header>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Paths>
            <Formik
              initialValues={paths}
              enableReinitialize={true}
              onSubmit={updatepaths}
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

                    <Description>Dias de parada: </Description>
                    <Input
                      autoCorrect={false}
                      placeholder="Dias de parada"
                      keyboardType="numeric"
                      onChangeText={handleChange("step_days")}
                      onBlur={handleBlur("step_days")}
                      value={String(values.step_days)}
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

                    <Description>Aviso Sobre o dia: </Description>
                    <Input
                      autoCorrect={false}
                      autoCapitalize="words"
                      placeholder="Aviso Sobre o dia"
                      onChangeText={handleChange("warning_sub_day")}
                      onBlur={handleBlur("warning_sub_day")}
                      value={String(values.warning_sub_day)}
                      returnKeyType="next"
                    />


                    <Button onPress={handleSubmit} title="Salvar Edições" color="#000" />
                  </>
                );
              }}
            </Formik>
          </Paths>

          <ContactBox>
            <PathsTitle>Entre em contato e</PathsTitle>
            <PathsTitle>converse com o dono dessa compra</PathsTitle>

            <PathsDescription>Entrar em contato via:</PathsDescription>

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
