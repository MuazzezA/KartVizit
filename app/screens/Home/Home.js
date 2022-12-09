import React, { useState } from "react";

import { Text, View, Animated, Image, ScrollView } from "react-native";

import { CustomProgressChart } from "../../components";
import { IconButtonList } from "./component";

import { theme, images } from "../../utils/constants/";
import styles from "./styles";

const { card1, card2 } = images;
const { SIZES, FONTS } = theme;

const ITEM_SIZE =
  Platform.OS === "ios" ? SIZES.width * 0.74 : SIZES.width * 0.75;
const EMPTY_ITEM_SIZE = (SIZES.width - ITEM_SIZE) / 2;

const Home = ({ route, navigation }) => {
  const { user } = route.params;

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const cards = [
    {
      text: "test 1",
      img: card2,
    },
    {
      text: "test 2",
      img: card1,
    },
    {
      text: "test 3",
      img: card2,
    },
    {
      text: "test 3",
      img: card1,
    },
    {
      text: "test 3",
      img: card2,
    },
  ];

  function rightFunc() {
    navigation.navigate("AlertScreen");
  }

  return (
    <ScrollView>
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={cards}
        keyExtractor={(item, index) => index}
        horizontal
        pagingEnabled
        bounces={false}
        decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
        renderToHardwareTextureAndroid
        // contentContainerStyle={{
        //   justifyContent: "center",
        //   alignItems: "center",
        // }}
        snapToInterval={ITEM_SIZE}
        snapToAlignment="center" // gelenin nerede duracağıı
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          if (!item.img) {
            return <View style={{ width: EMPTY_ITEM_SIZE }} />;
          }

          const translateY = scrollX.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0],
            //extrapolate: "extend",
          });

          return (
            <View style={styles.cardList} key={index}>
              <Animated.View
                snapToInterval={ITEM_SIZE}
                style={
                  ({ transform: [{ translateY }] }, styles.cardInsideItem)
                }>
                <Image source={item.img} style={styles.cardImage} />
              </Animated.View>
            </View>
          );
        }}
      />

      <IconButtonList navigation={navigation} />

      <Text style={[styles.header, { ...FONTS.body2 }]}>Özetler</Text>

      <View style={styles.charts}>
        <CustomProgressChart descriptionText="Kart Kapasitesi" data={[0.4]} />
        <CustomProgressChart descriptionText="Gelen Kartlarım" data={[0.87]} />
      </View>
    </ScrollView>
  );
};
export { Home };
