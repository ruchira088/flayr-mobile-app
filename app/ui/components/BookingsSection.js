import React from "react"
import { View, Text } from "react-native"
import BookingCard from "./BookingCard"
import commonStyles from "../styles/general"
import styles from "../styles/booking"

export default ({ bookings, navigate }) => {

    const bookingCards = bookings.map((booking, index) =>
        <BookingCard booking={booking} navigate={navigate} key={index}/>
    )

    return (
        <View style={commonStyles.section}>
            <Text style={styles.heading}>Bookings</Text>
            <View>
                { bookingCards }
            </View>
        </View>
    )
}