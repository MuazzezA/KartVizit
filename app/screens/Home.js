import React, { useState } from "react";
import {
  Text,
  View,
  Animated,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import IconButton from "../components/IconButton";
import CustomHeader from "../components/Header";
import CustomProgressChart from "../components/ProgressChart";

import { theme, images, icons } from "../constants/";
const { myCard, menu, inbox, statistic, share, alertIcon } = icons;
const { card1, card2 } = images;
const { COLORS, SIZES, FONTS } = theme;

const SPACING = 5;
const ITEM_SIZE =
  Platform.OS === "ios" ? SIZES.width * 0.74 : SIZES.width * 0.75;
const EMPTY_ITEM_SIZE = (SIZES.width - ITEM_SIZE) / 2;

const Home = ({ navigation }) => {
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

  function leftFunc() {
    navigation.openDrawer();
  }

  function rightFunc() {
    navigation.navigate("AlertScreen");
  }

  const IconButtonList = () => {
    return (
      <View style={styles.iconButtons}>
        <IconButton
          icon={myCard}
          onPress={() => {
            navigation.navigate("MyCardsScreen");
          }}
        />
        <IconButton
          icon={inbox}
          onPress={() => {
            navigation.navigate("MyCardInboxScreen");
          }}
        />
        <IconButton
          icon={statistic}
          onPress={() => {
            navigation.navigate("StatisticScreen");
          }}
        />
        <IconButton
          icon={share}
          onPress={() => {
            navigation.navigate("ShareCardScreen");
          }}
        />
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={{ paddingTop: 30 }}>
        <CustomHeader
          leftIcon={menu}
          leftFunc={() => leftFunc()}
          rightIcon={alertIcon}
          rightFunc={() => rightFunc()}
        />
        <View>
          <Animated.FlatList
            showsHorizontalScrollIndicator={false}
            data={cards}
            keyExtractor={(item, index) => index}
            horizontal
            pagingEnabled
            bounces={false}
            decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
            renderToHardwareTextureAndroid
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
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
        </View>

        <IconButtonList />

        <Text style={[styles.header, { ...FONTS.body2 }]}>Özetler</Text>

        <View style={styles.charts}>
          <CustomProgressChart descriptionText="Kart Kapasitesi" data={[0.4]} />
          <CustomProgressChart
            descriptionText="Gelen Kartlarım"
            data={[0.87]}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default Home;

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    padding: 15,
  },
  cardList: {
    width: ITEM_SIZE,
    //backgroundColor: "white",
    height: 200,
  },
  cardInsideItem: {
    marginHorizontal: SPACING,
    padding: SPACING * 2,
    alignItems: "center",

    backgroundColor: "transparent",
    borderRadius: 20,
  },
  cardImage: {
    height: 160,
    resizeMode: "contain",
  },
  iconButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    //backgroundColor: "white",
    padding: 5,
  },
  charts: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
