import Toast from "react-native-root-toast";

export default function ToastMessage(message) {
  return Toast.show(message, {
    duration: Toast.durations.SHORT,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
  });
}
