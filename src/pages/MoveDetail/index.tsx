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
  Moves,
  MovesDescription,
  MovesTitle,
  SeachData,
  Title,
  ContactBox,
  Input,
  Description,

} from "./styles";
import api from "../../services";
import { Formik } from "formik";
import * as Yup from "yup";

interface moveRouteParams {
  id: number;
}
interface moveDetail {
  obs: string;
  type: number;
  user: number;
  value: number;

}

const initialValues: moveDetail = {
  type:0,
  user: 0,
  value: 0,
  obs: "",
};

const schema = Yup.object().shape({
  obs: Yup.string().required("Campo obrigatório"),
});

export default function MoveDetail() {
  const route = useRoute();
  const navigation = useNavigation();

  const params = route.params as moveRouteParams;
  const [move, setMove] = useState<moveDetail>(initialValues);

  useEffect(() => {
    api.get(`/moves/${params.id}/`).then((response) => {
      setMove({ ...move, ...response.data });
    });
  }, [params.id]);

  const updatemove = (values: object) => {
    try {
      api
        .patch(`/moves/${params.id}/`, values)
      Alert.alert("sucesso!", "Movimento atualizado")
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
          <Title>Toque Para editar Movimento</Title>

          <RectButton onPress={() => { }}>
            <Icon name="edit" size={28} color="#e82041" />
          </RectButton>
        </Header>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Moves>
            <Formik
              initialValues={move}
              enableReinitialize={true}
              onSubmit={updatemove}
              validationSchema={schema}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => {
                return (
                  <>

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


<Description>Tipo: </Description>
                    <Input
                      autoCorrect={false}
                      autoCapitalize="none"
                      placeholder="Tipo"
                      onChangeText={handleChange("type")}
                      onBlur={handleBlur("type")}
                      value={String(values.type)}
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

                    <Description>value: </Description>
                    <Input
                      autoCorrect={false}
                      autoCapitalize="characters"
                      placeholder="value"
                      onChangeText={handleChange("value")}
                      onBlur={handleBlur("value")}
                      value={String(values.value)}
                      keyboardType="numeric"
                      returnKeyType="next"
                    />
                    <Button onPress={handleSubmit} title="Salvar Edições" color="#000" />
                  </>
                );
              }}
            </Formik>
          </Moves>

          <ContactBox>
            <MovesTitle>Entre em contato e</MovesTitle>
            <MovesTitle>converse com o dono dessa compra</MovesTitle>

            <MovesDescription>Entrar em contato via:</MovesDescription>

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
