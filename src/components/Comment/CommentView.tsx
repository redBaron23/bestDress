import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Avatar, Paragraph } from "react-native-paper";
import Comment from "../../model/Comment";
import User from "../../model/User";
import PostService from "../../services/PostService";
import UserService from "../../services/UserService";

const LeftContent = (secondaryProps: any) => (
  <Avatar.Icon {...secondaryProps} icon="account" />
);

interface Props {
  comment: Comment;
}

const CommentView = (props: Props) => {
  const [currentUsername, setCurrentUsername] = useState<string>("");

  //@TODO ADD USERNAME AND AVATAR TO COMMENT
//   useEffect(() => {
//     PostService.fetchPostByPostID(props.comment.postID).then(
//       setCurrentUsername
//     )
//     .catch(e => console.log(e));
//   }, []);

  console.log("ACA____",JSON.stringify(props.comment.content));

  return (
    <View>
        {/* <Paragraph> {currentUsername}</Paragraph> */}
      <Text>{currentUsername}</Text>
      {/* <Paragraph>{props.comment.content}</Paragraph>; */}
    </View>
  );
};

export default CommentView;
