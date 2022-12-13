import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Svg, { Line, Circle } from "react-native-svg";
import { ButtonIconMini } from "../../../components";
import getNotification from "../../../service/notification/notification";
import styles from "../styles";

const margin = 60;

export const renderItem = (props) => {
  renderItem.defautlProps = {
    name: "-",
    desc: "-",
    time: "0",
  };

  const id = props.id;
  const name = props.fname;
  const desc = props.desc;
  const time = props.time;

  return (
    <>
      <View style={styles.empty} />
      <View style={styles.alertContainer}>
        <TouchableOpacity style={styles.touchContainer} onPress={() => {}}>
          <Text>
            {name} {time}
          </Text>
          <Text
            style={styles.text}
            ellipsizeMode="tail"
            lineBreakMode="tail"
            numberOfLines={2}>
            {desc}
          </Text>
        </TouchableOpacity>
        <View style={styles.buttons}>
          <ButtonIconMini
            name="check-bold"
            color={"green"}
            onPress={() => {}}
          />
          <ButtonIconMini
            name="close-thick"
            color="red"
            onPress={() => getNotification.deleteNotification(id)}
          />
        </View>
      </View>

      <Svg style={styles.svg}>
        <Line
          x1={15}
          x2={15}
          y1={0}
          y2={margin * 10}
          stroke="grey"
          opacity={0.3}
          strokeWidth="1.5"
        />
        <Circle cx={15} cy={margin - margin / 2} fill="black" r={5} />
      </Svg>
    </>
  );
};
