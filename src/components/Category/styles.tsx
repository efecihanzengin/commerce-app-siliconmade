import { StyleSheet } from "react-native";
import { SECONDARY_COLOR, TEXT_COLOR } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 5,
    backgroundColor: "#f5f5f5",
    borderRadius: 15,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: "#fff",
  },
  name: {
    fontFamily: "HostGrotesk-Bold",
    color: TEXT_COLOR,
  },
});
