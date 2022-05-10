import React, { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Inicio from "./src/screens/Inicio";
import Encriptar from "./src/screens/Encripitar";
import QRKey from "./src/screens/QRKey";
import Scan from "./src/screens/Scan";
import Decriptar from './src/screens/Decriptar'

export default function App() {
  const [tituloGlobal, setTituloGlobal] = useState("");
  const [encryptTexto, setEncryptTexto] = useState("")
  const [decryptTexto, setDecryptTexto] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar />
      <Inicio />
      {/* <Encriptar setEncryptTexto={setEncryptTexto} /> */}
      {/* <QRKey tituloGlobal={tituloGlobal} encryptTexto={encryptTexto} /> */}
      {/* <Scan setTituloGlobal={setTituloGlobal} setDecryptTexto={setDecryptTexto} /> */}
      {/* <Decriptar tituloGlobal={tituloGlobal} decryptTexto={decryptTexto} /> */}
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
