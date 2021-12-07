import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";

interface Props {
  value: string;
  onChange: (value: string) => void;
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
  };

  return (
    <TextInput
      mode="outlined"
      value={value}
      onChangeText={onChange}
      onBlur={onBlur}
      onPressIn={undefined}
      onPressOut={onBlur}
    />
  );
}

export default EditInput;
