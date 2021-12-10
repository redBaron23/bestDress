import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button, Modal, Portal, TextInput } from "react-native-paper";
import Comment from "../../model/Comment";
import Translator from "../../services/Translator";
import { Dictionary } from "../../utils/dictionaries";
import CommentView from "./CommentView";

interface Props {
  open: boolean;
  onClose: () => void;
  comments: Comment[];
  onDeleteComment: (commentId: string) => void;
  onEditComment: (comment: Comment) => void;
}

const ViewCommentsModal = (props: Props) => {
  return (
    <Portal>
      <Modal
        visible={props.open}
        onDismiss={props.onClose}
        contentContainerStyle={styles.containerStyle}
      >
        <ScrollView>
          {props.comments.map((comment, index) => (
            <CommentView key={index} comment={comment} onDelete={props.onDeleteComment} onEditComment={props.onEditComment}/>
          ))}
        </ScrollView>
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
