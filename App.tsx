import React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import InicioScreen from "./src/screens/Inicio";
import EncriptarScreen from "./src/screens/Encripitar";
import QRKeyScreen from "./src/screens/QRKey";
import ScanScreen from "./src/screens/Scan";
import DecriptarScreen from './src/screens/Decriptar'

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
        <StatusBar />
        <Stack.Navigator initialRouteName="Inicio" screenOptions={{headerShown: false}}>
          <Stack.Screen name='Inicio' component={InicioScreen}/>
          <Stack.Screen name='Encriptar' component={EncriptarScreen}/>
          <Stack.Screen name='QRKey' component={QRKeyScreen}/>
          <Stack.Screen name='Scan' component={ScanScreen}/>
          <Stack.Screen name='Decriptar' component={DecriptarScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}