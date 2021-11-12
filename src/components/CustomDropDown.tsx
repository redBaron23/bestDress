import {
    Appbar,
    DarkTheme,
    DefaultTheme,
    Provider,
    Surface,
    ThemeProvider,
  } from "react-native-paper";
  import React, { useState } from "react";
  import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
  import DropDown from "react-native-paper-dropdown";
  
  function CustomDropDown() {
    const [nightMode, setNightmode] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);
    const [gender, setGender] = useState<string>("");
    const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);
    const [colors, setColors] = useState<string>("");
    const genderList = [
      {
        label: "Male",
        value: "male",
      },
      {
        label: "Female",
        value: "female",
      },
      {
        label: "Others",
        value: "others",
      },
    ];
    const colorList = [
      {
        label: "White",
        value: "white",
      },
      {
        label: "Red",
        value: "red",
      },
      {
        label: "Blue",
        value: "blue",
      },
      {
        label: "Green",
        value: "green",
      },
      {
        label: "Orange",
        value: "orange",
      },
    ];
  
    return (
      <DropDown
      label={"Gender"}
      mode={"outlined"}
      visible={showDropDown}
      showDropDown={() => setShowDropDown(true)}
      onDismiss={() => setShowDropDown(false)}
      value={gender}
      setValue={setGender}
      list={genderList}
    />
    );
  }
  
  const styles = StyleSheet.create({
    containerStyle: {
      flex: 1,
    },
    spacerStyle: {
      marginBottom: 15,
    },
    safeContainerStyle: {
      flex: 1,
      margin: 20,
      justifyContent: "center",
    },
  });
  
  export default CustomDropDown;