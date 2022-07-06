import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BarCodeScanner } from "expo-barcode-scanner";
import globalStyle from "../../styles";
import Header from "../../components/Header";
import StyledText from "../../components/StyledText";
import StyledButton from "../../components/StyledButton";
import { propsStack } from "../../interfaces/screens";

export default function Scan() {
  const [permission, setPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState<boolean>(false);

  const navigation = useNavigation<propsStack>();

  useEffect(() => {
    askPermission();
    setScanned(false);
  }, []);

  function askPermission() {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setPermission(status === "granted");
    })();
  }

  function scan({ data }: { data: string }) {
    if (data.substring(0, 6) == '{"t":"') {
      setScanned(true);
      navigation.navigate("Decrypt", { data: data });
    } else {
      setScanned(true);
      Alert.alert(
        "Erro ao escanear",
        "O Código escaneado não se trata de um QR Key",
        [{ text: "Voltar", onPress: () => navigation.navigate("Home") }]
      );
    }
  }

  function waitingPermission() {
    return (
      <View>
        <StyledText>Aguardando a permissão de uso da câmera</StyledText>
      </View>
    );
  }

  function noPermission() {
    return (
      <View>
        <StyledText>Sem acesso à câmera</StyledText>
        <StyledButton onPress={() => askPermission()}>
          Permitir o uso da câmera
        </StyledButton>
      </View>
    );
  }

  if (permission === null) waitingPermission;
  if (permission === false) noPermission;

  return (
    <View style={globalStyle.spacelessContainer}>
      <Header>Visualizar</Header>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : scan}
          style={styles.barcode}
        />
      </View>
      {!scanned && (
        <StyledText style={styles.status}>Visualizando...</StyledText>
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
