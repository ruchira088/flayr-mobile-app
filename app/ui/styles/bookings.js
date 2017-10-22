import React from "react"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    heading: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: "bold"
    },
    card: {
        backgroundColor: "white",
        padding: 5,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 5,
        borderRadius: 5
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    }
})
