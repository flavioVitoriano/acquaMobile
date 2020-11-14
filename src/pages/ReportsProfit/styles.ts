import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
flex: 1px;
background-color: #fafafa;
padding: 24px 24px ${Platform.OS === 'android' ? 8 : 40}px;
`;

  export const ContainerList = styled.View`
    background-color: #fff;
    border-width: 1px;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
`;
export const AtrasadoList = styled.View`
    background-color: #fff;
    border-width: 1px;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
`;


  export const ProfitTitle = styled.Text`
        font-size: 16px;
        font-family: 'RobotoSlab-Medium';
        color: #333;
   `;

 export const ProfitDescription= styled.Text`
        font-size: 16px;
        color: #999;
        margin-top: 5px;
        line-height: 24px;
    `;
 export const ProfitButton = styled.TouchableOpacity`
        height: 42px;
        border-radius: 5px;
        border-width: 2px;
        border-color: #da552f;
        background-color: transparent;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
    `;

 export const ProfitButtonText= styled.Text`
        font-size: 16px;
        color: #da552f;
        font-family: 'RobotoSlab-Medium';
    `;
