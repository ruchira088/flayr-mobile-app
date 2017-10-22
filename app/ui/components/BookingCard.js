import React from "react"
import { TouchableOpacity, Text } from "react-native"
import Booking from "../screens/Booking"
import { DEFAULT_DATE_FORMAT } from "../../config"
import styles from "../styles/bookings"

export default ({ booking, navigate }) => (
    <TouchableOpacity onPress={() => navigate(Booking.screenId, booking)} style={styles.card}>
        <Text>{ booking.suburb }, { booking.state }</Text>
        <Text>{ booking.eventTime }</Text>
        <Text>{ booking.eventDate.format(DEFAULT_DATE_FORMAT) }</Text>
    </TouchableOpacity>
)