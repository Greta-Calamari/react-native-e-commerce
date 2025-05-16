import { StyleSheet, Text, View } from "react-native"
import React from "react"
import AppSaveView from "../../components/views/AppSaveView"
import HomeHeader from "../../components/headers/HomeHeader"
import ProfileSelectionButton from "../../components/buttons/ProfileSelectionButton"

const ProfileScreen = () => {
  return (
    <AppSaveView>
      <HomeHeader />
      <View>
        <ProfileSelectionButton title="My Orders" />
      </View>
    </AppSaveView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})
