import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";

import {
  CustomButton,
  CustomTextInput,
  TextButton,
  ToastMessage,
} from "../../../components";
import LoginIcon from "../../../assets/svg/undraw_button_style_re_uctt.svg";

import styles from "./styles";

export const Login = ({ navigation }) => {
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.loginImg}>
          <LoginIcon height="100%" width="100%" />
        </View>
        <Text style={styles.header}>KULLANICI GİRİŞİ</Text>
        <TextButton
          onPressFunc={async () => {
            fetch("https://63660cb5046eddf1baf7a688.mockapi.io/api/v1/user", {
              method: "GET",
            })
              .then((response) => response.json())
              .then((json) => {
                navigation.navigate("TabNav", { user: json[0] });
              })
              .catch((error) => console.error(error));
          }}
          buttonText={"Giriş"}
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
        <View style={styles.buttonContainer}>
          <CustomButton
            buttonText={"Giriş Yap"}
            onPressFunc={async () => {
              try {
                const resp = await fetch(
                  "https://63660cb5046eddf1baf7a688.mockapi.io/api/v1/user"
                );
                const data = await resp.json();
                console.info("datalong: " + data.length);
              } catch (error) {
                console.error("error ", data);
                throw error;
              }

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
                    navigation.navigate("TabNav", { user: data[id] });
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
