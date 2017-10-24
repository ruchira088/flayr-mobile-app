import React from "react"
import { TouchableOpacity, Text } from "react-native"
import Booking from "../screens/Booking"
import { DEFAULT_DATE_FORMAT } from "../../config"
import commonStyles from "../styles/general"

export default ({ booking, navigate }) => (
    <TouchableOpacity onPress={() => navigate(Booking.screenId, booking)} style={commonStyles.card}>
        <Text>{ booking.suburb }, { booking.state }</Text>
        <Text>{ booking.eventTime }</Text>
        <Text>{ booking.eventDate.format(DEFAULT_DATE_FORMAT) }</Text>
    </TouchableOpacity>
)