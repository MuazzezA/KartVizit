import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { IconButton, Seperator } from "../components/";
import { theme, icons } from "../constants";

const { COLORS, SIZES, FONTS } = theme;
const { thrash, addToContact, share } = icons;

function textDesc(subject, desc) {
  return (
    <View style={styles.textContainer}>
      <Text style={{ ...FONTS.h5 }}>{subject} : </Text>
      <Text style={{ ...FONTS.desc3 }}>{desc} </Text>
    </View>
  );
}
async function delete_mycard(index, { navigation }) {
  if (index != null) {
    const resp = await fetch(
      "https://63660cb5046eddf1baf7a688.mockapi.io/api/v1//myCards/" + index,
      { method: "DELETE" }
    );
    //const data = await resp.json();
    if (resp.status == 200) {
      navigation.replace("MyCardsScreen");
      return 1;
    } else {
      return 0;
    }
  }
}
const CardScrollView = ({ card }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.scrollInside}>
        <View>
          <Image
            source={{ uri: card.cardImageLink }}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.cardDescText}>ÖN</Text>
        </View>
        <View>
          <Image
            source={{ uri: card.cardBackImageLink }}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.cardDescText}>ARKA</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const Buttons = ({ index, isMyCard, navigation }) => {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.centerContainer}>
        <IconButton
          icon={thrash}
          color={COLORS.red}
          onPress={() => delete_mycard(index, { navigation })}
        />
        <Text style={{ ...FONTS.desc2, color: COLORS.red }}>Kartı Sil</Text>
      </View>

      {isMyCard ? (
        <View style={styles.centerContainer}>
          <IconButton icon={share} />
          <Text style={{ ...FONTS.desc2, color: COLORS.blue }}>
            Kartı Paylaş
          </Text>
        </View>
      ) : (
        <View style={styles.centerContainer}>
          <IconButton icon={addToContact} />
          <Text style={{ ...FONTS.desc2, color: COLORS.blue }}>
            Kişilere Ekle
          </Text>
        </View>
      )}
    </View>
  );
};

const CardDetailScreen = ({ route, navigation }) => {
  const { card, isMyCard, index } = route.params;
  return (
    <ScrollView>
      <ImageBackground
        source={require("../assets/images/beyaz.png")}
        resizeMode="cover">
        <View style={styles.container}>
          <View style={styles.centerContainer}>
            <CardScrollView card={card} />
          </View>
          <Seperator />
          <Text style={{ ...FONTS.desc2, paddingVertical: SIZES.padding }}>
            Detaylar
          </Text>

          {textDesc("Kart Numarası", "1234567890")}
          {textDesc("Oluşturulma Tarihi", card.createDate)}
          {textDesc("İsim", card.name)}
          {textDesc("Soyisim", card.surname)}
          {textDesc("Cinsiyet", card.gender)}
          {textDesc("Şirket", card.company)}
          {textDesc("Ünvan", card.job)}
          {textDesc("E-Mail Adresi", card.email)}
          {textDesc("Telefon Numarası", card.phone)}
          {textDesc("Şehir", card.city)}
          {textDesc("Adres", card.adres)}

          <Seperator />
          <Text style={{ ...FONTS.desc2, paddingVertical: SIZES.padding }}>
            İşlemler
          </Text>
          <Buttons index={index} isMyCard={isMyCard} navigation={navigation} />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};
export default CardDetailScreen;

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 1,
    marginVertical: 3,
  },
  container: {
    paddingVertical: 30,
    paddingHorizontal: SIZES.padding,
    flex: 1,
  },
  centerContainer: {
    alignItems: "center",
  },
  image: {
    width: SIZES.width - 60,
    height: 180,
  },

  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  scrollInside: { flexDirection: "row" },
  cardDescText: { paddingTop: 3, textAlign: "center", ...FONTS.body4 },
});
