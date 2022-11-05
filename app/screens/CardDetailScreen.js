import React from "react";
import { Text, View, Image, ScrollView, StyleSheet } from "react-native";

import IconButton from "../components/IconButton";
import { theme, icons } from "../constants";

const { COLORS, SIZES, FONTS } = theme;
const { thrash, addToContact, share } = icons;

function textDesc(subject, desc) {
  return (
    <View style={styles.textContainer}>
      <Text style={{ ...FONTS.h3 }}>{subject} : </Text>
      <Text style={{ ...FONTS.desc2 }}>{desc} </Text>
    </View>
  );
}

const CardScrollView = ({ card }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.scrollInside}>
        <View>
          <Image source={card.img} resizeMode="contain" style={styles.image} />
          <Text style={styles.cardDescText}>önyüz</Text>
        </View>
        <View>
          <Image source={card.img} resizeMode="contain" style={styles.image} />
          <Text style={styles.cardDescText}>arkayüz</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const Buttons = ({ card, isMyCard }) => {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.centerContainer}>
        <IconButton icon={thrash} color={COLORS.red} />
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
  const { card, isMyCard } = route.params;
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.centerContainer}>
          <CardScrollView card={card} />
        </View>
        <View style={styles.seperator} />
        <Text style={{ ...FONTS.desc1, paddingVertical: SIZES.padding }}>
          Detaylar
        </Text>

        {textDesc("Kart Numarası", "1234567890")}
        {textDesc("Oluşturulma Tarihi", "xxx")}
        {textDesc("İsim", "ad")}
        {textDesc("Soyisim", "soyisim")}
        {textDesc("Cinsiyet", "Kadın/Erkek")}
        {textDesc("Şirket", "şehir teknolojileri merkezi")}
        {textDesc("Ünvan", "jr. mobile dev")}
        {textDesc("E-Mail Adresi", "mobil@stm.com")}
        {textDesc("Telefon Numarası", "+90 555 555 55 55")}
        {textDesc("Ülke/Şehir", "Türkiye/Konya")}
        {textDesc("Adres", "bilim merkezi ştm")}

        <View style={styles.seperator} />
        <Text style={{ ...FONTS.desc1, paddingVertical: SIZES.padding }}>
          İşlemler
        </Text>
        <Buttons card={card} isMyCard={isMyCard} />
      </View>
    </ScrollView>
  );
};
export default CardDetailScreen;

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    marginVertical: 5,
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
  seperator: {
    marginVertical: SIZES.padding,
    height: 2,
    backgroundColor: COLORS.blue2,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  scrollInside: { flexDirection: "row" },
  cardDescText: { textAlign: "center", ...FONTS.h4 },
});
