import React from "react";
import { StyleSheet } from "react-native";

const globalStyle = StyleSheet.create({
  spacedContainer: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#1D2445",
    alignItems: "center",
    padding: 16,
  },
  spacelessContainer: {
    flex: 1,
    backgroundColor: "#1D2445",
    alignItems: "center",
    padding: 16,
  },
  labelText: {
    color: "#FFFFFF",
    fontSize: 20,
    marginBottom: 14,
  },
  inputField: {
    borderColor: "#FFFFFF",
    borderRadius: 6,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "#FFFFFF",
    marginBottom: 24,
  },
  bottomButtons: {
    width: "100%",
    marginBottom: 64,
  }
});

export default globalStyle;
