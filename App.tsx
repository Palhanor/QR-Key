import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Encrypt from "./src/screens/Encrypt";
import Scan from "./src/screens/Scan";
import QRKey from "./src/screens/QRKey";
import Decrypt from "./src/screens/Decrypt";
import { RootStackProps } from "./src/interfaces/screens";

const Stack = createNativeStackNavigator<RootStackProps>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#1D2445"} />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Encrypt" component={Encrypt} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="QRKey" component={QRKey} />
        <Stack.Screen name="Decrypt" component={Decrypt} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
