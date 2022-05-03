// Resolver o problema de erro com a importaçaõ da imagem

// Criar as novas rotas

import AppLoading from "expo-app-loading";
import { useFonts, Quantico_700Bold } from "@expo-google-fonts/quantico";
import { JosefinSans_400Regular } from "@expo-google-fonts/josefin-sans";
import testeImg from "./assets/teste.png";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";


export default function App() {
  let [fontsLoaded] = useFonts({
    Titulo: Quantico_700Bold,
    Texto: JosefinSans_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Text style={styles.titulo}>QR Key</Text>
        <Image style={styles.imagem} source={testeImg} />
        <View style={styles.botoes}>
          <TouchableOpacity style={styles.botaoGerar}>
            <Text style={styles.textoGerar}>Gerar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoVisualizar}>
            <Text style={styles.textoVisualizar}>Visualizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F175B",
    alignItems: "center",
    padding: 16,
  },
  titulo: {
    color: "#FFFFFF",
    fontSize: 36,
    marginVertical: 24,
    fontFamily: "Titulo",
  },
  imagem: {
    marginTop: 32,
    marginBottom: 46,
  },
  botoes: {
    width: '100%',
    position: 'absolute',
    bottom: 64
  },
  botaoGerar: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    borderRadius: 10,
    padding: 24,
    marginBottom: 16,
  },
  textoGerar: {
    color: "#0F175B",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Texto",
  },
  botaoVisualizar: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    width: "100%",
    borderRadius: 10,
    padding: 24,
  },
  textoVisualizar: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Texto",
  },
});
