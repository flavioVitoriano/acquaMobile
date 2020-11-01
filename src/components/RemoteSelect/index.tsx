import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";

interface RemoteSelectProps {
  data: Array<object>;
  onSelectChange: any;
  labelField: string;
  valueField: string;
  initialLabel: string;
  style?: any;
}

const RemoteSelect = (props: RemoteSelectProps) => {
  const [selected, setSelected] = useState("");

  const onValueChange = (value: any) => {
    const newValue = String(value);
    setSelected(value);
    props.onSelectChange(newValue);
  };

  return (
    <>
      <Picker
        style={props.style}
        selectedValue={selected}
        onValueChange={onValueChange}
      >
        <Picker.Item label={props.initialLabel} value="" />

        {props.data.map((item: any) => (
          <Picker.Item
            key={item[props.valueField]}
            label={item[props.labelField]}
            value={item[props.valueField]}
          />
        ))}
      </Picker>
    </>
  );
};

export default RemoteSelect;
