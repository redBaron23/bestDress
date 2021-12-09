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
import EditInput from "../common/EditInput";
import Comment from "../../model/Comment";
import CommentService from "../../services/CommentService";

const LeftContent = (props) => <Avatar.Icon {...props} icon="account" />;

const handleNavigateToProfile = (navigation: any, searchQuery: string) => {
  if (!searchQuery) return;

  //Search username
  // navigation.dispatch(
  //   CommonActions.navigate({
  //     name: Dictionary.SEARCH,
  //     params: {
  //       username: searchQuery,
  //     },
  //   })
  // );
  navigation.dispatch(
    CommonActions.navigate({
      name: Dictionary.OTHER_PROFILE,
      params: {
        username: searchQuery,
      },
    })
  );
  // setTimeout(() => {
  //   //Search username
  //   navigation.dispatch(
  //     CommonActions.navigate({
  //       name: Dictionary.OTHER_PROFILE,
  //       params: {
  //         username: searchQuery,
  //       },
  //     })
  //   );
  // }, 200);
};

interface Props {
  post: PostModel;
  refresh: () => void;
}

export default function PostCard(props: Props) {
  const { refresh } = props;
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isDisliked, setIsDisliked] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(props.post.likes);
  const [dislikes, setDislikes] = useState<number>(props.post.dislikes);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [myUsername, setMyUsername] = useState<string>("");
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [post, setPost] = useState<PostModel>(props.post);
  const [comments, setComments] = useState<Comment[]>([]);
  const [seeCommentsMode, setSeeCommentsMode] = useState<boolean>(false);

  const navigation = useNavigation();

  useEffect(() => {
    AuthenticatorService.getUsername().then((myUsername) => {
      post.userLiked.includes(myUsername) && setIsLiked(true);
      post.userDisliked.includes(myUsername) && setIsDisliked(true);
      setMyUsername(myUsername);
    });

    CommentService.getComments(post.id!).then(setComments);
  }, []);

  useEffect(() => {
    AuthenticatorService.getUsername().then((myUsername) => {
      post.userLiked.includes(myUsername) && setIsLiked(true);
      post.userDisliked.includes(myUsername) && setIsDisliked(true);
    });
  }, [post]);

  const onLikeButtonPressed = () => {
    setIsLiked((prevState) => !prevState);
    PostService.likePost(post);

    if (isDisliked) {
      setDislikes((prev) => prev - 1);
      setIsDisliked(false);
    }

    if (isLiked) {
      setLikes((prev) => prev - 1);
      setIsLiked(false);
    } else {
      setLikes((prev) => prev + 1);
      setIsLiked(true);
    }
  };

  const onDislikeButtonPressed = () => {
    setIsDisliked((prevState) => !prevState);
    PostService.disLikePost(post);
    if (isLiked) {
      setLikes((prev) => prev - 1);
      setIsLiked(false);
    }

    if (isDisliked) {
      setDislikes((prev) => prev - 1);
      setIsDisliked(false);
    } else {
      setDislikes((prev) => prev + 1);
      setIsDisliked(true);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleDeletePost = () => {
    toggleMenu();
    PostService.deletePost(post).then(refresh);
  };

  const toggleEditMode = () => setIsEditMode((prevState) => !prevState);

  const handleEditDescription = (newDescription: string) => {
    const newPost = { ...post, description: newDescription };
    setPost(newPost);
    PostService.editPost(newPost).finally(toggleEditMode);
  };

  const handleViewComments = () => {};

  const handleCreateComment = (content: string) => {
    const newComment = new Comment(props.post.id!.toString(), content);
    CommentService.createComment(newComment).then((resComment) =>
      setComments((prev) => [...prev, resComment])
    );
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
                <Menu.Item
                  disabled={myUsername !== post.username}
                  onPress={handleDeletePost}
                  title={Translator.translate(Dictionary.DELETE)}
                />
                <Menu.Item
                  disabled={myUsername !== post.username}
                  onPress={toggleEditMode}
                  title={Translator.translate(Dictionary.EDIT)}
                />
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
        <Button icon="comment-outline" onPress={handleViewComments}>
          {comments.length}
        </Button>
      </Card.Actions>
      <Card.Content>
        {isEditMode ? (
          <EditInput
            value={post.description!}
            onChange={handleEditDescription}
          />
        ) : (
          <Paragraph>{post.description}</Paragraph>
        )}
        <EditInput
          onChange={handleCreateComment}
          value={""}
          style={{ height: 30 }}
          placeholder={Translator.translate(Dictionary.AddAComment)}
          clean
        />
      </Card.Content>
    </Card>
  );
}
