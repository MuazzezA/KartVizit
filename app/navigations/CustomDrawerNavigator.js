import * as React from "react";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import { Text, View, Image } from "react-native";
import { Home, AlertScreen, SettingScreen, ProfileScreen } from "../screens/";
import InsideNavigations from "./InsideStackNavigator";
import { SIZES, FONTS, COLORS } from "../constants/theme";
import { icons } from "../constants";
const { avatar } = icons;

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          //backgroundColor: "beige",
          flex: 1,
        }}>
        <DrawerItemList {...props} />

        <DrawerItem
          label="Çıkış Yap"
          activeTintColor="white"
          style={{
            ...FONTS.body4,
          }}
          onPress={() => alert("Çıkış İşlemi")}
        />
      </View>
    </DrawerContentScrollView>
  );
}

function CustomAvatarContent({ user }) {
  return (
    <View>
      <Image
        source={user ? { uri: user.avatar } : avatar}
        //source={avatar}
        style={{
          height: 100,
          width: 100,
          alignSelf: "center",
          backgroundColor: COLORS.lightGrey,
          borderRadius: 50,
        }}
      />
      <Text
        style={{
          textAlign: "center",
          marginTop: SIZES.padding,
          ...FONTS.body3,
        }}>
        {user.name} {user.lastName}
      </Text>
    </View>
  );
}

const CustomDrawerNavigator = ({ route }) => {
  const { user } = route.params;
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <View style={{ flex: 1, paddingTop: SIZES.h1 }}>
          <CustomAvatarContent user={user ? user : null} />
          <CustomDrawerContent {...props} />
        </View>
      )}
      useLegacyImplementation
      initialRouteName="InsideNavigations"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: COLORS.softBlue,
        },
        drawerLabelStyle: {
          ...FONTS.body4,
          color: COLORS.darkGrey,
          activeTintColor: COLORS.blue2,
        },
        drawerContentOptions: {
          activeTintColor: COLORS.white,
          ...FONTS.body4,
        },
      }}
      options={{
        swipeEdgeWidth: 40,
      }}>
      <Drawer.Screen name="InsideNavigations" component={InsideNavigations} />
      <Drawer.Screen name="Settings" component={SettingScreen} />
      <Drawer.Screen name="Profil" component={ProfileScreen} />
      <Drawer.Screen name="AlertScreen" component={AlertScreen} />
      <Drawer.Screen name={user.name} component={AlertScreen} />
    </Drawer.Navigator>
  );
};

export default CustomDrawerNavigator;
