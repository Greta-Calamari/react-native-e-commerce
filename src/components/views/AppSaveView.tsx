import React from "react"
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native"
import { IS_ANDROID } from "../../constants/constants"
import { AppColors } from "../../style/colors"
interface Props {
  style?: ViewStyle | ViewStyle[]
  children?: React.ReactNode
}
export default function AppSaveView({ children, style }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AppColors.white,
    paddingTop: IS_ANDROID ? StatusBar.currentHeight || 0 : 0,
  },
  container: {
    flex: 1,
  },
})
