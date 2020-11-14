import React, { useState, useEffect } from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Alert,
  StyleSheet,
  Button,
} from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";
import { useNavigation } from '@react-navigation/native';

import api from "../../services/index";
import InputText from '../../components/InputText'
import { Container, Title, ContainerRemoteButtonText, ErrorValue } from "./styles";
import DateInput from "../../components/DateInput";
import RemoteSelect from "../../components/RemoteSelect";
import moment from "moment";

/*
interface CreateClientRouteFormData {
  submit_date: string;
  quantity: Number;
  value: Number;
  client: Number;
  obs: string;
}
*/

const initialValues: any = {
  last_ship_date: moment().format("YYYY-MM-DD"),
  warning_sub_days: "",
  step_days: "",
  quantity: "",
  value: "",
  obs: "",
  client: "",
};

const schema = Yup.object().shape({
  step_days: Yup.number().required("Campo obrigatório").min(1),
  warning_sub_days: Yup.number().required("Campo obrigatório").min(0),
  client: Yup.number().required("Cliente obrigatório"),
  quantity: Yup.number().required("Campo obrigatório").min(1),
  value: Yup.number().required("Campo obrigatório").min(0.1),
  last_ship_date: Yup.string().required("Campo obrigatório"),
});

const ClientRouteCreate: React.FC = () => {
const navigation = useNavigation();
  const [clients, setClients] = useState([]);

  const onSubmit = (values: any) => {
   try {
    api.post("/paths/", values)
       Alert.alert("Sucesso!", "rota de cliente cadastrada!")
       navigation.navigate('ClientRouteStackCreatedClientRoutes')
   }catch {
        Alert.alert("Fracasso!", "contate o administrador do sistema")
   }
  };

  const getClientData = () => {
    api
      .get("/clients/", { params: { limit: 1000 } })
      .then((response) => setClients(response.data))
      .catch(() => Alert.alert("Fracasso"));
  };

  useEffect(() => {
    getClientData();
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <Container>
          <View>
            <Title>Cadastrar rota de cliente</Title>
          </View>

          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={schema}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <>
                <ContainerRemoteButtonText>
                  <RemoteSelect
                    style={styles.input}
                    onSelectChange={handleChange("client")}
                    data={clients}
                    labelField="full_name"
                    valueField="id"
                    initialLabel="Selecione um cliente"
                  />
                </ContainerRemoteButtonText>


                {errors.client && (
                  <ErrorValue>{errors.client}</ErrorValue>
                )}

                <InputText
                  keyboardType="numeric"

                  icon="shopping-cart"
                  onChangeText={handleChange("quantity")}
                  onBlur={handleBlur("quantity")}
                  placeholder="quantidade"
                  value={String(values.quantity)}
                />

                {errors.quantity && (
                  <ErrorValue>{errors.quantity}</ErrorValue>
                )}

                <InputText
                  keyboardType="numeric"

                  icon="dollar-sign"
                  onChangeText={handleChange("value")}
                  onBlur={handleBlur("value")}
                  placeholder="valor unitário"
                  value={String(values.value)}
                />

                {errors.value && (
                  <ErrorValue>{errors.value}</ErrorValue>
                )}
                <InputText
                  keyboardType="numeric"

                  icon="truck"
                  onChangeText={handleChange("step_days")}
                  onBlur={handleBlur("step_days")}
                  placeholder="periodo de entrega (dias)"
                  value={String(values.step_days)}
                />

                {errors.step_days && (
                  <ErrorValue>{errors.step_days}</ErrorValue>
                )}
                <InputText
                  keyboardType="numeric"

                  icon="zap"
                  onChangeText={handleChange("warning_sub_days")}
                  onBlur={handleBlur("warning_sub_days")}
                  placeholder="antecedência de (dias)"
                  value={String(values.warning_sub_days)}
                />

                {errors.warning_sub_days && (
                  <ErrorValue>
                    {errors.warning_sub_days}
                  </ErrorValue>
                )}

                <DateInput
                  icon="bell"
                  handleChange={handleChange("last_ship_date")}
                  value={values.step_days}
                />

                {errors.last_ship_date && (
                  <ErrorValue>{errors.last_ship_date}</ErrorValue>
                )}

                <View>
                  <Button disabled={false}  onPress={handleSubmit} title="Registrar" color="#000" />
                </View>
              </>
            )}
          </Formik>
        </Container>
      </KeyboardAvoidingView>
    </>
  );
};


const styles = StyleSheet.create({
  input: {
    flex: 1,
    color: "#000",
    fontSize: 16,
    fontFamily: "RobotoSlab-Regular",
  }
});

export default ClientRouteCreate;
