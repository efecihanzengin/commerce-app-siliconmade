import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.sm,
    padding: SIZES.md,
    margin: SIZES.xs,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.md,
    color: COLORS.primary,
    marginBottom: SIZES.xs,
  },
  price: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.lg,
    color: COLORS.accent,
    marginTop: SIZES.xs,
  },
  description: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.sm,
    color: COLORS.gray,
  },
});
