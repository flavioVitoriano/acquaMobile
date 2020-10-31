import React, { useState } from "react";
import { Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface DatePickerProps {
  onSubmit: Function;
}

const DatePicker = (props: DatePickerProps) => {
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const toggleShowStart = () => {
    if (Platform.OS === "android") setShowStart(!showStart);
  };

  const toggleShowEnd = () => {
    if (Platform.OS === "android") setShowEnd(!showEnd);
  };

  const onChangeStart = (event: Event, date?: Date) => {
    setStartDate(date || new Date());
  };

  const onChangeEnd = (event: Event, date?: Date) => {
    setEndDate(date || new Date());
  };

  return (
    <>
      <Button onPress={toggleShowStart} title="Data inicial" />
      {showStart && (
        <DateTimePicker
          testID="dateTimePicker"
          value={startDate}
          mode="date"
          display="default"
          onChange={onChangeStart}
        />
      )}
      <Button onPress={toggleShowEnd} title="Data final" />
      {showEnd && (
        <DateTimePicker
          testID="dateTimePicker"
          value={endDate}
          mode="date"
          display="default"
          onChange={onChangeEnd}
        />
      )}

      <Button
        onPress={() => props.onSubmit({ startDate, endDate })}
        title="filtrar"
      />
    </>
  );
};

export default DatePicker;
