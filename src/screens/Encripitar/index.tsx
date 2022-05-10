import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Botao from "../../components/Botao";
import Texto from "../../components/Texto";

const CryptoJS = require("crypto-js");

export default function EncriptarScreen() {
  const [titulo, setTitulo] = useState("");
  const [chave, setChave] = useState("");
  const [texto, setTexto] = useState("");

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Texto title style={styles.titulo}>
        Gerar
      </Texto>
      <View style={styles.formulario}>
        <Texto regular style={styles.label}>
          Titulo
        </Texto>
        <TextInput
          style={styles.input}
          onChangeText={setTitulo}
          value={titulo}
        ></TextInput>
        <Texto regular style={styles.label}>
          Chave
        </Texto>
        <TextInput
          style={styles.input}
          onChangeText={setChave}
          value={chave}
        ></TextInput>
        <Texto regular style={styles.label}>
          Texto
        </Texto>
        <TextInput
          multiline
          numberOfLines={6}
          style={[styles.input, styles.textarea]}
          onChangeText={setTexto}
          value={texto}
        ></TextInput>
      </View>
      <View style={styles.botoes}>
        <Botao
          onPress={() => {
            navigation.navigate('QRKey', {
              titulo: titulo,
              texto: CryptoJS.AES.encrypt(texto, chave).toString(),
            })
          }}
        >
          Gerar
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
  formulario: {
    width: "100%",
  },
  label: {
    color: "#FFFFFF",
    fontSize: 22,
    marginBottom: 16,
  },
  input: {
    borderColor: "#FFFFFF",
    borderRadius: 6,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "#FFFFFF",
    marginBottom: 24,
  },
  textarea: {
    paddingTop: 16,
    textAlignVertical: "top",
  },
  botoes: {
    width: "100%",
  },
});
