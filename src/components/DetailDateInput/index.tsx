import React from "react";
import TextInputMask from "react-native-text-input-mask";
import moment from "moment";
import { Container, Icon } from "./styles";

interface DateInputProps {
  handleISOChange: Function;
  handleChange: Function;
  value: string;
  icon: string;
}

const DateInput: React.FC<DateInputProps> = (props) => {
  const onChange = (formatted: string) => {
    const isoValue = moment(formatted, "DD/MM/YYYY").format("YYYY-MM-DD");
    props.handleChange(formatted);
    props.handleISOChange(isoValue);
  };

  return (
    <Container>
      <Icon name={props.icon} size={20} color="#000" />

      <TextInputMask
        onChangeText={onChange}
        mask={"[00]/[00]/[0000]"}
        value={props.value}
      />
    </Container>
  );
};

export default DateInput;
