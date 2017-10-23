import React from "react"
import { StackNavigator } from "react-navigation"
import IndexScreen from "./screens/Index"
import BookingScreen from "./screens/Booking"
import NewBookingScreen from "./screens/NewBooking"

export default StackNavigator({
    [IndexScreen.screenId]: { screen: IndexScreen },
    [BookingScreen.screenId]: { screen: BookingScreen },
    [NewBookingScreen.screenId]: { screen: NewBookingScreen }
})