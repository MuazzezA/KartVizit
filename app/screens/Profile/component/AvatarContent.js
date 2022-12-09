import { Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";

export const AvatarContent = ({ user }) => {
  return (
    <>
      {user ? (
        <Image source={{ uri: user.avatar }} style={styles.image} />
      ) : (
        <MaterialCommunityIcons name="account-circle" />
      )}
    </>
  );
};
