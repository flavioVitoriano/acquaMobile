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
interface CarboyLoanFormData {
  order_date: string;
  quantity: Number;
  client: Number;
  obs: string;
}
*/

const initialValues: any = {
  order_date: moment().format("YYYY-MM-DD"),
  quantity: "",
  obs: "",
  client: "",
};

const schema = Yup.object().shape({
  quantity: Yup.number().required("Campo necessário").min(1),
  client: Yup.number().required("Cliente é necessário"),
  obs: Yup.string(),
  order_date: Yup.string().required("Necessário definir data"),
});

const CarboyLoan: React.FC = () => {
  const [clients, setClients] = useState([]);

  const onSubmit = (values: any) => {
    api
      .post("/loans/", values)
      .then(() => Alert.alert("Sucesso!", "emprestimo registrado!"))
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
            <Title>Cadastro de empréstimo</Title>
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
                  onChangeText={handleChange("obs")}
                  onBlur={handleBlur("obs")}
                  placeholder="Observação"
                  value={values.obs}
                />

                <DateInput
                  value={values.order_date}
                  handleChange={handleChange("order_date")}
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

export default CarboyLoan;
