import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
interface ClientData {
  id: number;
  full_name: string;
}
interface LoanFormData {
  id: number;
  quantity: number;
  value: number;
  obs: string;
  submit_date: any;
  client:ClientData;
}

export const Container = styled.SafeAreaView`
  margin: 20px;
  flex: 1;
  padding: 0 24px ${Platform.OS === 'android' ? 8 : 40}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.Text`
font-family: 'RobotoSlab-Medium';
font-size: 15px;
color: #737373;
`

export const Description = styled.TextInput`
font-size: 16px;
line-height:24px;
font-family: 'RobotoSlab-Medium';
color: #737373;
;`

export const LoanList = styled(FlatList as new () => FlatList<LoanFormData>)`
margin-top:32px;
`;

export const Loan = styled.View`
padding: 24px;
border-radius:8px;
background-color: #FFF;
margin-bottom: 16px;
`;

export const LoanProperty = styled.Text`
font-family: 'RobotoSlab-Medium';
font-size: 14px;
color: #4169b3;
font-weight: bold;
`;

export const LoanValue = styled.Text`
font-family: 'RobotoSlab-Medium';
margin-top: 8px;
font-size: 15px;
margin-bottom: 24px;
color: #737373;
`;

export const DetailsButton = styled.TouchableOpacity`
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

export const DetailsButtonText = styled.Text`
font-family: 'RobotoSlab-Medium';
color: #e02041;
font-size:15px;
font-weight:bold
`;
