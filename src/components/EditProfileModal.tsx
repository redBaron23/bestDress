import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Modal, Portal, TextInput } from "react-native-paper";
import User from "../model/User";
import Translator from "../services/Translator";
import { Dictionary } from "../utils/dictionaries";

interface Props {
  open: boolean;
  onClose: () => void;
  onUpdate: (user: User) => void;
  user: User;
}

const EditProfileModal = (props: Props) => {
  const [name, setName] = useState(props.user.name);
  const [surname, setSurname] = useState(props.user.surname);
  const [age, setAge] = useState(props.user.age);
  const [description, setDescription] = useState(props.user.description);
  const [location, setLocation] = useState(props.user.location);

  const handleUpdate = () => {
    const updatedUser = JSON.parse(JSON.stringify(props.user));
    updatedUser.name = name;
    updatedUser.surname = surname;
    updatedUser.age = age;
    updatedUser.description = description;
    updatedUser.location = location;
    props.onUpdate(updatedUser);
  };

  return (
    <Portal>
      <Modal
        visible={props.open}
        onDismiss={props.onClose}
        contentContainerStyle={styles.containerStyle}
      >
        <TextInput
          mode="outlined"
          value={name}
          onChangeText={setName}
          onPressIn={undefined}
          onPressOut={undefined}
          label={Translator.translate(Dictionary.NAME)}
        />
        <TextInput
          mode="outlined"
          value={surname}
          onChangeText={setSurname}
          onPressIn={undefined}
          onPressOut={undefined}
          label="Surname"
        />
        <TextInput
          mode="outlined"
          value={!!age ? age.toString() : ''}
          onChangeText={(text) => setAge(parseInt(text))}
          onPressIn={undefined}
          onPressOut={undefined}
          label={Translator.translate(Dictionary.AGE)}
        />
        <TextInput
          mode="outlined"
          value={description}
          onChangeText={setDescription}
          onPressIn={undefined}
          onPressOut={undefined}
          label={Translator.translate(Dictionary.DESCRIPTION)}
        />
        <TextInput
          mode="outlined"
          value={location}
          onChangeText={setLocation}
          onPressIn={undefined}
          onPressOut={undefined}
          label={Translator.translate(Dictionary.LOCATION)}
        />
        <View style={styles.buttonsModal}>
          <Button mode="text" onPress={props.onClose}>
            {Translator.translate(Dictionary.CANCEL)}
          </Button>
          <Button mode="contained" onPress={handleUpdate}>
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
});

export default EditProfileModal;
