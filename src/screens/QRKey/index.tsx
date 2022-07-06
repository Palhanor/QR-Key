import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";
import QRCode from "react-native-qrcode-svg";
import Header from "../../components/Header";
import Botao from "../../components/Botao";
import globalStyle from "../../styles";

import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
// import * as MediaLibrary from 'expo-media-library';

export default function QRKey() {

  const { params } = useRoute();

  const [qrValue, setQRValue] = useState({t: "", m: ""});

  let svg: any;

  useEffect(() => {
    setQRValue({t: params?.titulo, m: params?.mensagem})
  }, []);

  function shareQRKey() {
    // console.log('Não consigo compartilhar');
    console.log(svg)
    svg?.toDataURL(async (dataURL: string) => {
      console.log(dataURL)
      try {
        const uri = `data:image/png;base64,${dataURL}`;
        const filename = 'qrkey.png'
        const filepath = FileSystem.documentDirectory + "/" + filename;
        await FileSystem.writeAsStringAsync(filepath, uri, { encoding: 'base64'});
        await Sharing.shareAsync(filepath, { mimeType: 'image/png' })        
      } catch (error) {
        console.log(error)
      }
    });
  }

  return (
    <View style={globalStyle.spacedContainer}>
      <Header>Gerar</Header>
      <QRCode 
        value={JSON.stringify(qrValue)}
        getRef={c => {svg = c}}
        size={250}
        color="white"
        backgroundColor="#1D2445"
        logo={require('../../../assets/favicon.png')}
        logoBackgroundColor="transparent"
      />
      <View style={globalStyle.bottomButtons}>
        <Botao onPress={shareQRKey}>Compartilhar</Botao>
      </View>
    </View>
  );
}