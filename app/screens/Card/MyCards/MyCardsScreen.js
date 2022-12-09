import React, { useLayoutEffect } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { CustomButton, SearchBar } from "../../../components";
import { FONTS } from "../../../utils/constants/";

import styles from "./styles";

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
              style={styles.imageItem}
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
    // contentContainerStyle={{ flexGrow: 1 }}
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ ...FONTS.body2 }}>
          Oluşturulan Tüm Kartlar ({cardList.length})
        </Text>
        <SearchBar />
      </View>

      {cardList.length == 0 ? (
        <View style={styles.createCardContainer}>
          <Text style={{ ...FONTS.h3 }}>Kayıtlı Kartınız Bulunamadı</Text>
          <CustomButton
            buttonText={"+ Yeni Kart Oluştur"}
            onPressFunc={() => navigation.navigate("CreateCardScreen")}
          />
        </View>
      ) : (
        <View style={{ flex: 6 }}>
          <TouchableOpacity
            style={styles.miniButton}
            onPress={() => navigation.navigate("CreateCardScreen")}>
            <Text>Kart Oluştur</Text>
          </TouchableOpacity>
          <FlatList
            data={cardList}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => renderItem({ item, index })}
          />
        </View>
      )}
    </ScrollView>
  );
};
export { MyCardsScreen };
