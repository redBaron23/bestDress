import React, { useState } from "react";
import AuthenticatorService from "../services/AuthenticatorService";
import Profile from "../components/Profile";
import { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Platform,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Storage from "@aws-amplify/storage";
import PostService from "../services/PostService";
import PostModel from "../components/Post/PostModel";
import { TextInput, Button } from "react-native-paper";
import Translator from "../services/Translator";
import { Dictionary } from "../utils/dictionaries";
import { CommonActions, useNavigation } from "@react-navigation/core";
import { Category } from "../components/Post/Category";
import DropDown from "react-native-paper-dropdown";
import CustomDropDown from "../components/CustomDropDown";

const WINDOW_HEIGHT = Dimensions.get("window").height;
const CAPTURE_SIZE = Math.floor(WINDOW_HEIGHT * 0.08);
const TAG = "TabPostScreen";

interface Props {
  route?: any;
}

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

export default function TabPostScreen(props: Props) {
  const { route } = props;
  const params = route.params;
  const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState<boolean>();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showDropDown, setShowDropDown] = useState<boolean>(true);
  const [gender, setGender] = useState<string>("");

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const toggleLoading = () => setIsLoading((prev) => !prev);

  const handleUpload = async () => {
    toggleLoading();
    PostService.createPost(image, description).then(() => {
      toggleLoading();
      setTimeout(() => {
        navigation.dispatch(
          CommonActions.navigate({
            name: Dictionary.HOME,
            params: {
              update: true,
            },
          })
        );
      }, 500);
    });
  };

  if (hasPermission === null) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          value={description}
          label={Translator.translate(Dictionary.DESCRIPTION)}
          onChangeText={setDescription}
          mode="outlined"
          style={styles.textInput}
          onPressIn={undefined}
          onPressOut={undefined}
        />
      </View>
      {!!image ? (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      ) : (
        <View style={{ width: 200, height: 200 }} />
      )}
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={pickImage} style={styles.button}>
          {Translator.translate(Dictionary.PICK_IMAGE)}
        </Button>
        <Button
          mode="contained"
          onPress={handleUpload}
          style={styles.button}
          loading={isLoading}
        >
          {Translator.translate(Dictionary.UPLOAD)}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  textInputContainer: {
    margin: 10,
    padding: 2,
    width: "75%",
  },
  textInput: {},
  buttonsContainer: {
    flex: 1,
    flexDirection: "column",
    width: "50%",
  },
  buttonContainer: {
    margin: 10,
    padding: 2,
    width: "75%",
  },
  button: {
    marginTop: 10,
    padding: 2,
    width: "100%",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  capture: {
    marginRight: "30%",
    alignSelf: "flex-end",
    backgroundColor: "#5A45FF",
    height: CAPTURE_SIZE,
    width: CAPTURE_SIZE,
    borderRadius: Math.floor(CAPTURE_SIZE / 2),
  },
});
