import { AntDesign } from "@expo/vector-icons"
import React from "react"
import { Image, Pressable, StyleSheet, View } from "react-native"
import { s, vs } from "react-native-size-matters"
import { AppColors } from "../../style/colors"
import { AppFonts } from "../../style/fonts"
import AppText from "../text/AppText"
import { FontAwesome } from "@expo/vector-icons"

const tempItem = {
  id: 1,
  price: 1199,
  title: "iPhone 16 Pro Max",
  imageURL:
    "https://2b.com.eg/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/m/a/ma658.jpg",
}

export default function CartItem() {
  return (
    <View>
      {/* Image Container */}

      <View style={styles.imageContainer}>
        <Image source={{ uri: tempItem.imageURL }} style={styles.image} />
      </View>

      {/* Details Container */}
      <View style={styles.detailsContainer}>
        <AppText style={styles.textTitle}>{tempItem.title}</AppText>
        <AppText style={styles.textPrice}>{tempItem.price}</AppText>

        <View style={styles.qtyContainer}>
          <Pressable style={styles.iconButton}>
            <FontAwesome name="plus" size={s(10)} color={AppColors.primary} />
          </Pressable>
          <AppText style={styles.textQty}>1</AppText>
          <Pressable style={styles.iconButton}>
            <FontAwesome name="minus" size={s(10)} color={AppColors.primary} />
          </Pressable>
        </View>
      </View>

      {/* Delete Button Container */}
      <View style={styles.deleteContainer}>
        <Pressable style={styles.deleteButton}>
          <AntDesign name="delete" size={s(14)} color={AppColors.redColor} />
          <AppText style={styles.deleteText}>Delete</AppText>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    paddingBottom: vs(4),
    borderColor: AppColors.blueGray,
  },
  imageContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    flex: 3.5,
  },
  deleteContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingEnd: s(12),
  },
  image: {
    height: s(80),
    width: s(80),
    borderRadius: s(5),
  },
  textTitle: {
    fontSize: s(14),
    color: AppColors.primary,
    fontFamily: AppFonts.NunitoMedium,
    marginTop: vs(5),
  },
  textPrice: {
    fontSize: s(16),
    color: AppColors.primary,
    fontFamily: AppFonts.NunitoBold,
    marginVertical: vs(5),
  },
  deleteText: {
    marginLeft: 7,
    fontFamily: AppFonts.NunitoMedium,
    color: AppColors.medGray,
    fontSize: s(12),
    marginTop: 3,
  },
  deleteButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  qtyContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: s(5),
    borderRadius: s(30),
    borderWidth: s(1),
    borderColor: AppColors.blueGray,
    width: s(80),
    paddingVertical: vs(5),
  },
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.lightGray,
    padding: s(5),
    height: s(20),
    width: s(20),
    borderRadius: s(10),
  },
  textQty: {
    flex: 1,
    textAlign: "center",
    color: AppColors.primary,
  },
})
