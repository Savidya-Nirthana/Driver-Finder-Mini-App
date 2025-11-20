import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./Screens/auth/LoginScreen";
import SignupScreen from "./Screens/auth/SignupScreen";
import DriversScreen from "./Screens/drivers/DriverScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignupScreen} />
        <Stack.Screen name="driver" component={DriversScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <DriversScreen />
    // </NavigationContainer>
  );
}
