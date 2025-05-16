import { StackNavigationProp } from "@react-navigation/stack"

export type MainAppStackParamList = {
  AuthStack: undefined
  MainAppBottomTabs: undefined
  CheckoutScreen: undefined
}

export type MainAppStackNavigationProp =
  StackNavigationProp<MainAppStackParamList>
