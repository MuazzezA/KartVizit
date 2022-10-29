import { View, Text, StyleSheet, Image } from "react-native";
import { theme, images } from "../../constants";

const { onboarding1, office1 } = images;
const { COLORS, SIZES, FONTS } = theme;
import { CustomButton } from "../../components/";

const Onboarding = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightGrey,
        alignItems: "center",
      }}>
      <Image
        source={onboarding1}
        resizeMode="contain"
        style={{
          marginVertical: 30,
          width: 300,
          height: 300,
        }}
      />
      <Text style={{ ...FONTS.body2, textAlign: "center" }}>
        -- UYGULAMA ADI --
      </Text>
      <View
        style={{
          marginTop: 30,
        }}>
        <CustomButton
          onPressFunc={() => navigation.navigate("Login")}
          buttonText="Giriş Yap"
        />
        <CustomButton
          onPressFunc={() => navigation.navigate("Register")}
          buttonText="Kayıt Ol"
        />
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.purple,
    height: 45,
    width: 200,
    margin: 5,
    borderRadius: SIZES.radius,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: SIZES.h3,
    color: COLORS.lightGrey,
  },
});
