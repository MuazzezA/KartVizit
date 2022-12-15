import React from "react";
import { View, Text } from "react-native";
import { TextButton } from "../../components";
import { AvatarContent } from "./component";

import styles from "./styles";
import Svg, { Circle } from "react-native-svg";
import { SIZES } from "../../utils/constants";

export const ProfileScreen = ({ route, navigation }) => {
  const user = route.params.user;

  return (
    <>
      <Svg style={styles.svgBack}>
        <Circle
          r={SIZES.width / 1.3}
          cx={SIZES.width / 4}
          cy={-SIZES.width / 6}
          fill="#3646b1"
        />
      </Svg>
      <Text style={styles.nick}>{user.nick}</Text>
      <AvatarContent user={user} />

      <View style={styles.container}>
        <Text>
          fullname: {user.name} {user.lastName}
        </Text>
        <Text>phone: {user.phone}</Text>
        <Text>company: {user.company}</Text>
        <Text>created time: {user.createdAt}</Text>
        <View style={styles.buttonContainer}>
          <TextButton
            buttonText={"Ayarlar"}
            onPressFunc={() => {
              navigation.navigate("Settings");
            }}
          />
        </View>
      </View>
    </>
  );
};
