import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Botao from "../../components/Botao";
import Texto from "../../components/Texto";
import testeImg from "../../../assets/QRKey.png";

export default function InicioScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Texto title style={styles.titulo}>
        QR Key
      </Texto>
      <Image style={styles.imagem} source={testeImg} />
      <View style={styles.botoes}>
        <Botao onPress={() => navigation.navigate("Encriptar")}>Gerar</Botao>
        <Botao secondary onPress={() => navigation.navigate("Scan")}>
          Visualizar
        </Botao>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D2445",
    alignItems: "center",
    padding: 16,
  },
  titulo: {
    color: "#FFFFFF",
    fontSize: 36,
    marginVertical: 12,
    fontFamily: "Titulo",
  },
  imagem: {
    marginTop: 32,
    marginBottom: 46,
    height: 220,
    width: 220,
  },
  botoes: {
    width: "100%",
    position: "absolute",
    bottom: 64,
  },
});
