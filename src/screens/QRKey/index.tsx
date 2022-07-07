import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";
import QRCode from "react-native-qrcode-svg";
import globalStyle from "../../styles";
import Header from "../../components/Header";
import StyledButton from "../../components/StyledButton";
import { QRKeyProps } from "../../interfaces/screens";
// import * as Sharing from 'expo-sharing';
// import * as FileSystem from 'expo-file-system';
// import * as MediaLibrary from 'expo-media-library';

export default function QRKey() {
  const { params } = useRoute<QRKeyProps>();

  const [qrValue, setQRValue] = useState<{ t: string; m: string }>({
    t: "",
    m: "",
  });

  // let svg: any;

  useEffect(() => {
    setQRValue({ t: params?.title, m: params?.message });
  }, []);

  function shareQRKey() {
    console.log("Não consigo compartilhar");
    // console.log(svg)
    // svg?.toDataURL(async (dataURL: string) => {
    //   console.log(dataURL)
    //   try {
    //     const uri = `data:image/png;base64,${dataURL}`;
    //     const filename = 'qrkey.png'
    //     const filepath = FileSystem.documentDirectory + "/" + filename;
    //     await FileSystem.writeAsStringAsync(filepath, uri, { encoding: 'base64'});
    //     await Sharing.shareAsync(filepath, { mimeType: 'image/png' })
    //   } catch (error) {
    //     console.log(error)
    //   }
    // });
  }

  return (
    <View style={globalStyle.spacedContainer}>
      <Header>Gerar</Header>
      <QRCode
        value={JSON.stringify(qrValue)}
        size={250}
        color="white"
        backgroundColor="#1D2445"
        logo={require("../../../assets/favicon.png")}
        logoBackgroundColor="transparent"
        // getRef={c => {svg = c}}
      />
      <View style={globalStyle.bottomButtons}>
        <StyledButton onPress={shareQRKey}>Compartilhar</StyledButton>
      </View>
    </View>
  );
}
