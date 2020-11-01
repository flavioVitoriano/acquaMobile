import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";

interface RemoteSelectProps {
  data: Array<object>;
  onSelectChange: any;
  labelField: string;
  valueField: string;
  initialLabel: string;
}

const RemoteSelect = (props: RemoteSelectProps) => {
  const [selected, setSelected] = useState("");

  const onValueChange = (value: any) => {
    setSelected(value);
    props.onSelectChange(value);
  };
  return (
    <>
      <Picker selectedValue={selected} onValueChange={onValueChange}>
        <Picker.Item label={props.initialLabel} value="" />

        {props.data.map((item: any) => (
          <Picker.Item
            label={item[props.labelField]}
            value={item[props.valueField]}
          />
        ))}
      </Picker>
    </>
  );
};

export default RemoteSelect;
