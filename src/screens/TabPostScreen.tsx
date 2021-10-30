import React, { useState } from 'react';
import AuthenticatorService from '../services/AuthenticatorService';
import Profile from '../components/Profile';
import { useEffect } from 'react';
import { Camera } from 'expo-camera';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Button, Platform } from 'react-native';
import { onChange } from 'react-native-reanimated';
import { TextInput } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import Storage from '@aws-amplify/storage';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const CAPTURE_SIZE = Math.floor(WINDOW_HEIGHT * 0.08);
const TAG = "TabPostScreen";

interface Props {
  route?: any
}

export default function TabPostScreen(props: Props) {
    const { route } = props;
    const params = route.params;

    const [hasPermission, setHasPermission] = useState<boolean>();
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [image, setImage] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();

    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    })();
  }, []);

  const handleChangeTitle = (e:any) => {
    console.log(e);
  }

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

  const handleUpload = () => {
    fetch(image)
      .then(response => response.blob())
      .then(blob => Storage.put(image,blob,{

      }))

      .catch(e => console.log(`[${TAG}] Error trying to upload ${image}: ${e} `))
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <View>No access to camera</View>;
  }

    return (
      <View style={styles.container}>
        <TextInput value={title} placeholder="Title" onChangeText={setTitle}/>
        <TextInput value={description} placeholder="Description" onChangeText={setDescription}/>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        <Button title="Upload" onPress={handleUpload}/>
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
  
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent:"center",
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: "flex-start",
    margin: 20,
  },
  button: {
    flex: 0.7,
    alignSelf: 'flex-end',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  capture: {
    marginRight:'30%',
    alignSelf: 'flex-end',
    backgroundColor: '#5A45FF',
    height: CAPTURE_SIZE,
    width: CAPTURE_SIZE,
    borderRadius: Math.floor(CAPTURE_SIZE / 2),
  },
});
