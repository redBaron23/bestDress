/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabHomeScreen from '../screens/TabHomeScreen';
import TabProfileScreen from '../screens/TabProfileScreen';
import Translator from '../services/Translator';
import { BottomTabParamList, TabHomeParamList, TabProfileParamList } from '../types';
import { Dictionary } from '../utils/dictionaries';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName={Dictionary.HOME}
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name={Dictionary.HOME}
        component={TabHomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
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

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabHomeStack = createStackNavigator<TabHomeParamList>();

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

const TabProfileStack = createStackNavigator<TabProfileParamList>();

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
