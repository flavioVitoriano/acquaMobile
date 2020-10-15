import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {Container, Title} from './styles';
import api from '../../services/api';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  async function handleSubmit() {
    console.log(password, username);
    try {
      await api.post('/auth', {
        username,
        password,
      });
      Alert.alert('Cadastrado com Sucesso');

      navigation.navigate('Dashboard');
    } catch {
      Alert.alert('error');
    }
  }
  return (
    <>
      <Container>
        <Title>Faça seu Logon</Title>
        <Input
          value={username}
          onChangeText={setUsername}
          name="nome"
          icon="mail"
          placeholder="nome de usuário"
        />
        <Input
          value={password}
          onChangeText={setPassword}
          name="password"
          icon="lock"
          placeholder="Senha"
        />

        <Button onPress={handleSubmit}>Entrar</Button>
      </Container>
    </>
  );
};

export default Login;
