import React from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import { theme, images } from "../../constants";
import { CustomButton, CustomTextInput, TextButton } from "../../components/";

const { creditcard } = images;
const { COLORS, SIZES, FONTS } = theme;

const Register = ({ navigation }) => {
  return (
    <ScrollView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          alignItems: "center",
          flex: 1,
          paddingVertical: SIZES.padding,
        }}>
        <Image
          source={creditcard}
          resizeMode="contain"
          style={{
            width: 250,
            height: 250,
          }}
        />
        <Text style={{ ...FONTS.body2, marginVertical: 20 }}>YENİ KAYIT</Text>
        <View>
          <CustomTextInput placeHolderText="Kullanıcı Adı" />
          <CustomTextInput placeHolderText="İsim" />
          <CustomTextInput placeHolderText="Soyisim" />
          <CustomTextInput placeHolderText="Telefon Numarası" />
          <CustomTextInput placeHolderText="Şifre" />
          <CustomTextInput placeHolderText="Şifre Tekrar" />
        </View>
        <View
          style={{
            marginTop: 30,
            justifyContent: "center",
          }}>
          <CustomButton
            buttonText={"Kayıt Ol"}
            onPressFunc={() =>
              navigation.navigate("CustomDrawerNavigator")
            }></CustomButton>
        </View>
        <TextButton
          onPressFunc={() => navigation.replace("Login")}
          buttonText="Giriş Yap"
        />
      </View>
    </ScrollView>
  );
};

export default Register;
