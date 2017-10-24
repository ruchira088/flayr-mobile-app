import React from "react"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    heading: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: "bold"
    },
    container: {
        height: 400,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    }
})
