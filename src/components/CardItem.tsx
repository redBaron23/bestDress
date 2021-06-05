import React from "react";
import { Text, View, Image, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import { Avatar, Button, Card, Paragraph } from 'react-native-paper';
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { color } from "react-native-reanimated";

const CardItem = ({
  
}) => (
  <View style={styles.containerProfileItem}>
    <Image source={require("../assets/images/gokussj.jpg")} style={styles.image} />
    <Card.Actions style={styles.card}>
    <Button ><AntDesign name = "like1" size = {20} color = "black" />500</Button>
    <Button ><AntDesign name = "dislike1" size = {20} color = "black" />100</Button>
    </Card.Actions>
    
  </View>
);

export default CardItem;


const styles = StyleSheet.create({
    containerProfileItem:{
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 10,
        padding: 25,
        margin: 10,
        marginBottom:5,
        borderRadius: 8,
        elevation: 3,
        alignItems:"center",
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
    image: {
        borderRadius: 8,
        width: "100%",
        height: 300,
      },
      
      card: {
        alignItems:"center",
        backgroundColor:"white",
        color:"black",
        width:"42%",
        marginTop:-60,
        opacity:0.8,
        borderRadius:8,
        elevation:15,
      },


  });