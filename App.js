import "react-native-gesture-handler"; // drawer menu kurulumunda burda en üstte olamak zorunda
import React from "react";
import Navigations from "./app/navigations/CustomStackNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootSiblingParent } from "react-native-root-siblings"; // toast msg cross platform için
import { useFonts } from "expo-font";

const fonts = {
  Montserrat_Bold: require("./app/assets/fonts/Montserrat-Bold.ttf"),
  Montserrat_ExtraBoldItalic: require("./app/assets/fonts/Montserrat-ExtraBoldItalic.ttf"),
  Montserrat_Light: require("./app/assets/fonts/Montserrat-Light.ttf"),
  Montserrat_Regular: require("./app/assets/fonts/Montserrat-Regular.ttf"),
  Montserrat_ExtraLightItalic: require("./app/assets/fonts/Montserrat-ExtraLightItalic.ttf"),
};

const App = () => {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <RootSiblingParent>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#B4CDE6" }}>
        <Navigations />
      </SafeAreaView>
    </RootSiblingParent>
  );
};
export default App;
