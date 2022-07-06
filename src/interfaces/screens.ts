import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
    "Home": undefined
    "Encrypt": undefined
    "Scan": undefined
    "QRKey": {
        title: string
        message: string
    }
    "Decrypt": {
        data: string
    }
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>