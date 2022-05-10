import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import QRCode from "react-native-qrcode-svg";

import Botao from "../../components/Botao";
import Texto from "../../components/Texto";

export default function QRKeyScreen() {
  const params = useRoute()

  const [qrValue, setQRValue] = useState({titulo: params?.params?.titulo, texto: params?.params?.texto})

  useEffect(() => {
    setQRValue({titulo: params?.params?.titulo, texto: params?.params?.texto})
  }, [params.params])

  return (
    <View style={styles.container}>
      <Texto title style={styles.titulo}>
        Gerar
      </Texto>
      <QRCode 
        value={JSON.stringify(qrValue)}
        size={250}
        color="white"
        backgroundColor="#1D2445"
        logo={require('../../../assets/QRKey.png')}
        logoBackgroundColor="transparent"
      />
      <View style={styles.botoes}>
        <Botao>Compartilhar</Botao>
        <Botao secondary>Baixar</Botao>
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
  qrcodePlaceholder: {
    color: "#FFFFFF",
  },
  botoes: {
    width: "100%",
    position: "absolute",
    bottom: 64,
  },
});
