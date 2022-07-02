import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import Botao from "../../components/Botao";
import logo from "../../../assets/QRKey.png";
import globalStyle from "../../styles";
import { propsStack } from "../../interfaces/screens";

export default function Inicio() {
  const navigation = useNavigation<propsStack>();

  function goToEncriptar() {
    navigation.navigate("Encriptar");
  }

  function goToEscanear() {
    navigation.navigate("Scan");
  }

  return (
    <View style={globalStyle.spacedContainer}>
      <Header>QR Key</Header>
      <Image style={styles.imagem} source={logo} />
      <View style={globalStyle.bottomButtons}>
        <Botao onPress={goToEncriptar}>Encriptar</Botao>
        <Botao secondary onPress={goToEscanear}>
          Decriptar
        </Botao>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imagem: {
    marginTop: 32,
    marginBottom: 46,
    height: 220,
    width: 220,
  },
});
