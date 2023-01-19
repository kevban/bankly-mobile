import { Text } from "react-native-paper";
import React, { useState } from "react";
import styles from "../styles";

const useAlert = () => {
    const [alert, setAlert] = useState(null);
    const createAlert = (msg, type) => {
        console.log(msg)
        setAlert(<Text style={styles.alertText}>{msg}</Text>)
    }
    return [alert, createAlert]
}
export default useAlert