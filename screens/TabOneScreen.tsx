import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import PostCard from '../components/Post/PostCard';
import PostModel from '../components/Post/PostModel';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {

  const post = new PostModel("Roberto Carlos",500,100, "https://shorturl.at/wNOW2", "Merluza que rico");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ScrollView style={{ width: '80%', flex: 1 }} contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center'
      }} showsVerticalScrollIndicator={false} >
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
