import React, { useEffect, useState } from "react";
import { StyleProp, TextStyle } from "react-native";
import { TextInput } from "react-native-paper";

interface Props {
  value: string;
  onChange: (value: string) => void;
  style?: StyleProp<TextStyle>;
  placeholder?: string;
  clean?: boolean;
}

function EditInput(props: Props) {
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const onChange = (newText: string) => {
    setValue(newText);
  };

  const onBlur = () => {
    props.onChange(value);
    props.clean && setValue("");
  };

  return (
    <TextInput
      mode="outlined"
      value={value}
      placeholder={props.placeholder}
      onChangeText={onChange}
      onBlur={onBlur}
      onPressIn={undefined}
      onPressOut={onBlur}
      style={props.style}
    />
  );
}

export default EditInput;
