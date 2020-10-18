import {AxiosRequestConfig}from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';

import api from './api';

api.interceptors.request.use(async ({config}: AxiosRequestConfig  | any ) => {

  try {
    const token = await AsyncStorage.getItem('@waterPlus:token');

    if (token) {
      config.headers.Authorization = `Token ${token}`;
      console.log(token)

    }

    return config;
  } catch (err) {
    Alert.alert('ERROR','NO TOKEN');
  }
});
