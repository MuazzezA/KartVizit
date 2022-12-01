import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";

import { theme, images } from "../../constants";
import {
  CustomButton,
  CustomTextInput,
  TextButton,
  ToastMessage,
} from "../../components/";

const { creditcard } = images;
const { SIZES, FONTS } = theme;

const Register = ({ navigation }) => {
  const [nick, setNick] = useState("");
  const [userName, setUserName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

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
          <CustomTextInput
            placeHolderText="Kullanıcı Adı"
            value={nick}
            onChangeFunc={(e) => setNick(e.nativeEvent.text)}
          />
          <CustomTextInput
            placeHolderText="İsim"
            value={userName}
            onChangeFunc={(e) => setUserName(e.nativeEvent.text)}
          />
          <CustomTextInput
            placeHolderText="Soyisim"
            value={surname}
            onChangeFunc={(e) => setSurname(e.nativeEvent.text)}
          />
          <CustomTextInput
            placeHolderText="Telefon Numarası"
            value={phone}
            onChangeFunc={(e) => setPhone(e.nativeEvent.text)}
          />
          <CustomTextInput
            placeHolderText="Şifre"
            value={password}
            onChangeFunc={(e) => setPassword(e.nativeEvent.text)}
          />
          <CustomTextInput
            placeHolderText="Şifre Tekrar"
            value={rePassword}
            onChangeFunc={(e) => setRePassword(e.nativeEvent.text)}
          />
        </View>
        <View
          style={{
            marginTop: 30,
            justifyContent: "center",
          }}>
          <CustomButton
            buttonText={"Kayıt Ol"}
            onPressFunc={async () => {
              const resp = await fetch(
                "https://63660cb5046eddf1baf7a688.mockapi.io/api/v1/user"
              );
              const userCheckData = await resp.json();

              let isUser = false;

              for (let i = 0; i < userCheckData.length; i++) {
                if (nick == userCheckData[i].nick) {
                  isUser = true;
                }
              } // get yapıp kullanıcı var mı bak

              if (isUser) {
                ToastMessage("Kullanıcı Adı Zaten Kayıtlı");
              } else {
                // kullanıcı adı kayıtlı değilse post ile kayıt yap
                // kontroller eksik

                if (
                  nick === "" ||
                  userName === "" ||
                  surname === "" ||
                  phone === "" ||
                  password === "" ||
                  rePassword === ""
                ) {
                  ToastMessage("Lütfen Tüm Alanları Doldurunuz");
                } else {
                  const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      createdAt: new Date(),
                      nick: nick,
                      name: userName,
                      lastName: surname,
                      phone: phone,
                      //company: "st merkezi",
                      //unvan: "ünvan", // boş değer
                      password: password,
                    }),
                  };
                  try {
                    const response = await fetch(
                      "https://63660cb5046eddf1baf7a688.mockapi.io/api/v1/user",
                      requestOptions
                    );
                    const data = await response.json();
                    data
                      .then(ToastMessage("Kayıt Başarılı"))
                      .then(
                        navigation.navigate("CustomDrawerNavigator", {
                          user: data,
                        })
                      );
                  } catch (error) {
                    ToastMessage("Error registering user");
                  }
                }
              }
            }}
          />
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
