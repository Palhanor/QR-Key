import React from "react";
import Inicio from "./src/screens/Inicio";
import { StatusBar, StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Inicio></Inicio>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F175B",
    alignItems: "center",
    padding: 16,
  },
});
