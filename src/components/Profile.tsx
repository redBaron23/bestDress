import React, { useState } from "react";
import {
  ScrollView,
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  RefreshControl,
  Text,
} from "react-native";
import ProfileItem from "../components/ProfileItem";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import PostModel from "../components/Post/PostModel";
import PostCard from "../components/Post/PostCard";
import AuthenticatorService from "../services/AuthenticatorService";
import { useEffect } from "react";
import UserService from "../services/UserService";
import User from "../model/User";
import PostService from "../services/PostService";
import { Button, Modal, Portal, TextInput } from "react-native-paper";
import EditProfileModal from "./EditProfileModal";
import EditProfilePictureModal from "./EditProfilePictureModal";

interface Props {
  username: string;
  isSelfProfile?: boolean;
}

export default function Profile(props: Props) {
  const { username, isSelfProfile = false } = props;

  const [user, setUser] = useState<User>();
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isEditProfilePictureModalOpen, setIsEditProfilePictureModalOpen] =
    useState<boolean>(false);

  useEffect(() => {
    UserService.getUser(username).then(setUser);
    PostService.fetchPostByUsername(username).then(setPosts);
  }, [username]);

  function updatePosts() {
    setRefreshing(true);
    PostService.fetchPostByUsername(username).then((posts) => {
      setPosts(posts);
      setRefreshing(false);
    });
  }

  const toggleModal = () => setIsEditModalOpen((prevState) => !prevState);

  const toggleEditProfilePictureModal = () =>
    setIsEditProfilePictureModalOpen((prevState) => !prevState);

  const handleUpdate = (updatedUser: User) => {
    UserService.editUser(updatedUser).then(() => {
      setUser(updatedUser);
      toggleModal();
    });
  };

  const handleUpdatePicture = (updatedUser: User) => {
    UserService.editUser(updatedUser).then(() => {
      setUser(updatedUser);
      toggleEditProfilePictureModal();
    });
  };

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContainer}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={updatePosts} />
      }
    >
      <TouchableOpacity onPress={toggleEditProfilePictureModal}>
        <ImageBackground
          source={
            user?.profilePicture
              ? {uri: user.profilePicture}
              : require("../assets/images/goku.jpg")
          }
          style={styles.photo}
        />
      </TouchableOpacity>
      {!!user && (
        <>
          <EditProfileModal
            open={isEditModalOpen}
            onClose={toggleModal}
            user={user}
            onUpdate={handleUpdate}
          />
          <EditProfilePictureModal
            isOpen={isEditProfilePictureModalOpen}
            user={user}
            onClose={toggleEditProfilePictureModal}
            onSave={handleUpdatePicture}
          />
        </>
      )}
      {!!user && <ProfileItem user={user} />}
      <View style={styles.actionsProfile}>
        {isSelfProfile && (
          <>
            <TouchableOpacity
              style={styles.circledButton}
              onPress={toggleModal}
            >
              <Ionicons name="pencil" size={30} color="#FFFFFF"></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.circledButton}
              onPress={AuthenticatorService.signOut}
            >
              <AntDesign name="logout" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </>
        )}
      </View>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} refresh={updatePosts} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: "cover",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  scrollView: { flex: 1 },
  scrollViewContainer: {
    alignItems: "center",
    justifyContent: "center",
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
    alignItems: "center",
    justifyContent: "center",
  },
  photo: {
    width: Dimensions.get("window").width,
    height: 450,
  },
  actionsProfile: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
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
