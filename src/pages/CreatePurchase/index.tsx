import React from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Button,
} from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";
import api from "../../services/index";
import InputText from '../../components/InputText';
import { Container, Title,ErrorValue } from "./styles";
import DateInput from "../../components/DateInput";
import moment from "moment";

const initialValues: any = {
  submit_date: moment().format("YYYY-MM-DD"),
  quantity: "",
  value: "",
  obs: "",
};

const Purchase: React.FC = () => {
  const onSubmit = (values: any) => {
    api
      .post("/purchases/", values)
      .then(() => Alert.alert("Sucesso!", "compra registrada!"))
      .catch(() =>
        Alert.alert("Fracasso!", "contate o administrador do sistema"),
      );
  };

  const schema = Yup.object().shape({
    quantity: Yup.number().required("Campo necessário").min(1),
    value: Yup.number().required("Campo necessário").min(0.1),
    obs: Yup.string(),
    submit_date: Yup.string().required("Necessário definir data"),
  });

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <Container>
          <View>
            <Title>Registrar compra</Title>
          </View>

          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={schema}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <>
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
                  placeholder="valor unitario"
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


export default Purchase;
