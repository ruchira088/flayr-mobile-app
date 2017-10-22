import React from "react"
import { StackNavigator } from "react-navigation"
import IndexScreen from "./screens/Index"
import BookingScreen, { bookingScreenId } from "./screens/Booking"

export default StackNavigator({
    [IndexScreen.screenId]: { screen: IndexScreen },
    [bookingScreenId]: { screen: BookingScreen }
})