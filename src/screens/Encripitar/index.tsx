import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import Botao from "../../components/Botao";
import Texto from "../../components/Texto";
import globalStyle from "../../styles";
import { propsStack } from "../../interfaces/screens";

const CryptoJS = require("crypto-js");

export default function Encriptar() {
  const [titulo, setTitulo] = useState("");
  const [chave, setChave] = useState("");
  const [texto, setTexto] = useState("");

  const navigation = useNavigation<propsStack>();

  function generateQRKey() {
    if (titulo !== "" && chave !== "" && texto !== "") {
      navigation.navigate("QRKey", {
        titulo: titulo,
        mensagem: CryptoJS.AES.encrypt(texto, chave).toString(),
      });
      setTitulo("");
      setChave("");
      setTexto("");
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyle.spacedContainer}>
        <Header>Gerar</Header>
        <View style={styles.form}>
          <Texto regular style={globalStyle.labelText}>
            Titulo
          </Texto>
          <TextInput
            style={globalStyle.inputField}
            onChangeText={setTitulo}
            value={titulo}
          ></TextInput>
          <Texto regular style={globalStyle.labelText}>
            Chave
          </Texto>
          <TextInput
            style={globalStyle.inputField}
            onChangeText={setChave}
            value={chave}
          ></TextInput>
          <Texto regular style={globalStyle.labelText}>
            Texto
          </Texto>
          <TextInput
            multiline
            numberOfLines={8}
            style={[globalStyle.inputField, styles.textarea]}
            onChangeText={setTexto}
            value={texto}
          ></TextInput>
        </View>
        <View style={globalStyle.bottomButtons}>
          <Botao onPress={generateQRKey}>Gerar</Botao>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  form: {
    width: "100%",
  },
  textarea: {
    paddingTop: 16,
    textAlignVertical: "top",
    maxHeight: 180,
  },
});
