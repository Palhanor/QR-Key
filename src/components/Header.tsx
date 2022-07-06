import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import AppLoading from "expo-app-loading";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Quantico_700Bold } from "@expo-google-fonts/quantico";
import { propsStack } from "../interfaces/screens";

export default function Header({ children }: { children: string }) {
  const navigation = useNavigation<propsStack>();
  const marginLeft = children !== "QR Key" ? -68 : 0;

  let [fontsLoaded] = useFonts({
    Title: Quantico_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  function retornar() {
    if (children !== "Exibir") {
      navigation.goBack();
    } else {
      navigation.navigate("Home");
    }
  }

  return (
    <View style={styles().header}>
      {children !== "QR Key" && (
        <TouchableOpacity style={styles().return} onPress={retornar}>
          <AntDesign name="left" size={34} color="white" />
        </TouchableOpacity>
      )}
      <View style={styles().titleContainer}>
        <Text style={styles(marginLeft).title}>{children}</Text>
      </View>
    </View>
  );
}

const styles = (margem: number = -68) =>
  StyleSheet.create({
    header: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      marginBottom: 26,
    },
    titleContainer: {
      width: "100%",
      textAlign: "center",
    },
    title: {
      color: "#FFFFFF",
      fontSize: 36,
      fontFamily: "Title",
      textAlign: "center",
      marginLeft: margem,
    },
    return: {
      marginTop: 6,
    },
  });
