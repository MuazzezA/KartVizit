import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import AlertScreen from "../screens/AlertScreen";
import MyCardsScreen from "../screens/MyCardsScreen";
import MyCardInboxScreen from "../screens/MyCardInboxScreen";
import StatisticScreen from "../screens/StatisticScreen";
import ShareCardScreen from "../screens/ShareCardScreen";

const Stack = createNativeStackNavigator();
const InsideNavigations = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AlertScreen"
        component={AlertScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyCardsScreen"
        component={MyCardsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyCardInboxScreen"
        component={MyCardInboxScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StatisticScreen"
        component={StatisticScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ShareCardScreen"
        component={ShareCardScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default InsideNavigations;
