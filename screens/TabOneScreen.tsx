import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import PostCard from '../components/Post/PostCard';
import PostModel from '../components/Post/PostModel';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  
  const post = new PostModel("Roberto Carlos","https://shorturl.at/wNOW2","Merluza que rico");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <PostCard post={post}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
