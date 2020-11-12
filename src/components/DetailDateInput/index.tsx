import React from "react";
import TextInputMask from "react-native-text-input-mask";
import moment from "moment";
import {StyleSheet} from 'react-native';
interface DateInputProps {
  handleISOChange: Function;
  handleChange: Function;
  value: string;
  returnKeyType: any;
  placeholder: string;
  autoCorrect: boolean;
  onChangeText: Function;

}

const DateInput: React.FC<DateInputProps> = (props) => {
  const onChange = (formatted: string) => {
    const isoValue = moment(formatted, "DD/MM/YYYY").format("YYYY-MM-DD");
    props.handleChange(formatted);
    props.handleISOChange(isoValue);
  };

  return (

     <TextInputMask
      style={styles.searchInput}
      keyboardType="numeric"
      autoCapitalize="none"
      placeholderTextColor="#999"
      placeholder={props.placeholder}
      autoCorrect={props.autoCorrect}
      returnKeyType={props.returnKeyType}

        onChangeText={onChange}
        mask={"[00]/[00]/[0000]"}
        value={props.value}
      />

  );
};

export default DateInput;

const styles = StyleSheet.create({

searchInput: {
  flex: 1,
  height: 50,
  backgroundColor: '#4169b3',
  color: '#000',
  borderRadius: 25,
  paddingHorizontal: 16,
  fontSize: 16,
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowOffset: {
    width: 4,
    height: 4,
  },
  elevation: 2,
},
})
