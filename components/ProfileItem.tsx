import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const ProfileItem = ({
  
}) => (
  <View style={styles.containerProfileItem}>
    <View style={styles.matchesProfileItem}>
      <Text style={styles.matchesTextProfileItem}>
        @RobertoC
      </Text>
    </View>

    <Text style={styles.name}>Roberto Carlos</Text>

    <Text style={styles.descriptionProfileItem}>
      22 - La Plata
    </Text>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
      <AntDesign name="tags" size={24} color="black" />
      </Text>
      <Text style={styles.infoContent}>Descripcion...</Text>
    </View>
    
  </View>
);

export default ProfileItem;


const styles = StyleSheet.create({
    containerProfileItem:{
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 10,
        paddingBottom: 25,
        margin: 20,
        borderRadius: 8,
        marginTop: -65,
        elevation: 1,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowColor: "#000000",
        shadowOffset: { height: 0, width: 0 },
    },
    matchesProfileItem: {
      width: 170,
      height:35,
      marginTop: -18,
      backgroundColor: "#7444C0",
      paddingVertical: 7,
      paddingHorizontal: 20,
      borderRadius: 20,
      alignSelf: "center",
    },
    matchesTextProfileItem: {
      color: "#FFFFFF",
      textAlign: "center",
    },
    name: {
      paddingTop: 25,
      paddingBottom: 5,
      color: "#363636",
      fontSize: 15,
      textAlign: "center",
    },
    descriptionProfileItem: {
      color: "#000000",
      textAlign: "center",
      paddingBottom: 20,
      fontSize: 13,
    },
    info: {
      paddingVertical: 8,
      flexDirection: "row",
      alignItems: "center",
    },
    iconProfile: {
      fontSize: 12,
      color: "#363636",
      paddingHorizontal: 10,
    },
    infoContent: {
      color: "#000000",
      fontSize: 13,
    },
  
  });
  