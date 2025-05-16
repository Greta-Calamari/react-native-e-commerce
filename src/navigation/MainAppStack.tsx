import { createStackNavigator } from "@react-navigation/stack"
import CheckoutScreen from "../screens/cart/CheckoutScreen"
import AuthStack from "./AuthStack"
import MainAppBottomTabs from "./MainAppBottomTabs"

const Stack = createStackNavigator()

export default function MainAppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="MainAppBottomTabs" component={MainAppBottomTabs} />
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
    </Stack.Navigator>
  )
}
