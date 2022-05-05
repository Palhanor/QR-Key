import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Botao from "../../components/Botao";
import Texto from "../../components/Texto";
import QRCode from "react-native-qrcode-svg";

export default function GerarResultado({
  titulo,
  texto,
}: {
  titulo: string;
  texto: string;
}) {

  const [qrValue, setQRValue] = useState({titulo: titulo, texto: texto})

  useEffect(() => {
    setQRValue({titulo: titulo, texto: texto})
  }, [titulo, texto])

  return (
    <>
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
      <Texto regular style={styles.qrcodePlaceholder}>
        {titulo}
        {texto}
      </Texto>
      <View style={styles.botoes}>
        <Botao>Compartilhar</Botao>
        <Botao secondary>Baixar</Botao>
      </View>
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
  qrcodePlaceholder: {
    color: "#FFFFFF",
  },
  botoes: {
    width: "100%",
    position: "absolute",
    bottom: 64,
  },
});
