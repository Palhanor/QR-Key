import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import Header from "../../components/Header";
import Texto from "../../components/Texto";
import Botao from "../../components/Botao";
import globalStyle from "../../styles";

const CryptoJS = require("crypto-js");

export default function Decriptar() {
  const { params } = useRoute();
  const mensagem = params?.data;
  const titulo = JSON.parse(mensagem)?.t;
  const textoCriptografado = JSON.parse(mensagem)?.m;

  const [decriptografado, setDecriptografado] = useState(false);
  const [chave, setChave] = useState("");
  const [textoDescriptografado, setTextoDescriptografado] = useState("");

  function descriptografar() {
    try {
      const mensagemDescriptografada = CryptoJS.AES
        .decrypt(textoCriptografado, chave)
        .toString(CryptoJS.enc.Utf8)

      if (mensagemDescriptografada !== "") {
        setTextoDescriptografado(
          CryptoJS.AES.decrypt(textoCriptografado, chave).toString(
            CryptoJS.enc.Utf8
          )
        );
        setDecriptografado(true);
      } else {
        Alert.alert("Senha inválida!", "Tente novamente...")
      }
    } catch (err) {
      Alert.alert("Senha inválida!", "Tente novamente...")
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyle.spacelessContainer}>
        <Header>Exibir</Header>
        <View style={styles.dados}>
          <Texto regular style={globalStyle.labelText}>
            Titulo
          </Texto>
          <Texto regular style={styles.mensagem}>
            {titulo}
          </Texto>
          {!decriptografado ? (
            <>
              <Texto regular style={globalStyle.labelText}>
                Chave
              </Texto>
              <TextInput
                style={globalStyle.inputField}
                onChangeText={setChave}
                value={chave}
              ></TextInput>
              <Botao onPress={descriptografar}>Decriptar</Botao>
            </>
          ) : (
            <>
              <Texto regular style={globalStyle.labelText}>
                Texto
              </Texto>
              <Texto regular style={styles.mensagem}>
                {textoDescriptografado}
              </Texto>
            </>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  dados: {
    width: "100%",
  },
  mensagem: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 24,
  },
});
