import * as React from "react";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  useDrawerProgress,
  ollView,
} from "@react-navigation/drawer";

import { Text, View, Image } from "react-native";
import { Home, AlertScreen } from "../screens/";
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
            ...FONTS.desc1,
          }}
          onPress={() => alert("Çıkış İşlemi")}
        />
      </View>
    </DrawerContentScrollView>
  );
}

function CustomAvatarContent() {
  return (
    <View>
      <Image
        source={avatar}
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
        isim soyisim
      </Text>
    </View>
  );
}

const CustomDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <View style={{ flex: 1, paddingTop: SIZES.h1 }}>
          <CustomAvatarContent />
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
          ...FONTS.h4,
          color: COLORS.black,
          activeTintColor: COLORS.blue2,
        },
        drawerContentOptions: {
          activeTintColor: COLORS.white,
          ...FONTS.desc1,
        },
      }}
      options={{
        swipeEdgeWidth: 40,
      }}>
      <Drawer.Screen name="InsideNavigations" component={InsideNavigations} />
      <Drawer.Screen name="Settings" component={Home} />
      <Drawer.Screen name="Profil" component={Home} />
      <Drawer.Screen name="AlertScreen" component={AlertScreen} />
    </Drawer.Navigator>
  );
};

export default CustomDrawerNavigator;
