// Resolver o problema de erro com a importação da imagem
// Criar as novas rotas

import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Botao from "../../components/Botao";
import Texto from "../../components/Texto";
import testeImg from "../../../assets/teste.png";

export default function App() {
  return (
    <>
      <Texto title style={styles.titulo}>QR Key</Texto>
      <Image style={styles.imagem} source={testeImg} />
      <View style={styles.botoes}>
        <Botao>Gerar</Botao>
        <Botao secondary>Visualizar</Botao>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  titulo: {
    color: "#FFFFFF",
    fontSize: 36,
    marginVertical: 24,
    fontFamily: "Titulo",
  },
  imagem: {
    marginTop: 32,
    marginBottom: 46,
  },
  botoes: {
    width: "100%",
    position: "absolute",
    bottom: 64,
  },
});
