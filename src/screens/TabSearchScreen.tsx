import React, { useState } from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
import { Searchbar } from 'react-native-paper';

import UserService from '../services/UserService';
import User from '../model/User';
import PostModel from '../components/Post/PostModel';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { Dictionary } from '../utils/dictionaries';

interface Props {
  navigation?: any;
  route?: any;
}
export default function TabSearchScreen(props: Props) {

  const { navigation, route } = props

  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleChange = (textInput: string) => {
    setSearchQuery(textInput);
  }
  const handleSearch = () => {
    if (!searchQuery)
      return;

    //Search username
    navigation.dispatch(
      CommonActions.navigate({
        name: Dictionary.OTHER_PROFILE,
        params: {
          username: searchQuery,
        },
      })
    )
  }

  return (

    <Searchbar
      placeholder="Search"
      value={searchQuery}
      onChangeText={handleChange}
      onIconPress={handleSearch}
      onSubmitEditing={handleSearch}
    />
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