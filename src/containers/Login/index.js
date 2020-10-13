import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Alert} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {login} from '../../api/auth';

const initialValues = {
  username: '',
  password: '',
};

export default function LoginPage({navigator}) {
  const [formData, setFormData] = useState(initialValues);

  const changeFormData = (field, value) => {
    setFormData({...formData, [field]: value});
  };

  const onLoginPress = () => {
    login(formData)
      .then((res) => {
        Alert.alert('Sucesso', 'sucesso!');
      })
      .catch((error) => {
        Alert.alert(
          'Erro',
          'não foi possível fazer login, verifique seus dados',
        );
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fazer login no Acqua</Text>

      <SafeAreaView>
        <Text>Usuário</Text>
        <Input
          name="username"
          value={formData.username}
          onChangeText={(text) => changeFormData('username', text)}
        />
        <Text>Senha</Text>
        <Input
          secureTextEntry
          name="password"
          onChangeText={(text) => changeFormData('password', text)}
        />
        <Button style={styles.button} title="Login" onPress={onLoginPress} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    borderRadius: 10,
  },
});
