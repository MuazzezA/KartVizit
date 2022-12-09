import { View, Text } from "react-native";

import { CustomButton } from "../../../components";
import InfoTab from "../../../assets/svg/undraw_information_tab_re_f0w3.svg";
import styles from "./styles";

export const Onboarding = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        //backgroundColor: COLORS.lightGrey,
        alignItems: "center",
      }}>
      <InfoTab height="50%" width="50%" />
      <Text style={styles.infoText}>E-KARTVİZİTİM</Text>
      <View style={styles.buttonContainer}>
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
