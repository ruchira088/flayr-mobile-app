import React from "react"
import { View, Text } from "react-native"
import commonStyles from "../styles/general"

export default ({ title, startTimestamp, endTimestamp }) => (
    <View style={commonStyles.card}>
        <Text>{ title }</Text>
        <Text>{ startTimestamp }</Text>
        <Text>{ endTimestamp }</Text>
    </View>
)