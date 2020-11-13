import React, { useState } from "react";
import TextInputMask from "react-native-text-input-mask";
import moment from "moment";
import { Container, Icon } from "./styles";

interface DateInputProps {
  handleChange: Function;
  value: string;
  icon: string;
}

const DateInput: React.FC<DateInputProps> = (props) => {
  const [value, setValue] = useState(moment().format("DD/MM/YYYY"));
  const onChange = (formatted: string) => {
    const isoValue = moment(formatted, "DD/MM/YYYY").format("YYYY-MM-DD");
    setValue(formatted);
    props.handleChange(isoValue);
  };

  return (
    <Container>
       <Icon name={props.icon} size={20} color="#000" />

      <TextInputMask
        onChangeText={onChange}
        mask={"[00]/[00]/[0000]"}
        value={value}
      />
    </Container>
  );
};

export default DateInput;
