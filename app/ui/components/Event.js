import React from "react"
import { View, Text } from "react-native"

export default ({ title, startTimestamp, endTimestamp }) => (
    <View>
        <Text>{ title }</Text>
        <Text>{ startTimestamp }</Text>
        <Text>{ endTimestamp }</Text>
    </View>
)