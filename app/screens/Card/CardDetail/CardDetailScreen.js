import React from "react";
import { Text, View, ScrollView, ImageBackground } from "react-native";
import { Seperator } from "../../../components";
import { FONTS } from "../../../utils/constants/";
import { ScrollCard, ButtonGroup } from "./component";
import styles from "./styles";
function textDesc(subject, desc) {
  return (
    <View style={styles.textContainer}>
      <Text style={{ ...FONTS.h5 }}>{subject} : </Text>
      <Text style={{ ...FONTS.desc3 }}>{desc} </Text>
    </View>
  );
}
const CardDetailScreen = ({ route, navigation }) => {
  const { card, isMyCard, index } = route.params;
  return (
    <ScrollView>
      <ImageBackground
        source={require("../../../assets/images/beyaz.png")}
        resizeMode="cover">
        <View style={styles.container}>
          <View style={styles.centerContainer}>
            <ScrollCard card={card} />
          </View>
          <Seperator />
          <Text style={styles.detailText}>Detaylar</Text>
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
          <Text style={styles.descText}>İşlemler</Text>
          <ButtonGroup
            index={index}
            isMyCard={isMyCard}
            navigation={navigation}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};
export { CardDetailScreen };
