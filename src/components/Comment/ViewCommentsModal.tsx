import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, Modal, Portal, TextInput } from "react-native-paper";
import Comment from "../../model/Comment";
import Translator from "../../services/Translator";
import { Dictionary } from "../../utils/dictionaries";
import CommentView from "./CommentView";

interface Props {
  open: boolean;
  onClose: () => void;
  comments: Comment[];
}

const ViewCommentsModal = (props: Props) => {
  return (
    <Portal>
      <Modal
        visible={props.open}
        onDismiss={props.onClose}
        contentContainerStyle={styles.containerStyle}
      >
        <View>
          {props.comments.map((comment, index) => (
            // <Text key={index}>{comment.content}</Text>
            <CommentView key={index} comment={comment} />
          ))}
        </View>
        <View style={styles.buttonsModal}>
          <Button mode="text" onPress={props.onClose}>
            {Translator.translate(Dictionary.CLOSE)}
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

export default ViewCommentsModal;
