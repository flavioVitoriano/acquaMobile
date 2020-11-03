import React from 'react';
import {Container, Icon,TextInput} from './styles';

interface InputProps {
  onChangeText: Function;
  name?: string;
  icon: string;
  onBlur:Function;
  placeholder:string;
  value: string | number;
  keyboardType: string;
}

const InputText : React.FC<InputProps> =({name,value,keyboardType, icon,onChangeText,onBlur, ...rest}) =>(

 <Container>
   <Icon name={icon} size={20} color="#666360" />
<TextInput
keyboardAppearance="dark"
placeholderTextColor="#666360"
{...rest}
 />

 </Container>
)
export default InputText;
