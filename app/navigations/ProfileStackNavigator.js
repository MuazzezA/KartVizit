import React from "react";
import { ProfileScreen, SettingScreen } from "../screens/";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export const ProfileNavigator = ({ route }) => {
  const { user } = route.params;

  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        initialParams={{ user: user }}
        component={ProfileScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Settings"
        component={SettingScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
