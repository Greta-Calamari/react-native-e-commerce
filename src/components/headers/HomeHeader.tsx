import React from "react"
import { Image, StyleSheet, View } from "react-native"
import { s, vs } from "react-native-size-matters"
import { Images } from "../../constants/images-paths"
import { AppColors } from "../../style/colors"

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={Images.appLogo} style={styles.logo} />
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: vs(10),
  },
  logo: {
    height: vs(40),
    width: s(40),
    tintColor: AppColors.white,
  },
})
