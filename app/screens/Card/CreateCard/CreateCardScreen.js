import React from "react";
import { Text, View } from "react-native";
import { CustomButton } from "../../../components";
import { createCard } from "../../../service/card/createCard";

const CreateCardScreen = ({ navigation, route }) => {
  const url = "https://63660cb5046eddf1baf7a688.mockapi.io/api/v1/myCards";
  return (
    <View>
      <Text>Kart Oluşturma Ekranı</Text>
      <CustomButton
        buttonText={"Oluştur"}
        onpressFunc={() => {
          //createCard();
        }}
      />
    </View>
  );
};

export { CreateCardScreen };
