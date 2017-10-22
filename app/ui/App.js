import React from "react"
import { StackNavigator } from "react-navigation"
import IndexScreen from "./screens/Index"
import BookingScreen from "./screens/Booking"

export default StackNavigator({
    [IndexScreen.screenId]: { screen: IndexScreen },
    [BookingScreen.screenId]: { screen: BookingScreen }
})