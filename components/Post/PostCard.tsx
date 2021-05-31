import React, { useEffect, useState } from 'react';
import { Avatar, Button, Card, Paragraph } from 'react-native-paper';
import PostModel from './PostModel';

const LeftContent = props => <Avatar.Icon {...props} icon="account" />

interface Props {
    post: PostModel
}

function onRatedButtonPressed(setItemPressed, setOppositeItemPressed,updatePost?: () => {}) {
    setItemPressed(prevState => !prevState);
    setOppositeItemPressed(false);
    //updatePost();
}

export default function PostCard(props: Props) {

    const { post } = props;
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);

    const uri = post.picture ? post.picture : 'https://i.picsum.photos/id/526/700/700.jpg?hmac=cuVBYgSd0HOnHN0rAW6uRmQzuhvD4nIRePaq_TWMQzg';
    

    useEffect(() => {
       
    },[post])

    return (
        <Card style={{ width: "95%" }}>
            <Card.Title title={post.username} left={LeftContent} />
            <Card.Cover source={{ uri: uri }} />
            <Card.Actions>
                <Button icon={(isLiked) ? "thumb-up" : "thumb-up-outline"} onPress={() => onRatedButtonPressed(setIsLiked,setIsDisliked)}>{post.likes + ((isLiked) ? 1 : 0)}</Button>
                <Button icon={(isDisliked) ? "thumb-down" : "thumb-down-outline"} onPress={() => onRatedButtonPressed(setIsDisliked,setIsLiked)} >{post.dislikes + ((isDisliked) ? 1 : 0)}</Button>
            </Card.Actions>
            <Card.Content>
                <Paragraph>{post.description}</Paragraph>
            </Card.Content>
        </Card>
    );
}
