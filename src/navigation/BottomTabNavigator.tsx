import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Button } from 'react-native-paper';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabHomeScreen from '../screens/TabHomeScreen';
import TabProfileScreen from '../screens/TabProfileScreen';
import TabSearchScreen from '../screens/TabSearchScreen';
import Translator from '../services/Translator';
import { BottomTabParamList, TabHomeParamList, TabProfileParamList, TabSearchParamList } from '../types';
import { Dictionary } from '../utils/dictionaries';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const TabProfileStack = createStackNavigator<TabProfileParamList>();
const TabHomeStack = createStackNavigator<TabHomeParamList>();
const TabSearchStack = createStackNavigator<TabSearchParamList>();

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName={Dictionary.HOME}
      backBehavior="none"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name={Dictionary.HOME}
        component={TabHomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={Dictionary.SEARCH}
        component={TabSearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={Dictionary.PROFILE}
        component={TabProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person-circle-sharp" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}



function TabHomeNavigator() {
  return (
    <TabHomeStack.Navigator>
      <TabHomeStack.Screen
        name={Dictionary.HOME}
        component={TabHomeScreen}
        options={{ headerTitle: Translator.translate(Dictionary.HOME) }}
      />
    </TabHomeStack.Navigator>
  );
}


function TabProfileNavigator() {
  return (
    <TabProfileStack.Navigator>
      <TabProfileStack.Screen
        name={Dictionary.PROFILE}
        component={TabProfileScreen}
        options={{ headerTitle: Translator.translate(Dictionary.PROFILE) }}
      />
    </TabProfileStack.Navigator>
  );
}

function TabSearchNavigator() {
  const navigation = useNavigation();

  return (
    <TabSearchStack.Navigator>
      <TabSearchStack.Screen
        name={Dictionary.SEARCH}
        component={TabSearchScreen}
        options={{ headerTitle: Translator.translate(Dictionary.SEARCH) }}
      />
      <TabProfileStack.Screen
        name={Dictionary.OTHER_PROFILE}
        component={TabProfileScreen}
        options={{
          headerTitle: Translator.translate(Dictionary.PROFILE),
          headerLeft: () => (
            <Button
            icon="arrow-left"
              onPress={() => navigation.goBack(Dictionary.SEARCH)}
            />
          )
        }}
      />
    </TabSearchStack.Navigator>
  );
}
