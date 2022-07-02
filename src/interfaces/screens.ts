import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
    "QR Key": undefined
    "Encriptar": undefined
    "QRKey": {
        titulo: string
        mensagem: string
    }
    "Scan": undefined
    "Decriptar": {
        data: string
    }
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>