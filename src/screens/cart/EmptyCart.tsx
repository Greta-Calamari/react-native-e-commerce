import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { s, vs } from "react-native-size-matters"
import AppText from "../../components/text/AppText"
import { AppFonts } from "../../style/fonts"
import { AppColors } from "../../style/colors"
import AppButton from "../../components/buttons/AppButton"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

const EmptyCart = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="shopping-outline"
        size={s(100)}
        color={AppColors.primary}
        style={styles.icon}
      />
      <AppText style={styles.title}>Your Cart Is Empty</AppText>
      <AppText style={styles.subtitle}>
        Browse our products and find something you like.
      </AppText>
      <AppButton
        title="Start Shopping"
        style={styles.button}
        onPress={() => {
          navigation.navigate("HomeScreen")
        }}
      />
    </View>
  )
}

export default EmptyCart

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: s(20),
  },
  title: {
    fontSize: s(20),
    fontFamily: AppFonts.NunitoBold,
    color: AppColors.primary,
    marginBottom: vs(10),
  },
  subtitle: {
    fontSize: s(16),
    fontFamily: AppFonts.NunitoMedium,
    color: AppColors.medGray,
    textAlign: "center",
    marginBottom: vs(20),
  },
  button: {
    width: "80%",
  },
  icon: {
    marginBottom: vs(20),
    opacity: 0.9,
  },
})
