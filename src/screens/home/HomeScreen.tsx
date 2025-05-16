import { StyleSheet, Text, View } from "react-native"
import React from "react"
import HomeHeader from "../../components/headers/HomeHeader"
import ProductCard from "../../components/cards/ProductCard"
import { FlatList } from "react-native-gesture-handler"
import { products } from "../../data/products"
import { s, vs } from "react-native-size-matters"

export default function HomeScreen() {
  const renderItem = ({ item }: any) => {
    return (
      <ProductCard
        imageUrl={item.imageUrl}
        title={item.title}
        price={item.price}
        onAddToCartPress={() => {}}
      />
    )
  }
  return (
    <View>
      <HomeHeader />
      <FlatList
        numColumns={2}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: vs(20),
        }}
        contentContainerStyle={{
          paddingHorizontal: s(20),
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
