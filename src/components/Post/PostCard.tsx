import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Divider,
  IconButton,
  List,
  Menu,
  Paragraph,
} from "react-native-paper";
import PostModel from "./PostModel";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { Dictionary } from "../../utils/dictionaries";
import PostService from "../../services/PostService";
import AuthenticatorService from "../../services/AuthenticatorService";
import DropDownMenu from "../DropDownMenu";
import Translator from "../../services/Translator";

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
  refresh: () => void;
}

export default function PostCard(props: Props) {
  const { post, refresh } = props;
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isDisliked, setIsDisliked] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(post.likes);
  const [dislikes, setDislikes] = useState<number>(post.dislikes);
  const [ isMenuOpen, setIsMenuOpen ] = useState<boolean>(false);
  const navigation = useNavigation();

  useEffect(() => {
    AuthenticatorService.getUsername().then((myUsername) => {
      post.userLiked.includes(myUsername) && setIsLiked(true);
      post.userDisliked.includes(myUsername) && setIsDisliked(true);
    });
  }, [post]);

  const onLikeButtonPressed = () => {
    setIsLiked((prevState) => !prevState);
    PostService.likePost(post);
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  const onDislikeButtonPressed = () => {
    setIsDisliked((prevState) => !prevState);
    PostService.disLikePost(post);
    if (isDisliked) {
      setDislikes(dislikes - 1);
      setIsDisliked(false);
    } else {
      setDislikes(dislikes + 1);
      setIsDisliked(true);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  }

  const onDeletePost = () => {
    toggleMenu();
    PostService.deletePost(post)
      .then(refresh);
  }

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
        <Card.Title
          title={post.username}
          left={LeftContent}
          right={(props) => (
            <>
              <Menu
                visible={isMenuOpen}
                onDismiss={toggleMenu}
                anchor={
                  <IconButton
                    {...props}
                    icon="dots-vertical"
                    onPress={toggleMenu}
                  />
                }
              >
                <Menu.Item onPress={onDeletePost} title={Translator.translate(Dictionary.DELETE)} />
                <Menu.Item disabled onPress={() => {setIsLiked(false)}} title={Translator.translate(Dictionary.EDIT)} />
                <Divider />
              </Menu>
            </>
          )}
        />
      </TouchableOpacity>
      <Card.Cover nativeID={post.id} source={{ uri: post.picture }} />
      <Card.Actions>
        <Button
          icon={isLiked ? "thumb-up" : "thumb-up-outline"}
          onPress={onLikeButtonPressed}
        >
          {likes}
        </Button>
        <Button
          icon={isDisliked ? "thumb-down" : "thumb-down-outline"}
          onPress={onDislikeButtonPressed}
        >
          {dislikes}
        </Button>
      </Card.Actions>
      <Card.Content>
        <Paragraph>{post.description}</Paragraph>
      </Card.Content>
    </Card>
  );
}
