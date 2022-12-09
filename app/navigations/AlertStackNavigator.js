import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AlertScreen } from "../screens/";

const Stack = createNativeStackNavigator();

export const AlertNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Alert"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Alert" component={AlertScreen} />
    </Stack.Navigator>
  );
};
