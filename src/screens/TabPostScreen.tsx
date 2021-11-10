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

const WINDOW_HEIGHT = Dimensions.get("window").height;
const CAPTURE_SIZE = Math.floor(WINDOW_HEIGHT * 0.08);
const TAG = "TabPostScreen";

interface Props {
  route?: any;
}

export default function TabPostScreen(props: Props) {
  const { route } = props;
  const params = route.params;

  const [hasPermission, setHasPermission] = useState<boolean>();
  // const [type, setType] = useState(Camera.Constants.Type.back);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // (async () => {
    //   const { status } = await Camera.requestPermissionsAsync();
    //   setHasPermission(status === 'granted');
    // })();

    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    })();
  }, []);

  const handleChangeTitle = (e: any) => {
    console.log(e);
  };

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
    // const [username] = await Promise.all([
    //   AuthenticatorService.getUsername(),
    //   // AuthenticatorService.get

    // ]);
    toggleLoading();
    PostService.createPost(image, description).then(toggleLoading);
    // fetch(image)
    //   .then(response => response.blob())
    //   .then(blob => Storage.put(`${new Date().getTime()}/${image}`,blob,{
    //     contentType: "image/jpeg", // contentType is optional
    //   }))
    //   .then(response => console.log("LA RESPUESTA",JSON.stringify(response)))

    //   .catch(e => console.log(`[${TAG}] Error trying to upload ${image}: ${e} `))
  };

  if (hasPermission === null) {
    return <View />;
  }
  // if (hasPermission === false) {
  //   return <View>No access to camera</View>;
  // }

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          value={description}
          label={Translator.translate(Dictionary.DESCRIPTION)}
          onChangeText={setDescription}
          mode="outlined"
          style={styles.textInput}
        />
      </View>
      {/* <TextInput value={title} placeholder="Title" onChangeText={setTitle} /> */}
      {!!image ? <Image source={{ uri: image }} style={{ width: 200, height: 200 }} /> : <View style={{ width: 200, height: 200 }}/>}
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
      {/* <Camera style={styles.camera} type={type}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Text style={styles.text}> Flip </Text>
            </TouchableOpacity>
            <TouchableOpacity
            activeOpacity={0.7}
            // disabled={!isCameraReady}
            // onPress={onSnap}
            style={styles.capture}
            />
          </View>
        </Camera> */}
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
