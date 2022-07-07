import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import globalStyle from "../../styles";
import StyledText from "../../components/StyledText";
import StyledButton from "../../components/StyledButton";
import { NavigationStackProps } from "../../interfaces/screens";

const CryptoJS = require("crypto-js");

export default function Encrypt() {
  const navigation = useNavigation<NavigationStackProps>();

  const [title, setTitle] = useState<string>("");
  const [key, setKey] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [messageSize, setMessageSize] = useState<number>(0);

  function generateQRKey() {
    if (title !== "" && key !== "" && message !== "") {
      navigation.navigate("QRKey", {
        title: title,
        message: CryptoJS.AES.encrypt(message, key).toString(),
      });
      setTitle("");
      setKey("");
      setMessage("");
    }
  }

  function writeMessage(text: string) {
    if (messageSize <= 280) {
      setMessage(text.substring(0, 280));
      setMessageSize(text.substring(0, 280).length);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.avoidKeyboard}
      keyboardVerticalOffset={-500}
      behavior="padding"
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView style={styles.container}>
          <Header>Gerar</Header>
          <View style={styles.form}>
            <StyledText style={globalStyle.labelText}>Titulo</StyledText>
            <TextInput
              style={globalStyle.inputField}
              onChangeText={setTitle}
              value={title}
            ></TextInput>
            <StyledText style={globalStyle.labelText}>Chave</StyledText>
            <TextInput
              style={globalStyle.inputField}
              onChangeText={setKey}
              value={key}
            ></TextInput>
            <View style={styles.inline}>
              <StyledText style={globalStyle.labelText}>Texto</StyledText>
              <StyledText style={styles.counter}>{messageSize}/280</StyledText>
            </View>
            <TextInput
              multiline
              numberOfLines={8}
              style={[globalStyle.inputField, styles.textarea]}
              onChangeText={writeMessage}
              value={message}
            ></TextInput>
          </View>
          <View style={globalStyle.bottomButtons}>
            <StyledButton onPress={generateQRKey}>Gerar</StyledButton>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  avoidKeyboard: {
    flex: 1,
    backgroundColor: "#1D2445",
  },
  container: {
    flex: 1,
    padding: 16,
  },
  form: {
    width: "100%",
  },
  textarea: {
    paddingTop: 16,
    textAlignVertical: "top",
    maxHeight: 180,
  },
  inline: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  counter: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 16,
  },
});
