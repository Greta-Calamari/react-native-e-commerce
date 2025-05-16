import { Image, StyleSheet, Text, View } from "react-native"
import React, { useState } from "react"
import AppSaveView from "../../components/views/AppSaveView"
import { sharedPaddingHorizontal } from "../../style/sharedStyles"
import { Images } from "../../constants/images-paths"
import { s, vs } from "react-native-size-matters"
import AppTextInput from "../../components/Inputs/AppTextInput"
import AppButton from "../../components/buttons/AppButton"
import { AppColors } from "../../style/colors"
import { useNavigation } from "@react-navigation/native"

export default function SignInScreen() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigation = useNavigation()

  return (
    <AppSaveView style={styles.container}>
      <Image source={Images.appLogo} style={styles.logo} />
      <AppTextInput placeholder="Email" onChangeText={setEmail} value={""} />
      <AppTextInput
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
        value={""}
      />
      <AppButton
        title="Login"
        onPress={() => {
          navigation.navigate("MainAppBottomsTabs")
        }}
      />
      <AppButton
        title="Sign Up"
        style={styles.registerBtn}
        textColor={AppColors.primary}
        onPress={() => {
          navigation.navigate("SignUpScreen")
        }}
      />
    </AppSaveView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: sharedPaddingHorizontal,
  },
  logo: {
    height: s(150),
    width: s(150),
    marginBottom: vs(30),
  },
  registerBtn: {
    backgroundColor: AppColors.white,
    borderColor: AppColors.primary,
    borderWidth: s(1),
    marginTop: vs(15),
  },
})
