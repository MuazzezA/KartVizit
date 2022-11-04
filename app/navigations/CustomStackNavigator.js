import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomDrawerNavigator from "./CustomDrawerNavigator";

import { Login, Register, Onboarding } from "../screens/Auth/";
import Home2 from "../screens/home2";

const Stack = createNativeStackNavigator();

const Navigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="CustomDrawerNavigator"
          component={CustomDrawerNavigator}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Home2"
          component={Home2}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigations;
