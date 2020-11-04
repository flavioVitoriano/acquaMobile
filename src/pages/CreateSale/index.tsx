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

import api from "../../services/index";

import { Container, Title } from "./styles";
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

const Sale: React.FC = () => {
  const [clients, setClients] = useState([]);

  const onSubmit = (values: any) => {
    api
      .post("/sales/", values)
      .then(() => Alert.alert("Sucesso!", "venda registrada!"))
      .catch(() =>
        Alert.alert("Fracasso!", "contate o administrador do sistema"),
      );
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
                <RemoteSelect
                  style={styles.input}
                  onSelectChange={handleChange("client")}
                  data={clients}
                  labelField="full_name"
                  valueField="id"
                  initialLabel="Selecione um cliente"
                />

                {errors.client && (
                  <Text style={styles.errorText}>{errors.client}</Text>
                )}
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("quantity")}
                  keyboardType="numeric"
                  onBlur={handleBlur("quantity")}
                  placeholder="quantidade"
                  value={String(values.quantity)}
                />

                {errors.quantity && (
                  <Text style={styles.errorText}>{errors.quantity}</Text>
                )}

                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("value")}
                  keyboardType="numeric"
                  onBlur={handleBlur("value")}
                  placeholder="valor unitário"
                  value={String(values.value)}
                />

                {errors.value && (
                  <Text style={styles.errorText}>{errors.value}</Text>
                )}

                <TextInput
                  style={styles.input}
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
                  <Button onPress={handleSubmit} title="Registrar" />
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
    backgroundColor: "#fff",
    width: "90%",
    borderStyle: "solid",
    borderColor: "#000",
  },
  errorText: {
    color: "red",
  },
  confirmButton: {
    width: "90%",
  },
});

export default Sale;
