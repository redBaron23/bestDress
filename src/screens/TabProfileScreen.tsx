import * as React from 'react';
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';
import ProfileItem from "../components/ProfileItem";
import CardItem from "../components/CardItem";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import PostModel from '../components/Post/PostModel';
import PostCard from '../components/Post/PostCard';
import AuthenticatorService from '../services/AuthenticatorService';

const isSelfProfile = true;

export default function TabProfileScreen() {

  const post = new PostModel("Roberto Carlos","2ff1eb87-edcf-4337-b8e2-7f8006cf4f72", 500, 100, "https://www.latercera.com/resizer/Am6Tr2ws8JnL4CHLfU_Humpr56Q=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/XMJRWZH5N5CBXPL67NAKBGXFNI.jpg", "Merluza que rico");

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false} >
      <ImageBackground source={require("../assets/images/goku.jpg")} style={styles.photo}>
        <View style={styles.top}>
          <TouchableOpacity>

          </TouchableOpacity>

          <TouchableOpacity>

          </TouchableOpacity>
        </View>
      </ImageBackground>

      <ProfileItem></ProfileItem>

      <View style={styles.actionsProfile}>
        {/* What is this used for? 
        <TouchableOpacity style={styles.circledButton}>
          <AntDesign name="laptop" size={24} color="white" />
        </TouchableOpacity> */}

        <TouchableOpacity style={styles.circledButton}>
          <Ionicons name="add" size={30} color="#FFFFFF"></Ionicons>
        </TouchableOpacity>

        <TouchableOpacity style={styles.circledButton}>
          <AntDesign name="like1" size={24} color="#FFFFFF" />
        </TouchableOpacity>

        {isSelfProfile &&
          <TouchableOpacity style={styles.circledButton} onPress={AuthenticatorService.signOut}>
            <AntDesign name="logout" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        }

      </View>

      <PostCard post={post} />
      <PostCard post={post} />
      <PostCard post={post} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: "cover",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  scrollView: { flex: 1 },
  scrollViewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    paddingTop: 50,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerProfile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  photo: {
    width: Dimensions.get("window").width,
    height: 450,
  },
  actionsProfile: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  textButton: {
    fontSize: 15,
    color: "#FFFFFF",
    paddingLeft: 5,
  },
  circledButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#7444C0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    elevation: 18,
  },
  roundedButton: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#5636B8",
    paddingHorizontal: 20,
  },

});