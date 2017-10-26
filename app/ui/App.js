import React from "react"
import { StackNavigator } from "react-navigation"
import IndexScreen from "./screens/Index"
import ExistingBookingScreen from "./screens/ExistingBooking"
import NewBookingScreen from "./screens/NewBooking"

export default StackNavigator({
    [IndexScreen.screenId]: { screen: IndexScreen },
    [ExistingBookingScreen.screenId]: { screen: ExistingBookingScreen },
    [NewBookingScreen.screenId]: { screen: NewBookingScreen }
})