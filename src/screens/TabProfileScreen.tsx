import React, { useState } from 'react';
import AuthenticatorService from '../services/AuthenticatorService';
import Profile from '../components/Profile';
import { useEffect } from 'react';
import PostModel from '../components/Post/PostModel';
import PostService from '../services/PostService';

export default function TabProfileScreen() {

    const [posts, setPosts] = useState<PostModel[]>([]);

    useEffect(() => {
      AuthenticatorService.getUsername()
        .then(username => PostService.fetchPostByUsername(username))
        .then(setPosts);
    }, []);

  return (
    <Profile posts={posts} isSelfProfile={true} />
  );
};