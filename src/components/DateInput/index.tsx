import React, { useState } from "react";
import { StyleSheet } from "react-native";
import TextInputMask from "react-native-text-input-mask";
import moment from "moment";

interface DateInputProps {
  handleChange: Function;
  value: string;
}

const DateInput = (props: DateInputProps) => {
  const [value, setValue] = useState(moment().format("DD/MM/YYYY"));
  const onChange = (formatted: string) => {
    const isoValue = moment(formatted, "DD/MM/YYYY").format("YYYY-MM-DD");
    setValue(formatted);
    props.handleChange(isoValue);
  };

  return (
    <>
      <TextInputMask
        style={styles.Input}
        onChangeText={onChange}
        mask={"[00]/[00]/[0000]"}
        value={value}
      />
    </>
  );
};

const styles = StyleSheet.create({
  Input: {
    backgroundColor: "#fff",
    width: "90%",
  },
});

export default DateInput;
