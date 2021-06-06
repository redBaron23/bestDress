import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import PostCard from '../components/Post/PostCard';
import PostModel from '../components/Post/PostModel';
import { Text, View } from '../components/Themed';

export default function TabHomeScreen() {

  const post = new PostModel("Roberto Carlos", 500, 100, "https://www.latercera.com/resizer/Am6Tr2ws8JnL4CHLfU_Humpr56Q=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/XMJRWZH5N5CBXPL67NAKBGXFNI.jpg", "Merluza que rico");
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
  scrollView: { width: '100%', flex: 1 },
  scrollViewContainer: {
    alignItems: 'center',
    paddingTop: "8%",
    justifyContent: 'center',
  },
});