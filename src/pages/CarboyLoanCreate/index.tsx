import React, { useState, useEffect } from "react";
import {
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Button,
  StyleSheet,
} from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";

import api from "../../services/index";
import InputText from '../../components/InputText';
import { Container, Title,ErrorValue,ContainerRemoteButtonText } from "./styles";
import DateInput from "../../components/DateInput";
import RemoteSelect from "../../components/RemoteSelect";
import moment from "moment";
import { useNavigation, useRoute } from "@react-navigation/native";

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
  quantity: Yup.number().required("Campo obrigatório").min(1),
  client: Yup.number().required("Cliente é obrigatório"),
  obs: Yup.string(),
  order_date: Yup.string().required("obrigatório definir data"),
});

const CarboyLoanCreate: React.FC = () => {
  const [clients, setClients] = useState([]);
const navigation =useNavigation();
  const onSubmit = (values: any) => {
    try {
    api
      .post("/loans/", values)
       Alert.alert("Sucesso!", "empréstimo registrado!")
       navigation.navigate('CarboyLoanStackRoutes')
    }catch{
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
            <Title>Cadastrar empréstimo</Title>
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
                  keyboardType="default"
                  icon="alert-circle"
                  onChangeText={handleChange("obs")}
                  onBlur={handleBlur("obs")}
                  placeholder="Observação"
                  value={values.obs}
                />

                <DateInput
                  icon="bell"
                  value={values.order_date}
                  handleChange={handleChange("order_date")}
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
  }
});

export default CarboyLoanCreate;
