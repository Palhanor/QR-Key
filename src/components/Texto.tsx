import React from "react";
import AppLoading from "expo-app-loading";
import { Text } from "react-native";
import { useFonts, Quantico_700Bold } from "@expo-google-fonts/quantico";
import { JosefinSans_400Regular } from "@expo-google-fonts/josefin-sans";

export default function Texto({
  children,
  style,
  regular,
  title,
}: {
  children: any;
  style: any;
  regular?: boolean;
  title?: boolean;
}) {
  let [fontsLoaded] = useFonts({
    Titulo: Quantico_700Bold,
    Texto: JosefinSans_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  let fontType;
  if (title) {
    fontType = { fontFamily: "Titulo" };
  } else if (regular) {
    fontType = { fontFamily: "Texto" };
  }

  return <Text style={[fontType, style]}>{children}</Text>;
}
