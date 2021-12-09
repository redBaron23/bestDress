import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Modal, Portal, TextInput } from "react-native-paper";
import User from "../model/User";
import * as ImagePicker from "expo-image-picker";
import PostService from "../services/PostService";
import Translator from "../services/Translator";
import { Dictionary } from "../utils/dictionaries";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSave: (user: User) => void;
  user: User;
}

const EditProfilePictureModal = (props: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");

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

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleUpdate = () => {
    const updatedUser = JSON.parse(JSON.stringify(props.user));

    PostService.uploadImage(image).then((url) => {
      updatedUser.profilePicture = url;
      props.onSave(updatedUser);
    });
  };

  return (
    <Portal>
      <Modal
        visible={props.isOpen}
        onDismiss={props.onClose}
        contentContainerStyle={styles.containerStyle}
      >
        <View style={styles.mainContainer}>
          {!!image ? (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          ) : (
            <View style={{ width: 200, height: 200 }} />
          )}
          <Button mode="text" onPress={pickImage}>
            {Translator.translate(Dictionary.PICK_IMAGE)}
          </Button>
        </View>
        <View style={styles.buttonsModal}>
          <Button mode="text" onPress={props.onClose}>
            {Translator.translate(Dictionary.CANCEL)}
          </Button>
          <Button
            mode="contained"
            loading={isLoading}
            onPress={handleUpdate}
            disabled={!image}
          >
            {Translator.translate(Dictionary.CONFIRM)}
          </Button>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  buttonsModal: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    paddingTop: 30,
  },
  containerStyle: {
    padding: 30,
    backgroundColor: "#fff",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EditProfilePictureModal;
