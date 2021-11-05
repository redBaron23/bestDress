import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Avatar, Button, Card, Paragraph } from "react-native-paper";
import PostModel from "./PostModel";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { Dictionary } from "../../utils/dictionaries";

const LeftContent = (props) => <Avatar.Icon {...props} icon="account" />;

interface Props {
  post: PostModel;
}

function onRatedButtonPressed(
  setItemPressed,
  setOppositeItemPressed,
  updatePost?: () => {}
) {
  setItemPressed((prevState) => !prevState);
  setOppositeItemPressed(false);
  //updatePost();
}

const handleNavigateToProfile = (navigation: any, searchQuery: string) => {
  if (!searchQuery) return;

  //Search username
  navigation.dispatch(
    CommonActions.navigate({
      name: Dictionary.SEARCH,
      params: {
        username: searchQuery,
      },
    })
  );
  setTimeout(() => {
    //Search username
    navigation.dispatch(
      CommonActions.navigate({
        name: Dictionary.OTHER_PROFILE,
        params: {
          username: searchQuery,
        },
      })
    );
  }, 200);
};

export default function PostCard(props: Props) {
  const { post } = props;

  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const navigation = useNavigation();
  return (
    <Card style={{ width: "95%" }}>
      <TouchableOpacity
        onPress={() => {
          handleNavigateToProfile(navigation, post.username);
        }}
      >
        <Card.Title title={post.username} left={LeftContent} />
      </TouchableOpacity>
      <Card.Cover source={{ uri: post.picture }} />
      <Card.Actions>
        <Button
          icon={isLiked ? "thumb-up" : "thumb-up-outline"}
          onPress={() => onRatedButtonPressed(setIsLiked, setIsDisliked)}
        >
          {post.likes + (isLiked ? 1 : 0)}
        </Button>
        <Button
          icon={isDisliked ? "thumb-down" : "thumb-down-outline"}
          onPress={() => onRatedButtonPressed(setIsDisliked, setIsLiked)}
        >
          {post.dislikes + (isDisliked ? 1 : 0)}
        </Button>
      </Card.Actions>
      <Card.Content>
        <Paragraph>{post.description}</Paragraph>
      </Card.Content>
    </Card>
  );
}
