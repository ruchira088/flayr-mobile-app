import React from "react"
import { View, Text } from "react-native"
import { DEFAULT_DATE_FORMAT } from "../../config"

export default ({ booking }) => (
    <View>
        <Text>{ booking.suburb }, { booking.state }</Text>
        <Text>{ booking.eventTime }</Text>
        <Text>{ booking.eventDate.format(DEFAULT_DATE_FORMAT) }</Text>
    </View>
)