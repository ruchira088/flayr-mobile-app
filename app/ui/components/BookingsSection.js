import React from "react"
import { View, Text } from "react-native"
import BookingCard from "./BookingCard"

export default ({ bookings }) => {

    const bookingCards = bookings.map((booking, index) =>
        <BookingCard booking={booking} key={index}/>
    )

    return (
        <View>
            <Text>Bookings</Text>
            <View>
                { bookingCards }
            </View>
        </View>
    )
}