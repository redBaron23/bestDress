import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Avatar, Button, Card, Paragraph } from "react-native-paper";
import PostModel from "./PostModel";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { Dictionary } from "../../utils/dictionaries";
import PostService from "../../services/PostService";

const LeftContent = (props) => <Avatar.Icon {...props} icon="account" />;

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

interface Props {
  post: PostModel;
}


export default function PostCard(props: Props) {
  const { post } = props;
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isDisliked, setIsDisliked] = useState<boolean>(false);
  const navigation = useNavigation();

  const onLikeButtonPressed = () => {
    setIsLiked((prevState) => !prevState);
    setIsDisliked(false);
    PostService.likePost(post);
    //TODO add clear post (santiago)
  };

  const onDislikeButtonPressed = () => {
    setIsDisliked((prevState) => !prevState);
    setIsLiked(false);
    PostService.disLikePost(post)
    //TODO add clear post (santiago)
  };    

  return (
    <Card
      style={{
        width: "95%",
        borderRadius: 20,
        marginBottom: 10,
        backgroundColor: "#F1F1F1",
      }}
      elevation={5}
    >
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
          onPress={onLikeButtonPressed}
        >
          {post.likes + (isLiked ? 1 : 0)}
        </Button>
        <Button
          icon={isDisliked ? "thumb-down" : "thumb-down-outline"}
          onPress={onDislikeButtonPressed}
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
