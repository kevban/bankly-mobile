import { Text } from "react-native-paper";
import React, { useState } from "react";
import styles from "../styles";
import { View } from "react-native";

const useAlert = () => {
    const [alert, setAlert] = useState(null);
    const createAlert = (msg, type) => {
        console.log('alert:' , msg)
        setAlert(<View style={{width: '100%', justifyContent: 'center'}}><Text style={styles.alertText}>{msg}</Text></View>)
    }
    return [alert, createAlert]
}
export default useAlert