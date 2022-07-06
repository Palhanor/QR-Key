import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import StyledText from "./StyledText";

export default function StyledButton({
  children,
  visual,
  onPress,
}: {
  children: any;
  visual?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}) {
  const buttonStyle =
    visual !== "secondary" ? styles.primaryButton : styles.secondaryButton;
  const buttonText =
    visual !== "secondary" ? styles.primaryText : styles.secondaryText;

  return (
    <>
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <StyledText style={buttonText}> {children} </StyledText>
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
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    width: "100%",
    borderRadius: 10,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    padding: 24,
  },
  secondaryText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 18,
  },
});
