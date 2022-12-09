import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export const CustomButton = ({ buttonText, onPressFunc = () => {} }) => {
  return (
    <TouchableOpacity onPress={onPressFunc} style={styles.style}>
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
