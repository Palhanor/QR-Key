import React, { useState } from "react";
import { StatusBar, StyleSheet, View, Text } from "react-native";
import Inicio from "./src/screens/Inicio";
// import GerarDados from "./src/screens/GerarDados";
// import GerarResultado from "./src/screens/GerarResultado";

export default function App() {
  const [mensagem, setMensagem] = useState({ titulo: "", texto: "" });

  return (
    <View style={styles.container}>
      <StatusBar />
      <Inicio></Inicio>
      {/* <GerarDados setMensagem={setMensagem}></GerarDados> */}
      {/* <GerarResultado {...mensagem} ></GerarResultado> */}
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
});
