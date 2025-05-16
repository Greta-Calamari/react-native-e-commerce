import React from "react"
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
} from "react-native"
import { s, vs } from "react-native-size-matters"
import { AppColors } from "../../style/colors"

interface Props {
  value: string
  onChangeText: (text: string) => void
  placeholder?: string
  secureTextEntry?: boolean
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad"
  style?: StyleProp<TextStyle>
}

export default function AppTextInput({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  style,
}: Props) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={[styles.input, style]}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: vs(40),
    width: "100%",
    marginBottom: vs(10),
    borderRadius: s(25),
    borderWidth: s(1),
    borderColor: AppColors.borderColor,
    paddingHorizontal: s(15),
    fontSize: s(16),
    backgroundColor: AppColors.white,
  },
})
