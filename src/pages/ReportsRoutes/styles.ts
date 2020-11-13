import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

interface resultsFormData {
  client_id: number;
  path_id: number;
  status: string;
  until_days: string;
  indexOf: number;
}

export const Container = styled.SafeAreaView`
  margin: 20px;
  flex: 1;
  padding: 0 24px ${Platform.OS === 'android' ? 8 : 40}px;
`;

export const RouterList = styled(FlatList as new () => FlatList<resultsFormData>)`
margin-top:32px;
`;
  export const ContainerList = styled.View`
    background-color: #fff;
    border-width: 1px;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
`;


  export const RoutesTitle = styled.Text`
        font-size: 16px;
        font-family: 'RobotoSlab-Medium';
        color: #333;
   `;

 export const RoutesDescription= styled.Text`
        font-size: 16px;
        color: #999;
        margin-top: 5px;
        line-height: 24px;
    `;

export const RouterContainer = styled.View`
padding: 24px;
border-radius:8px;
background-color: #FFF;
margin-bottom: 16px;
`;

export const RouteProperty = styled.Text`
font-family: 'RobotoSlab-Medium';
font-size: 14px;
color: #4169b3;
font-weight: bold;
`;

export const RouterValue = styled.Text`
font-family: 'RobotoSlab-Medium';
margin-top: 8px;
font-size: 15px;
margin-bottom: 24px;
color: #737373;
`;

