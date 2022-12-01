import React, { useLayoutEffect } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { CustomButton, SearchBar } from "../components";
import { theme, icons } from "../constants";

const { COLORS, SIZES, FONTS } = theme;
const { searchIcon } = icons;

// kaydırıldığında search bar kaybolmalı

const MyCardsScreen = ({ navigation }) => {
  const [cardList, setCardList] = React.useState([]);

  useLayoutEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(
        "https://63660cb5046eddf1baf7a688.mockapi.io/api/v1//myCards"
      );
      response = await response.json();
      setCardList(response);
    }

    fetchMyAPI();
  }, []);

  function textDesc(subject, desc) {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ ...FONTS.h3 }}>{subject}: </Text>
        <Text style={{ ...FONTS.desc2 }}>{desc} </Text>
      </View>
    );
  }

  const renderItem = ({ item, index }) => {
    return (
      <View key={index} style={styles.renderItems}>
        <TouchableOpacity
          onPress={() => {
            navigation.replace("CardDetailScreen", {
              card: item,
              isMyCard: true,
              index: item.id,
            });
          }}
          activeOpacity={0.8}
          style={styles.button}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item.cardImageLink }}
              resizeMode="contain"
              style={{ height: 110, width: 110 }}
              //style={styles.imageItem}
            />
            <View style={styles.textContainer}>
              {textDesc(index + 1, item.cardTitle)}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{ ...FONTS.body2 }}>
        Oluşturulan Tüm Kartlar ({cardList.length})
      </Text>

      <SearchBar icon={searchIcon} />

      {cardList.length == 0 ? (
        <View style={{ flex: 1, paddingTop: 30, alignItems: "center" }}>
          <Text style={{ ...FONTS.h3 }}>Kayıtlı Kartınız Bulunamadı</Text>
          <CustomButton
            buttonText={"+ Yeni Kart Oluştur"}
            onPressFunc={() => navigation.navigate("CreateCardScreen")}
          />
        </View>
      ) : (
        <FlatList
          data={cardList}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => renderItem({ item, index })}
        />
      )}
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
    width: 110,
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
