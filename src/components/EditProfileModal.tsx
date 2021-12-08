import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Modal, Portal, TextInput } from "react-native-paper";
import User from "../model/User";

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
          label="Name"
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
          value={age.toString()}
          onChangeText={(text) => setAge(parseInt(text))}
          onPressIn={undefined}
          onPressOut={undefined}
          label="Age"
        />
        <TextInput
          mode="outlined"
          value={description}
          onChangeText={setDescription}
          onPressIn={undefined}
          onPressOut={undefined}
          label="Description"
        />
        <TextInput
          mode="outlined"
          value={location}
          onChangeText={setLocation}
          onPressIn={undefined}
          onPressOut={undefined}
          label="Location"
        />
        <View style={styles.buttonsModal}>
          <Button mode="text" onPress={props.onClose}>
            Cancel
          </Button>
          <Button mode="contained" onPress={handleUpdate}>
            Confirm
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
