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
interface CreateMoveFormData {
  order_date: string;
  value: Number;
  status: Number;
  obs: string;
}
*/

const initialValues: any = {
  order_date: moment().format("YYYY-MM-DD"),
  value: "",
  status: "",
  obs: "",
};

const schema = Yup.object().shape({
  value: Yup.number().required("Campo necessário").min(0.1),
  status: Yup.number().required("Campo necessário"),
  obs: Yup.string(),
  order_date: Yup.string().required("Necessário definir data"),
});

const CreateMove: React.FC = () => {
  const [clients, setClients] = useState([]);

  const onSubmit = (values: any) => {
    api
      .post("/moves/", values)
      .then(() => Alert.alert("Sucesso!", "movimento registrado!"))
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
            <Title>Registro de movimento</Title>
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
                  onSelectChange={handleChange("status")}
                  data={[
                    { value: 0, label: "ENTRADA" },
                    { value: 1, label: "SAIDA" },
                  ]}
                  labelField="label"
                  valueField="value"
                  initialLabel="Selecione um tipo de movimento"
                />

                {errors.status && (
                  <Text style={styles.errorText}>{errors.status}</Text>
                )}
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("value")}
                  keyboardType="numeric"
                  onBlur={handleBlur("value")}
                  placeholder="valor"
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

export default CreateMove;