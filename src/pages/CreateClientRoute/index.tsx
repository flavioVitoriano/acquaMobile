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
  step_days: Yup.number().required("Campo necessário").min(1),
  warning_sub_days: Yup.number().required("Campo necessário").min(0),
  client: Yup.number().required("Cliente necessário"),
  quantity: Yup.number().required("Campo necessário").min(1),
  value: Yup.number().required("Campo necessário").min(0.1),
  last_ship_date: Yup.string().required("Campo necessário"),
});

const CreateClientRoute: React.FC = () => {
  const [clients, setClients] = useState([]);

  const onSubmit = (values: any) => {
    api
      .post("/paths/", values)
      .then(() => Alert.alert("Sucesso!", "rota de cliente cadastrada!"))
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
            <Title>Cadastrar rota de cliente</Title>
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
                  placeholder="valor unitario"
                  value={String(values.value)}
                />

                {errors.value && (
                  <Text style={styles.errorText}>{errors.value}</Text>
                )}
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("step_days")}
                  keyboardType="numeric"
                  onBlur={handleBlur("step_days")}
                  placeholder="periodo de entrega (dias)"
                  value={String(values.step_days)}
                />

                {errors.step_days && (
                  <Text style={styles.errorText}>{errors.step_days}</Text>
                )}
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("warning_sub_days")}
                  keyboardType="numeric"
                  onBlur={handleBlur("warning_sub_days")}
                  placeholder="antecedência de (dias)"
                  value={String(values.warning_sub_days)}
                />

                {errors.warning_sub_days && (
                  <Text style={styles.errorText}>
                    {errors.warning_sub_days}
                  </Text>
                )}

                <DateInput
                  handleChange={handleChange("last_ship_date")}
                  value={values.step_days}
                />

                {errors.last_ship_date && (
                  <Text style={styles.errorText}>{errors.last_ship_date}</Text>
                )}

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

export default CreateClientRoute;
