import React, { useState, useEffect } from "react";
import {
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  Alert,
  StyleSheet,
  Button,
  Text,
} from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";
import { useNavigation, useRoute } from "@react-navigation/native";

import api from "../../services/index";
import InputText from '../../components/InputText'
import { Container, Title,ContainerRemoteButtonText,ErrorValue } from "./styles";
import DateInput from "../../components/DateInput";
import RemoteSelect from "../../components/RemoteSelect";
import moment from "moment";

/*
interface SaleFormData {
  submit_date: string;
  quantity: Number;
  value: Number;
  client: Number;
  obs: string;
}
*/

const initialValues: any = {
  submit_date: moment().format("YYYY-MM-DD"),
  quantity: "",
  value: "",
  obs: "",
  client: "",
};

const schema = Yup.object().shape({
  quantity: Yup.number().required("Campo obrigatório").min(1),
  value: Yup.number().required("Campo obrigatório").min(0.1),
  client: Yup.number().required("Cliente é obrigatório"),
  obs: Yup.string(),
  submit_date: Yup.string().required("obrigatório definir data"),
});

const SaleCreate: React.FC = () => {
  const navigation  = useNavigation()
  const [clients, setClients] = useState([]);

  const onSubmit = (values: any) => {
    try {
    api.post("/sales/", values)
       Alert.alert("Sucesso!", "venda registrada!")
       navigation.navigate('SaleStackRoutes')
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
            <Title>Registrar venda</Title>
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

                  initialLabel="Selecione um cliente"
                  onSelectChange={handleChange("client")}
                  data={clients}
                  labelField="full_name"
                  valueField="id"
                />
              </ContainerRemoteButtonText>


                {errors.client && (
                  <ErrorValue>{errors.client}</ErrorValue>
                )}
                <InputText
                icon="shopping-cart"
                  onChangeText={handleChange("quantity")}
                  keyboardType="numeric"
                  onBlur={handleBlur("quantity")}
                  placeholder="quantidade"
                  value={String(values.quantity)}
                />

                {errors.quantity && (
                  <ErrorValue>{errors.quantity}</ErrorValue>
                )}

                <InputText
                 icon="dollar-sign"
                  onChangeText={handleChange("value")}
                  keyboardType="numeric"
                  onBlur={handleBlur("value")}
                  placeholder="valor unitário"
                  value={String(values.value)}
                />

                {errors.value && (
                  <ErrorValue>{errors.value}</ErrorValue>
                )}

                <InputText
                  keyboardType="default"
                  icon="alert-circle"
                  onChangeText={handleChange("obs")}
                  onBlur={handleBlur("obs")}
                  placeholder="Observação"
                  value={values.obs}
                />

                <DateInput
                icon="bell"
                  value={values.submit_date}
                  handleChange={handleChange("submit_date")}
                />

                <View>
                  <Button  disabled={false} onPress={handleSubmit} title="Registrar" color="#000"/>
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
    flex:1,
    color: "#000",
    fontSize: 16,
    fontFamily: "RobotoSlab-Regular",
  },})

export default SaleCreate;
