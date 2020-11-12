import React from 'react';
import {Container, Icon,TextInput} from './styles';

interface InputProps {
 icon: string;
 onChangeText?: any;
 onBlur?: any;
 placeholder: string;
 value?: string;
 keyboardType: any;
}

const InputText : React.FC<InputProps> =({ icon, ...rest}) =>(
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
