import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import globalStyle from "../../styles";
import Header from "../../components/Header";
import StyledText from "../../components/StyledText";
import StyledButton from "../../components/StyledButton";

const CryptoJS = require("crypto-js");

export default function Decrypt() {
  const { params }: {params: {data: string }} = useRoute();

  const [decryptedMessage, setDecryptedMessage] = useState<string>("");
  const [isDecrypted, setIsDecrypted] = useState<boolean>(false);
  const [key, setKey] = useState<string>("");

  const encryptedData = params?.data;
  const title = JSON.parse(encryptedData)?.t;
  const encryptedMessage = JSON.parse(encryptedData)?.m;

  function decryptMessage() {
    try {
      const tryingDecrypt = CryptoJS.AES.decrypt(
        encryptedMessage,
        key
      ).toString(CryptoJS.enc.Utf8);
      if (tryingDecrypt !== "") {
        setDecryptedMessage(tryingDecrypt);
        setIsDecrypted(true);
      } else {
        Alert.alert("Senha inválida!", "Tente novamente...");
      }
    } catch (err) {
      Alert.alert("Senha inválida!", "Tente novamente...");
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyle.spacelessContainer}>
        <Header>Exibir</Header>
        <View style={styles.data}>
          <StyledText style={globalStyle.labelText}>Titulo</StyledText>
          <StyledText style={styles.message}>{title}</StyledText>
          {!isDecrypted ? (
            <>
              <StyledText style={globalStyle.labelText}>Chave</StyledText>
              <TextInput
                style={globalStyle.inputField}
                onChangeText={setKey}
                value={key}
              ></TextInput>
              <StyledButton onPress={decryptMessage}>Decriptar</StyledButton>
            </>
          ) : (
            <>
              <StyledText style={globalStyle.labelText}>Texto</StyledText>
              <StyledText style={styles.message}>
                {decryptedMessage}
              </StyledText>
            </>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  data: {
    width: "100%",
  },
  message: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 24,
  },
});
