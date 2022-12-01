import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { theme, images } from "../../constants";
import { CustomButton, CustomTextInput, TextButton } from "../../components/";

import ToastMessage from "../../components/ToastMessage";
const { creditcard } = images;
const { COLORS, SIZES, FONTS } = theme;

const Login = ({ navigation }) => {
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: COLORS.lightGrey,
          alignItems: "center",
        }}>
        <Image
          source={creditcard}
          resizeMode="contain"
          style={{
            width: 250,
            height: 250,
          }}
        />
        <Text style={{ ...FONTS.body2, marginVertical: 20 }}>
          KULLANICI GİRİŞİ
        </Text>
        <TextButton
          onPressFunc={async () => {
            const resp = await fetch(
              "https://63660cb5046eddf1baf7a688.mockapi.io/api/v1/user"
            );
            const data = await resp.json();
            navigation.navigate("CustomDrawerNavigator", { user: data[0] });
          }}
          buttonText={"kaçak giriş"}
        />

        <View>
          <CustomTextInput
            placeHolderText="Kullanıcı Adı"
            value={nick}
            onChangeFunc={(e) => setNick(e.nativeEvent.text)}
          />
          <CustomTextInput
            placeHolderText="Şifre"
            value={password}
            onChangeFunc={(e) => setPassword(e.nativeEvent.text)}
          />
        </View>
        <View
          style={{
            marginTop: 30,
            justifyContent: "center",
          }}>
          <CustomButton
            buttonText={"Giriş Yap"}
            onPressFunc={async () => {
              const resp = await fetch(
                "https://63660cb5046eddf1baf7a688.mockapi.io/api/v1/user"
              );
              const data = await resp.json();
              console.log(data.length);
              // hesabın varlığının olmadığı da uyarı olarak verilmeli

              if (nick == "" || password == "") {
                ToastMessage("Kullanıcı Adı veya Şifre Boş Bırakılamaz");
              } else {
                let isUser = false;
                let id = -1;
                for (let i = 0; i < data.length; i++) {
                  if (nick == data[i].nick) {
                    isUser = true;
                    id = i;
                  }
                }
                if (isUser) {
                  if (password == data[id].password) {
                    navigation.navigate("CustomDrawerNavigator", {
                      user: data[id],
                    });
                  } else {
                    ToastMessage("Kullanıcı Adı veya Şifre Yanlış");
                  }
                } else if (isUser == false || id == -1) {
                  ToastMessage("Kayıtlı Kullanıcı Bulunamadı");
                }
              }
            }}
          />
        </View>

        <TextButton
          onPressFunc={async () => {
            navigation.replace("Register");
          }}
          buttonText={"Kayıt Ol"}
        />
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.purple,
    height: 45,
    width: 200,
    borderRadius: SIZES.radius,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: COLORS.lightGrey,
  },
});
