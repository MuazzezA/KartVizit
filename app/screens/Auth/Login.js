import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { theme, images } from "../../constants";
import { CustomButton, CustomTextInput, TextButton } from "../../components/";

const { creditcard } = images;
const { COLORS, SIZES, FONTS } = theme;

const Login = ({ navigation }) => {
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

        <View>
          <CustomTextInput placeHolderText="Kullanıcı Adı" />
          <CustomTextInput placeHolderText="Şifre" />
        </View>
        <View
          style={{
            marginTop: 30,
            justifyContent: "center",
          }}>
          <CustomButton
            buttonText={"Giriş Yap"}
            onPressFunc={() => navigation.navigate("Home")}
          />
        </View>
        <TextButton
          onPressFunc={() => navigation.replace("Home2")}
          buttonText={"animasyon"}
        />
        <TextButton
          onPressFunc={() => navigation.replace("Register")}
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
