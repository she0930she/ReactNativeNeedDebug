import React from "react"
import { Text, View, StyleSheet, Button } from "react-native"

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Button
                style={styles.textStyle}
                title="why"
            />
        </View >
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        alignItems: "center",
        borderWidth: 2,
        // borderColor: "purple",
        paddingHorizontal: 60,
        margin: 30,
        backgroundColor: "black",
        borderRadius: 20
    },
    textStyle: {
        fontSize: 30,
        color: "white",
        // borderWidth: 2,
        // borderColor: "black",

        padding: 30
    }
})

export default BoxScreen