import React from "react";
import { GestureResponderEvent, StyleSheet, TouchableOpacity } from "react-native";
import Texto from "./Texto";

export default function Botao({
  children,
  onPress,
  primary,
  secondary,
}: {
  children: any;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  primary?: boolean;
  secondary?: boolean;
}) {
  let estiloBotao: any = styles.primaryButton;
  let estiloTextoBotao: any = styles.primaryText;

  if (primary) {
    estiloBotao = styles.primaryButton;
    estiloTextoBotao = styles.primaryText;
  } else if (secondary) {
    estiloBotao = styles.secondaryButton;
    estiloTextoBotao = styles.secondaryText;
  }

  return (
    <>
      <TouchableOpacity onPress={onPress} style={estiloBotao}>
        <Texto regular style={estiloTextoBotao}>
          {" "}
          {children}{" "}
        </Texto>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    borderRadius: 10,
    padding: 24,
    marginBottom: 16,
  },
  primaryText: {
    color: "#0F175B",
    textAlign: "center",
    fontSize: 18,
  },
  secondaryButton: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    width: "100%",
    borderRadius: 10,
    padding: 24,
  },
  secondaryText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 18,
  },
});
