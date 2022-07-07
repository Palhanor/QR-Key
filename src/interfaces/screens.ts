import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

export type RootStackProps = {
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

export type NavigationStackProps = NativeStackNavigationProp<RootStackProps>
export type DecryptProps = RouteProp<RootStackProps, "Decrypt">
export type QRKeyProps = RouteProp<RootStackProps, "QRKey">