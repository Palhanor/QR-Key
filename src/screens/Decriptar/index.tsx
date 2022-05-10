import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useRoute } from "@react-navigation/native";

import Texto from "../../components/Texto";
import Botao from "../../components/Botao";

const CryptoJS = require("crypto-js");

export default function DecriptarScreen() {
  const params = useRoute();
  const mensagem = params?.params?.data;
  const titulo = JSON.parse(mensagem)?.titulo;
  const textoCriptografado = JSON.parse(mensagem)?.texto;

  const [decriptografado, setDecriptografado] = useState(false);
  const [chave, setChave] = useState("");
  const [textoDescriptografado, setTextoDescriptografado] = useState("");


  return (
    <View style={styles.container}>
      <Texto title style={styles.titulo}>
        Visualizar
      </Texto>
      <View style={styles.dados}>
        <Texto regular style={styles.label}>
          Titulo
        </Texto>
        <Texto regular style={styles.mensagem}>
          {titulo}
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
            <Botao
              onPress={() => {
                setTextoDescriptografado(
                  CryptoJS.AES.decrypt(textoCriptografado, chave).toString(
                    CryptoJS.enc.Utf8
                  )
                );
                setDecriptografado(true);
              }}
            >
              Descriptografar
            </Botao>
          </>
        ) : (
          <>
            <Texto regular style={styles.label}>
              Texto
            </Texto>
            <Texto regular style={styles.mensagem}>
              { textoDescriptografado }
            </Texto>
          </>
        )}
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
  dados: {
    width: "100%",
  },
  label: {
    color: "#FFFFFF",
    fontSize: 22,
    marginBottom: 16,
  },
  mensagem: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 24,
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
});
