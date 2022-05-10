import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Texto from "../../components/Texto";
import Botao from "../../components/Botao";

export default function App({ setDecryptTexto, setTituloGlobal }: { setDecryptTexto: React.Dispatch<React.SetStateAction<string>>, setTituloGlobal: React.Dispatch<React.SetStateAction<string>> }) {
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Visualizando...");

  useEffect(() => {
    askForCameraPermission();
  }, []);

  function askForCameraPermission() {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }

  function handleBarCodeScanned({ data }: { data: string }) {
    setScanned(true);
    setText('Concluido!');
    const objMensagem = JSON.parse(data)
    setTituloGlobal(objMensagem.titulo)
    setDecryptTexto(objMensagem.texto)
  }

  function waitingPermission() {
    return (
      <View>
        <Texto>Aguardando a permissão de uso da câmera</Texto>
      </View>
    );
  }

  function noPermission() {
    return (
      <View>
        <Texto>Sem acesso à câmera</Texto>
        <Botao onPress={() => askForCameraPermission()}>
          Permitir o uso da câmera
        </Botao>
      </View>
    );
  }

  if (hasPermission === null) waitingPermission;
  if (hasPermission === false) noPermission;

  return (
    <View style={styles.container}>
      <Texto title style={styles.titulo}>
        Visualizar
      </Texto>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.barcode}
        />
      </View>
      <Texto regular style={styles.mensagem}>
        {text}
      </Texto>
      {scanned && (
        <Botao
          onPress={() => {
            setScanned(false);
            setText("Visualizando...");
          }}
        >
          Continuar
        </Botao>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  titulo: {
    color: "#FFFFFF",
    fontSize: 36,
    marginVertical: 24,
    fontFamily: "Titulo",
  },
  mensagem: {
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
