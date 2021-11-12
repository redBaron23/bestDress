import React, { useEffect, useState } from "react";
import { RefreshControl, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "react-native-paper";

import PostCard from "../components/Post/PostCard";
import PostModel from "../components/Post/PostModel";
import { Text, View } from "../components/Themed";
import PostService from "../services/PostService";

interface Props {
  route: any;
}

export default function TabHomeScreen(props: Props) {
  const { route } = props;
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const params = route.params;

  useEffect(() => {
    updatePosts();
  }, []);

  useEffect(() => {
    updatePosts();
  }, [params?.update]);

  function updatePosts() {
    setRefreshing(true);
    PostService.fetchAllPost().then(posts => {
      setPosts(posts);
      setRefreshing(false);
    });
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={updatePosts}
          />}
      >
        {/* <Button mode="contained" onPress={onClick} >
          Auto create user
        </Button> */}
        {posts.map((post) => (
          <PostCard key={post.id} post={post} refresh={updatePosts}/>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: { width: "100%", flex: 1 },
  scrollViewContainer: {
    alignItems: "center",
    paddingTop: "8%",
    justifyContent: "center",
  },
});
