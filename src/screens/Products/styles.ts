import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, SECONDARY_COLOR, TEXT_COLOR, TEXT_LIGHT, BACKGROUND_COLOR } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontFamily: "HostGrotesk-Bold",
    color: PRIMARY_COLOR,
    textAlign: "center",
    marginBottom: 5,
  },
  productCount: {
    fontSize: 14,
    fontFamily: "HostGrotesk-Regular",
    color: TEXT_LIGHT,
    textAlign: "center",
    marginBottom: 10,
  },
  productPressable: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign: 'center',
    paddingVertical: 10,
    fontFamily: 'Roboto-Bold',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});
