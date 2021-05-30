import * as React from 'react';
import { Avatar, Card, Paragraph } from 'react-native-paper';
import PostModel from './PostModel';

const LeftContent = props => <Avatar.Icon {...props} icon="account" />

interface Props {
    post: PostModel
}

function PostCard(props: Props) {
    const { post } = props;
    const uri = post.picture ? post.picture : 'https://i.picsum.photos/id/526/700/700.jpg?hmac=cuVBYgSd0HOnHN0rAW6uRmQzuhvD4nIRePaq_TWMQzg';
    return (
        <Card  style={{width:"80%"}}>
            <Card.Title title={post.username} left={LeftContent} />
            <Card.Cover source={{ uri: uri }} />
            <Card.Content>
                <Paragraph>{post.description}</Paragraph>
            </Card.Content>
        </Card>
    )
}

export default PostCard;