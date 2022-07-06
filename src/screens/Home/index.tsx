import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import globalStyle from "../../styles";
import Header from "../../components/Header";
import StyledButton from "../../components/StyledButton";
import logo from "../../../assets/favicon.png";
import { propsStack } from "../../interfaces/screens";

export default function Home() {
  const navigation = useNavigation<propsStack>();

  function goToEncrypt() {
    navigation.navigate("Encrypt");
  }

  function goToScan() {
    navigation.navigate("Scan");
  }

  return (
    <View style={globalStyle.spacedContainer}>
      <Header>QR Key</Header>
      <Image style={styles.image} source={logo} />
      <View style={globalStyle.bottomButtons}>
        <StyledButton onPress={goToEncrypt}>Encriptar</StyledButton>
        <StyledButton visual="secondary" onPress={goToScan}>
          Decriptar
        </StyledButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    marginTop: 32,
    marginBottom: 46,
    height: 220,
    width: 220,
  },
});
