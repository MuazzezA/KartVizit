import React from "react";
import { View, Text } from "react-native";
import { TextButton } from "../../components";
import { AvatarContent } from "./component";

import styles from "./styles";
import Join from "./../../assets/svg/undraw_join.svg";

export const ProfileScreen = ({ route, navigation }) => {
  const user = route.params.user;

  return (
    <>
      <Join style={styles.svgBack} />
      <AvatarContent user={user} />
      <Text style={styles.name}>
        {user.name} {user.lastName}
      </Text>
      <TextButton
        buttonText={"Ayarlar"}
        onPressFunc={() => {
          navigation.navigate("Settings");
        }}
      />
    </>
  );
};
