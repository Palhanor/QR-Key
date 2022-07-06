import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Texto from "./Texto";
import { AntDesign } from '@expo/vector-icons';
import { propsStack } from "../interfaces/screens";
import { useFonts, Quantico_700Bold } from "@expo-google-fonts/quantico";

export default function Header({ children }: { children: string }) {
  const navigation = useNavigation<propsStack>();
  const marginLeft = children !== "QR Key" ? -68 : 0;

  function retornar() {
    if (children !== "Exibir") {
      navigation.goBack();
    } else {
      navigation.navigate("QR Key");
    }
  }

  return (
    <View style={styles().header}>
      {children !== "QR Key" && (
        <TouchableOpacity
        style={styles().return}
          onPress={retornar}
        >
          <AntDesign name="left" size={34} color="white" />
        </TouchableOpacity>
      )}
      <View style={styles().tituloContainer}>
        <Texto title style={styles(marginLeft).titulo}>
          {children}
        </Texto>
      </View>
    </View>
  );
}

const styles = (margem: number | undefined = -68) => StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 26,
  },
  tituloContainer: {
    width: "100%",
    textAlign: "center",
  },
  titulo: {
    color: "#FFFFFF",
    fontSize: 36,
    fontFamily: "Titulo",
    textAlign: "center",
    marginLeft: margem,
  },
  return: {
    marginTop: 6,
  },
});
