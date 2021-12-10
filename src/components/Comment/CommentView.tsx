import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Avatar,
  Card,
  Divider,
  IconButton,
  Menu,
  Paragraph,
} from "react-native-paper";
import Comment from "../../model/Comment";
import User from "../../model/User";
import AuthenticatorService from "../../services/AuthenticatorService";
import CommentService from "../../services/CommentService";
import PostService from "../../services/PostService";
import Translator from "../../services/Translator";
import UserService from "../../services/UserService";
import { Dictionary } from "../../utils/dictionaries";
import EditInput from "../common/EditInput";

interface Props {
  comment: Comment;
  onDelete: (commentId: string) => void;
  onEditComment: (comment: Comment) => void;
}

const CommentView = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [myUsername, setMyUsername] = useState<string>("");
  const [editMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    AuthenticatorService.getUsername().then((username) => {
      setMyUsername(username);
    });
  }, []);

  const toggleEditMode = () => setEditMode((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleDelete = () => {
    props.onDelete(props.comment.id!);
    toggleMenu();
  };

  const handleEditComment = (content: string) => {
    const newComment = JSON.parse(JSON.stringify(props.comment));
    newComment.content = content;
    props.onEditComment(newComment);
    toggleEditMode();
  };

  return (
    <Card style={styles.Container}>
      <Card.Title
        title={props.comment.username}
        left={(newProps) =>
          !!props.comment.profilePicture ? (
            <Avatar.Image
              source={{ uri: props.comment.profilePicture }}
              {...newProps}
            />
          ) : (
            <Avatar.Icon {...newProps} icon="account" />
          )
        }
        right={(newProps) => (
          <>
            <Menu
              visible={isMenuOpen}
              onDismiss={toggleMenu}
              anchor={
                <IconButton
                  {...newProps}
                  icon="dots-vertical"
                  onPress={toggleMenu}
                />
              }
            >
              <Menu.Item
                disabled={myUsername !== props.comment.username}
                onPress={handleDelete}
                title={Translator.translate(Dictionary.DELETE)}
              />
              <Menu.Item
                disabled={myUsername !== props.comment.username}
                onPress={toggleEditMode}
                title={Translator.translate(Dictionary.EDIT)}
              />
              <Divider />
            </Menu>
          </>
        )}
      />
      <Card.Content>
        {editMode ? (
          <EditInput
            value={props.comment.content}
            onChange={handleEditComment}
            style={{ height: 35, width: 200 }}
          />
        ) : (
          <Text>{props.comment.content}</Text>
        )}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginBottom: 20,
  },
});

export default CommentView;
