import React, { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Inicio from "./src/screens/Inicio";
import Mensagem from "./src/screens/Mensagem";
import QRKey from "./src/screens/QRKey";
import Scan from "./src/screens/Scan";

export default function App() {
  const [encrypt, setEncrypt] = useState({ titulo: "", texto: "" });
  const [decrypt, setDecrypt] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar />
      {/* <Inicio /> */}
      {/* <Mensagem setEncrypt={setEncrypt}></Mensagem> */}
      {/* <QRKey {...encrypt} ></QRKey> */}
      <Scan/>
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
