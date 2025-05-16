import React from "react"
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native"
import { s, vs } from "react-native-size-matters"
import { AppColors } from "../../style/colors"
import AppText from "../text/AppText"

interface Props {
  onPress?: () => void
  title?: string
  backgroundColor?: string
  textColor?: string
  style?: ViewStyle | ViewStyle[]
  styleTitle?: TextStyle | TextStyle[] | any
  disable?: boolean
}
export default function AppButton({
  onPress,
  title,
  backgroundColor = AppColors.primary,
  textColor = AppColors.white,
  style,
  styleTitle,
  disable,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.button,
        { backgroundColor: disable ? AppColors.disableGray : backgroundColor },
        style,
      ]}
    >
      <AppText
        variant="bold"
        style={[styles.textTitle, { color: textColor }, styleTitle]}
      >
        {title}
      </AppText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: vs(40),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: s(25),
  },
  textTitle: {
    fontSize: s(16),
  },
})
