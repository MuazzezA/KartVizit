import React from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import SearchBar from "../components/SearchBar";
import { theme, icons, images } from "../constants";
const { COLORS, SIZES, FONTS } = theme;
const { card1, card2 } = images;
const { searchIcon } = icons;

// kaydırıldığında search bar kaybolmalı

const MyCardsScreen = ({ navigation }) => {
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
    {
      text: "test 5",
      img: card2,
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
              isMyCard: true,
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
      <Text style={{ ...FONTS.body2 }}>Oluşturulan Tüm Kartlar</Text>
      <Text style={{ ...FONTS.desc2 }}>
        Toplam Kart Sayısı : {cards.length}
      </Text>
      <SearchBar icon={searchIcon} />

      <FlatList
        data={cards}
        keyExtractor={(item) => item.text}
        renderItem={({ item, index }) => renderItem({ item, index })}
      />
    </View>
  );
};
export default MyCardsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
  renderItems: {
    flex: 1,
    alignItems: "flex-start",
    marginVertical: 10,
  },
  imageContainer: {
    height: 150,
    padding: SIZES.padding / 2,
    width: SIZES.width - SIZES.padding,
    backgroundColor: COLORS.softBlue,
    justifyContent: "flex-start",
    borderRadius: SIZES.radius,
    flexDirection: "row-reverse",
    elevation: 5,
  },
  imageItem: {
    height: 110,
    flex: 1,
    alignSelf: "flex-start",
  },
  textContainer: {
    padding: 3,
    borderRadius: SIZES.radius,
    flex: 1,
  },
  button: {
    flex: 1,
    width: SIZES.width,
    alignItems: "center",
  },
});
