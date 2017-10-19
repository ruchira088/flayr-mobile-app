import React from "react"
import { View, Text } from "react-native"

export default ({ userData }) => (
    <View>
        <Text>Hello { userData.firstName }</Text>
    </View>
)
