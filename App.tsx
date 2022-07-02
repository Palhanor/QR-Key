import React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Inicio from "./src/screens/Inicio";
import Encriptar from "./src/screens/Encripitar";
import QRKey from "./src/screens/QRKey";
import Scan from "./src/screens/Scan";
import Decriptar from "./src/screens/Decriptar";
import { propsNavigationStack } from "./src/interfaces/screens";

const Stack = createNativeStackNavigator<propsNavigationStack>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#1D2445"} />
      <Stack.Navigator
        initialRouteName="QR Key"
        screenOptions={{ headerShown: false, headerTransparent: true }}
      >
        <Stack.Screen name="QR Key" component={Inicio} />
        <Stack.Screen name="Encriptar" component={Encriptar} />
        <Stack.Screen name="QRKey" component={QRKey} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="Decriptar" component={Decriptar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
