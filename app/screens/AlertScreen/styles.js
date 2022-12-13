import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  flatListContainer: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    flex: 1,
  },
  /* zIndex olmazsa TouchableOpacity onPress çalışmıyor */
  svg: { position: "absolute", zIndex: -1 },
  buttons: {
    width: "10%",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  text: { maxWidth: "95%", maxHeight: "95%", flex: 1, paddingTop: 2 },
  touchContainer: {
    width: "90%",
    alignSelf: "flex-start",
  },
  alertContainer: {
    flexDirection: "row",
    backgroundColor: "#bbccee",
    width: "92%",
    borderRadius: 5,
    padding: 3,
    alignSelf: "flex-end",
  },
  empty: { height: 15 },
  listContainer: {
    height: "100%",
    width: "98%",
    flex: 1,
  },
});
