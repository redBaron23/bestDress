import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';

import PostCard from '../components/Post/PostCard';
import PostModel from '../components/Post/PostModel';
import { Text, View } from '../components/Themed';
import PostService from '../services/PostService';

export default function TabHomeScreen() {

  const [posts, setPosts] = useState<PostModel[]>([]);

  useEffect(() => {
    PostService.fetchAllPost()
      .then(setPosts)
  }, [])

  const onClick = () => {
    //AuthenticatorService.signUp();
    // AuthenticatorService.signOut();
    const post = new PostModel("pato.toledo", "2ff1eb87-edcf-4337-b8e2-7f8006cf4f72", 201, 352, "https://cdn.pixabay.com/photo/2013/07/13/11/43/tux-158547_960_720.png", "Este es tux buena gente", "https://upload.wikimedia.org/wikipedia/commons/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg")
    PostService.createPost(post);
  }
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false} >
        {/* <Button mode="contained" onPress={onClick} >
          Auto create user
        </Button> */}
        {
          posts.map(post => <PostCard key={post.id} post={post} />)
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: { width: '100%', flex: 1 },
  scrollViewContainer: {
    alignItems: 'center',
    paddingTop: "8%",
    justifyContent: 'center',
  },
});
