import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";
import QRCode from "react-native-qrcode-svg";
import Header from "../../components/Header";
import Botao from "../../components/Botao";
import globalStyle from "../../styles";

export default function QRKey() {
  const { params } = useRoute()

  const [qrValue, setQRValue] = useState({t: "", m: ""})

  useEffect(() => {
    setQRValue({t: params?.titulo, m: params?.mensagem})
  }, [])

  return (
    <View style={globalStyle.spacedContainer}>
      <Header>Gerar</Header>
      <QRCode 
        value={JSON.stringify(qrValue)}
        size={250}
        color="white"
        backgroundColor="#1D2445"
        logo={require('../../../assets/QRKey.png')}
        logoBackgroundColor="transparent"
      />
      <View style={globalStyle.bottomButtons}>
        <Botao>Baixar</Botao>
      </View>
    </View>
  );
}