import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Header from "../../components/Header";
import Texto from "../../components/Texto";
import Botao from "../../components/Botao";
import { useNavigation } from "@react-navigation/native";
import globalStyle from "../../styles";
import { propsStack } from "../../interfaces/screens";

export default function Scan() {
  const [permissao, setPermissao] = useState<null | boolean>(null);
  const [escaneado, setEscaneado] = useState(false);

  const navigation = useNavigation<propsStack>();

  useEffect(() => {
    pedirPermissao();
    setEscaneado(false);
  }, []);


  function pedirPermissao() {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setPermissao(status === "granted");
    })();
  }

  function escanear({ data }: { data: string }) {
    if (data.substring(0, 6) == '{"t":"') {
      setEscaneado(true);
      navigation.navigate("Decriptar", { data: data });
    } else {
      setEscaneado(true);
      Alert.alert("Erro ao escanear", "O Código escaneado não se trata de um QR Key", 
        [{text: "Voltar", onPress: () => navigation.navigate("QR Key")}]);
    }
  }

  function aguardarPermissao() {
    return (
      <View>
        <Texto>Aguardando a permissão de uso da câmera</Texto>
      </View>
    );
  }

  function semPermissao() {
    return (
      <View>
        <Texto>Sem acesso à câmera</Texto>
        <Botao onPress={() => pedirPermissao()}>
          Permitir o uso da câmera
        </Botao>
      </View>
    );
  }

  if (permissao === null) aguardarPermissao;
  if (permissao === false) semPermissao;

  return (
    <View style={globalStyle.spacelessContainer}>
      <Header>Visualizar</Header>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={escaneado ? undefined : escanear}
          style={styles.barcode}
        />
      </View>
      {!escaneado && (
        <Texto regular style={styles.status}>
          Visualizando...
        </Texto>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  status: {
    color: "#FFFFFF",
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 350,
    width: 320,
    overflow: "hidden",
    borderRadius: 30,
    borderColor: "#FFFFFF",
    borderWidth: 1,
  },
  barcode: {
    height: 600,
    width: 600,
  },
});
