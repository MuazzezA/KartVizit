import * as React from "react";
import {
  Home,
  MyCardsScreen,
  MyInboxScreen,
  ShareCardScreen,
  CardDetailScreen,
  CreateCardScreen,
  StatisticScreen,
} from "../screens/";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const InsideNavigator = ({ route }) => {
  const { user } = route.params;
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        initialParams={{ user: user }}
      />
      <Stack.Screen name="MyCardsScreen" component={MyCardsScreen} />
      <Stack.Screen name="MyCardInboxScreen" component={MyInboxScreen} />
      <Stack.Screen name="StatisticScreen" component={StatisticScreen} />
      <Stack.Screen name="ShareCardScreen" component={ShareCardScreen} />
      <Stack.Screen name="CardDetailScreen" component={CardDetailScreen} />
      <Stack.Screen name="CreateCardScreen" component={CreateCardScreen} />
    </Stack.Navigator>
  );
};
export { InsideNavigator };
