import React from "react"
import { StyleSheet } from "react-native"

export const jsStyles = {
    textStyle : {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },
    activityIndicatorColor: "white"
}

export default StyleSheet.create({
    description: {
        fontSize: 20,
        padding: 10
    },
    label: {
        fontSize: 30,
        textAlign: "center",
        marginTop: 80
    },
    textInput: {
        fontSize: 30,
        textAlign: "center",
        margin: 20
    },
    container: {
        flex: 1
    },
    body: {
        flexGrow: 1
    },
    button: {
        backgroundColor: "black",
        margin: 30,
        marginBottom: 50
    },
    section: {
        margin: 20
    },
    card: {
        backgroundColor: "white",
        padding: 5,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 5,
        borderRadius: 5
    },
})