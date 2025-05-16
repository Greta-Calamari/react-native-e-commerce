import { Image, StyleSheet, Text, View } from "react-native"
import React, { useState } from "react"
import AppSaveView from "../../components/views/AppSaveView"
import { Images } from "../../constants/images-paths"
import AppTextInput from "../../components/Inputs/AppTextInput"
import AppButton from "../../components/buttons/AppButton"
import { AppColors } from "../../style/colors"
import { s, vs } from "react-native-size-matters"
import { sharedPaddingHorizontal } from "../../style/sharedStyles"
import { useNavigation } from "@react-navigation/native"

export default function SignUpScreen() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigation = useNavigation()
  return (
    <AppSaveView style={styles.container}>
      <Image source={Images.appLogo} style={styles.logo} />
      <AppTextInput
        placeholder="User Name"
        onChangeText={setUsername}
        value={""}
      />

      <AppTextInput placeholder="Email" onChangeText={setEmail} value={""} />
      <AppTextInput
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
        value={""}
      />
      <AppButton title="Create New Account" onPress={() => {}} />
      <AppButton
        title="Go To Login"
        onPress={() => {
          navigation.navigate("SignInScreen")
        }}
        style={styles.logInBtn}
        textColor={AppColors.primary}
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
  logInBtn: {
    backgroundColor: AppColors.white,
    borderColor: AppColors.primary,
    borderWidth: s(1),
    marginTop: vs(15),
  },
})
