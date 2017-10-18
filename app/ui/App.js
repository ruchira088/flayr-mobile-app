import React from "react"
import { StackNavigator } from "react-navigation"
import IndexScreen from "./Index"

export default StackNavigator({
    [IndexScreen.screenId]: { screen: IndexScreen }
})