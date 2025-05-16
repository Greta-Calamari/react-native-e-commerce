import React from "react"
import {
  StyleSheet,
  Text,
  TextStyle,
  TextProps, // <-- aggiungi questo
} from "react-native"
import { s } from "react-native-size-matters"
import { AppColors } from "../../style/colors"
import { AppFonts } from "../../style/fonts"

interface Props extends TextProps {
  children: React.ReactNode
  style?: TextStyle | TextStyle[]
  variant?: "bold" | "medium"
}

export default function AppText({
  children,
  style,
  variant = "medium",
  ...rest
}: Props) {
  return (
    <Text {...rest} style={[styles[variant], style]}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  bold: {
    fontFamily: AppFonts.NunitoBold,
    fontSize: s(18),
    fontWeight: "bold",
    color: AppColors.black,
  },
  medium: {
    fontSize: s(16),
    fontWeight: "500",
    color: AppColors.black,
    fontFamily: AppFonts.NunitoMedium,
  },
})
