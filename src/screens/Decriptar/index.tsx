import React, { useEffect, useState } from "react";
import Texto from "../../components/Texto";
import { StyleSheet, TextInput, View } from "react-native";
import Botao from "../../components/Botao";

const CryptoJS = require("crypto-js");

export default function Decriptar({ tituloGlobal, decryptTexto }: { tituloGlobal: string, decryptTexto: string }) {
  const [decriptografado, setDecriptografado] = useState(false);
  const [chave, setChave] = useState("");
  const [mensagemFinal, setMensagemFinal] = useState("")

  return (
    <>
      <Texto title style={styles.titulo}>
        Visualizar
      </Texto>
      <View style={styles.dados}>
        <Texto regular style={styles.label}>
          Titulo
        </Texto>
        <Texto regular style={styles.mensagem}>
          { tituloGlobal }
        </Texto>
        {!decriptografado ? (
          <>
            <Texto regular style={styles.label}>
              Chave
            </Texto>
            <TextInput
              style={styles.input}
              onChangeText={setChave}
              value={chave}
            ></TextInput>
          </>
        ) : (
          <>
            <Texto regular style={styles.label}>
              Texto
            </Texto>
            <Texto regular style={styles.mensagem}>
              { mensagemFinal }
            </Texto>
          </>
        )}
      </View>
      <Botao
        onPress={() => {
          setMensagemFinal(CryptoJS.AES.decrypt(decryptTexto, chave).toString(CryptoJS.enc.Utf8))
          setDecriptografado(true)
        }}
      >
        Descriptografar
      </Botao>
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
  dados: {
    width: "100%",
  },
  label: {
    color: "#FFFFFF",
    fontSize: 18,
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
  mensagem: {
    color: "#FFFFFF",
  },
});
