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
import { useNavigation, useRoute } from "@react-navigation/native";
const initialValues: any = {
  submit_date: moment().format("YYYY-MM-DD"),
  quantity: "",
  value: "",
  obs: "",
};

const PurchaseCreate: React.FC = () => {
  const navigation= useNavigation();
  const onSubmit = (values: any) => {
    try {
    api.post("/purchases/", values)

      Alert.alert("Sucesso!", "compra registrada!")
      navigation.navigate('ShoppingStackRoutes')

    }catch {
        Alert.alert("Fracasso!", "contate o administrador do sistema")
    }
  };

  const schema = Yup.object().shape({
    quantity: Yup.number().required("Campo obrigatório").min(1),
    value: Yup.number().required("Campo obrigatório").min(0.1),
    obs: Yup.string(),
    submit_date: Yup.string().required("obrigatório definir data"),
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

                <View style={{width:330}}>
                  <Button  disabled={false} onPress={handleSubmit} title="Registrar" color="#000" />
                </View>
              </>
            )}
          </Formik>
        </Container>
      </KeyboardAvoidingView>
    </>
  );
};


export default PurchaseCreate;
