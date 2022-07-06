import React, { ReactEventHandler, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
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
  const [mensagem, setMensagem] = useState("");
  const [messageSize, setMessageSize] = useState(0);

  const navigation = useNavigation<propsStack>();

  function generateQRKey() {
    if (titulo !== "" && chave !== "" && mensagem !== "") {
      navigation.navigate("QRKey", {
        titulo: titulo,
        mensagem: CryptoJS.AES.encrypt(mensagem, chave).toString(),
      });
      setTitulo("");
      setChave("");
      setMensagem("");
    }
  }

  function escreveMensagem(text: string) {
    if (messageSize <= 280) {
      setMensagem(text.substring(0, 280));
      setMessageSize(text.substring(0, 280).length);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.avoidKeyboard}
      keyboardVerticalOffset={-500}
      behavior="padding"
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView style={styles.container}>
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
            <View style={styles.inline}>
              <Texto regular style={globalStyle.labelText}>
                Texto
              </Texto>
              <Texto regular style={styles.contador}>
                {messageSize}/280
              </Texto>
            </View>
            <TextInput
              multiline
              numberOfLines={8}
              style={[globalStyle.inputField, styles.textarea]}
              onChangeText={escreveMensagem}
              value={mensagem}
            ></TextInput>
          </View>
          <View style={globalStyle.bottomButtons}>
            <Botao onPress={generateQRKey}>Gerar</Botao>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  avoidKeyboard: {
    flex: 1,
    backgroundColor: "#1D2445",
  },
  container: {
    flex: 1,
    padding: 16,
  },
  form: {
    width: "100%",
  },
  textarea: {
    paddingTop: 16,
    textAlignVertical: "top",
    maxHeight: 180,
  },
  inline: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contador: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 16,
  },
});
