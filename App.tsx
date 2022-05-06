import React, { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Inicio from "./src/screens/Inicio";
import Mensagem from "./src/screens/Mensagem";
import QRKey from "./src/screens/QRKey";

export default function App() {
  const [mensagem, setMensagem] = useState({ titulo: "", texto: "" });

  return (
    <View style={styles.container}>
      <StatusBar />
      <Inicio></Inicio>
      {/* <Mensagem setMensagem={setMensagem}></Mensagem> */}
      {/* <QRKey {...mensagem} ></QRKey> */}
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
