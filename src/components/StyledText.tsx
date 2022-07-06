import React from "react";
import { Text } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  JosefinSans_400Regular,
} from "@expo-google-fonts/josefin-sans";

export default function StyledText({
  children,
  style,
}: {
  children: any;
  style?: any;
}) {
  let [fontsLoaded] = useFonts({
    JosefinSansRegular: JosefinSans_400Regular,
  });

  if (!fontsLoaded) return <AppLoading />;

  const fontConfigs = {
    fontFamily: "JosefinSansRegular",
    fontWeight: "normal",
  };

  return <Text style={[style, fontConfigs]}>{children}</Text>;
}
