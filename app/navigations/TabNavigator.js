import * as React from "react";
import { Text } from "react-native";
import { InsideNavigator } from "./InsideStackNavigator";
import { ProfileNavigator } from "./ProfileStackNavigator";
import { AlertNavigator } from "./AlertStackNavigator";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = ({ route }) => {
  const { user } = route.params;

  return (
    <Tab.Navigator
      initialRouteName="InsideNavigator"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderRadius: 20,
          margin: 5,
        },
      }}>
      <Tab.Screen
        name="InsideNavigator"
        initialParams={{ user: user }} //burası params'a atanmayacak, geldiği yerde user'a verildi
        component={InsideNavigator}
        options={{
          tabBarLabel: ({ focused }) => {
            return focused ? (
              <Text style={{ fontSize: 10, color: "darkblue" }}>Anasayfa</Text>
            ) : null;
          },
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="home-circle-outline"
              size={focused ? 28 : 22}
              color={focused ? "darkblue" : "grey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        initialParams={{ user: user }}
        options={{
          tabBarLabel: ({ focused }) => {
            return focused ? (
              <Text style={{ fontSize: 10, color: "darkblue" }}>Profil</Text>
            ) : null;
          },
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={focused ? 28 : 22}
              color={focused ? "darkblue" : "grey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AlertNavigator"
        component={AlertNavigator}
        initialParams={{ user: user }}
        options={{
          tabBarLabel: ({ focused }) => {
            return focused ? (
              <Text style={{ fontSize: 10, color: "darkblue" }}>
                Bildirimler
              </Text>
            ) : null;
          },
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="bell-circle-outline"
              size={focused ? 28 : 22}
              color={focused ? "darkblue" : "grey"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
