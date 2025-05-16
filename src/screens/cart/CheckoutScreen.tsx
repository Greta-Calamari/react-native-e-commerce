import { StyleSheet, View } from "react-native"
import AppSaveView from "../../components/views/AppSaveView"
import AppTextInput from "../../components/Inputs/AppTextInput"
import { commonStyle, sharedPaddingHorizontal } from "../../style/sharedStyles"
import AppButton from "../../components/buttons/AppButton"
import { s, vs } from "react-native-size-matters"
import { AppColors } from "../../style/colors"
import { IS_ANDROID, IS_IOS } from "../../constants/constants"

const CheckoutScreen = () => {
  return (
    <AppSaveView>
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <View style={styles.inputsContainer}>
          <AppTextInput placeholder="Full Name" />
          <AppTextInput placeholder="Phone Number" />
          <AppTextInput placeholder="Detailed Address" />
        </View>
      </View>

      <View style={styles.bottomButtonContainer}>
        <AppButton title="Confirm" />
      </View>
    </AppSaveView>
  )
}

export default CheckoutScreen

const styles = StyleSheet.create({
  inputsContainer: {
    ...commonStyle.shadow,
    padding: s(8),
    borderRadius: s(8),
    backgroundColor: AppColors.white,
    marginTop: IS_IOS ? vs(15) : undefined,
    paddingTop: vs(15),
  },
  bottomButtonContainer: {
    paddingHorizontal: sharedPaddingHorizontal,
    position: "absolute",
    width: "100%",
    bottom: IS_ANDROID ? vs(15) : 0,
    borderTopWidth: 1,
    borderColor: AppColors.lightGray,
    paddingTop: vs(10),
  },
})
