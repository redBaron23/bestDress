import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import PostCard from '../components/Post/PostCard';
import PostModel from '../components/Post/PostModel';
import { Text, View } from '../components/Themed';

export default function TabHomeScreen() {

  const post = new PostModel("Roberto Carlos", 500, 100, "https://shorturl.at/wNOW2", "Merluza que rico");
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false} >
        <PostCard post={post} />
        <PostCard post={post} />
        <PostCard post={post} />
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
  scrollView: { width: '80%', flex: 1 },
  scrollViewContainer: {
    alignItems: 'center',
    paddingTop: "8%",
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
