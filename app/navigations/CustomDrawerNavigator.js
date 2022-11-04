import * as React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import InsideNavigations from "./InsideStackNavigator";
import AlertScreen from "../screens/AlertScreen";

const Drawer = createDrawerNavigator();

const CustomDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName="InsideNavigations"
      screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="InsideNavigations"
        component={InsideNavigations}
        options={{ headerShown: false, name: "Home" }}
      />
      <Drawer.Screen
        name="Settings"
        component={Home}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Profil"
        component={Home}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="AlertScreen"
        component={AlertScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default CustomDrawerNavigator;
