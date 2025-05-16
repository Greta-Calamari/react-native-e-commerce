import { useNavigation } from "@react-navigation/native"
import React from "react"
import { StyleSheet, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import AppButton from "../../components/buttons/AppButton"
import CartItem from "../../components/cart/CartItem"
import HomeHeader from "../../components/headers/HomeHeader"
import { products } from "../../data/products"
import { sharedPaddingHorizontal } from "../../style/sharedStyles"
import { CardProps } from "../../types"
import TotalsView from "./TotalsView"
import { MainAppStackNavigationProp } from "../../types/navigation"

export default function CartScreen() {
  const navigation = useNavigation<MainAppStackNavigationProp>()
  const renderItem = ({ item }: { item: CardProps }) => {
    return <CartItem {...item} />
  }
  return (
    <View>
      <HomeHeader />
      <View style={{ paddingHorizontal: sharedPaddingHorizontal, flex: 1 }}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />

        <TotalsView itemsPrice={5000} orderTotal={5025} />
        <AppButton
          title="Checkout"
          onPress={() => navigation.navigate("CheckoutScreen")}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})
