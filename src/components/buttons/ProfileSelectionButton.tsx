import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native"
import React from "react"
import { AppColors } from "../../style/colors"
import { s, vs } from "react-native-size-matters"
import { AppFonts } from "../../style/fonts"
import { MaterialIcons } from "@expo/vector-icons"

interface Props {
  onPress?: () => void
  title?: string
}
export default function ProfileSelectionButton({ onPress, title }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.textTitle}>{title}</Text>
      </View>
      <View>
        <MaterialIcons
          name="arrow-forward-ios"
          size={s(14)}
          color={AppColors.primary}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottomColor: AppColors.lightGray,
    paddingBottom: vs(10),
    flexDirection: "row",
    borderBottomWidth: 1,
  },
  textTitle: {
    fontSize: s(16),
    fontFamily: AppFonts.NunitoMedium,
    color: AppColors.primary,
  },
  textContainer: {
    flex: 5,
    justifyContent: "center",
    alignItems: "flex-start",
    marginHorizontal: s(8),
  },
})
