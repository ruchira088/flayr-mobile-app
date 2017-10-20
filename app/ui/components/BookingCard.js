import React from "react"
import { View, Text } from "react-native"
import { DEFAULT_DATE_FORMAT } from "../../config"
import styles from "../styles/bookings"

export default ({ booking }) => (
    <View style={styles.card}>
        <Text>{ booking.suburb }, { booking.state }</Text>
        <Text>{ booking.eventTime }</Text>
        <Text>{ booking.eventDate.format(DEFAULT_DATE_FORMAT) }</Text>
    </View>
)