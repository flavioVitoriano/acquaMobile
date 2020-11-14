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
import { useNavigation } from "@react-navigation/native";

import api from "../../services/index";
import InputText from '../../components/InputText'
import { Container, Title, ContainerRemoteButtonText,ErrorValue } from "./styles";
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
  value: Yup.number().required("Campo obrigatório").min(0.1),
  status: Yup.number().required("Campo obrigatório"),
  obs: Yup.string(),
  order_date: Yup.string().required("obrigatório definir data"),
});

const MoveCreate: React.FC = () => {
  const [clients, setClients] = useState([]);
const navigation = useNavigation();
  const onSubmit = (values: any) => {
    try {
    api.post("/moves/", values)
      Alert.alert("Sucesso!", "movimento registrado!")
      navigation.navigate('MoveStackRoutes')
    } catch { Alert.alert("Fracasso!", "contate o administrador do sistema")
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
            <Title>Registrar  movimento</Title>
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
                  onSelectChange={handleChange("status")}
                  data={[
                    { value: 0, label: "ENTRADA" },
                    { value: 1, label: "SAIDA" },
                  ]}
                  labelField="label"
                  valueField="value"
                  initialLabel="Selecione um tipo de movimento"
                />
              </ContainerRemoteButtonText>


                {errors.status && (
                  <ErrorValue>{errors.status}</ErrorValue>
                )}
                <InputText
                  keyboardType="numeric"
                  icon="dollar-sign"
                  onChangeText={handleChange("value")}
                  onBlur={handleBlur("value")}
                  placeholder="valor"
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
                  value={values.order_date}
                  handleChange={handleChange("order_date")}
                />

                <View>
                  <Button  disabled={false}  onPress={handleSubmit} title="Registrar" color='#000'/>
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
},
});

export default MoveCreate;
