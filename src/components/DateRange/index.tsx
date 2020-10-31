import React, { useState } from "react";
import { Text, Button } from "react-native";
import TextInputMask from "react-native-text-input-mask";
import moment from "moment";

interface DateRangeProps {
  onSubmit: Function;
}

interface RangeData {
  startDate: string;
  endDate: string;
}

const DateRange = (props: DateRangeProps) => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const prepareSubmit = () => {
    const startISO = moment(start, "DD/MM/YYYY").format("YYYY-MM-DD");
    const endISO = moment(end, "DD/MM/YYYY").format("YYYY-MM-DD");

    props.onSubmit({ startDate: startISO, endDate: endISO });
  };

  return (
    <>
      <Text>Data Inicial: </Text>
      <TextInputMask
        onChangeText={(formatted: any) => {
          setStart(formatted);
        }}
        value={start}
        mask={"[00]/[00]/[0000]"}
      />
      <Text>Data Final: </Text>
      <TextInputMask
        onChangeText={(formatted: any) => {
          setEnd(formatted);
        }}
        value={end}
        mask={"[00]/[00]/[0000]"}
      />
      <Button onPress={prepareSubmit} title="Filtrar" />
    </>
  );
};

export default DateRange;
