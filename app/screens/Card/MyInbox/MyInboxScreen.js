import React from "react";
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import { SearchBar } from "../../../components";
import { images, FONTS } from "../../../utils/constants/";
import styles from "./styles";

const { card1, card2 } = images;

const MyInboxScreen = ({ navigation }) => {
  const cards = [
    {
      text: "test 1",
      img: card2,
    },
    {
      text: "test 2",
      img: card1,
    },
    {
      text: "test 3",
      img: card2,
    },
    {
      text: "test 4",
      img: card1,
    },
  ];

  function textDesc(subject, desc) {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ ...FONTS.h3 }}>{subject} : </Text>
        <Text style={{ ...FONTS.desc2 }}>{desc} </Text>
      </View>
    );
  }

  const renderItem = ({ item, index }) => {
    return (
      <View key={index} style={styles.renderItems}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CardDetailScreen", {
              card: item,
              isMyCard: false,
            });
          }}
          activeOpacity={0.8}
          style={styles.button}>
          <View style={styles.imageContainer}>
            <Image
              source={item.img}
              resizeMode="contain"
              style={styles.imageItem}
            />
            <View style={styles.textContainer}>
              {textDesc(item.text, "1234567890")}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{ ...FONTS.body2 }}>
        {"Gelen Kartlar" + " (" + cards.length + ")"}
      </Text>

      <SearchBar />

      <FlatList
        data={cards}
        keyExtractor={(item) => item.text}
        renderItem={({ item, index }) => renderItem({ item, index })}
      />
    </View>
  );
};
export { MyInboxScreen };
