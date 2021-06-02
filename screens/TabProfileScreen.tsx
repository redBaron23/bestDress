import * as React from 'react';
import { 
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions } from 'react-native';
import ProfileItem from "../components/ProfileItem";
import { Ionicons, AntDesign } from "@expo/vector-icons";

export default function TabProfileScreen() {
  return (
    <ImageBackground
    source={require("../assets/images/fondo.png")}
    style={styles.bg}
  >
    <ScrollView style={styles.containerProfile}>
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
        
        <TouchableOpacity style={styles.circledButton}>
          <AntDesign name="laptop" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.circledButton}>
          <Ionicons name="add" size={30} color="#FFFFFF"></Ionicons>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.circledButton}>
        <AntDesign name="like1" size={24} color="#FFFFFF" />
        </TouchableOpacity>

      </View>
    </ScrollView>
  </ImageBackground>
);
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: "cover",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  top: {
    paddingTop: 50,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerProfile: { marginHorizontal: 0 },
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