import React from "react"
import Booking from "../components/Booking"

export default class ExistingBooking extends React.Component
{
    static screenId = "existing-booking"

    constructor(props) {
        super(props)
    }

    render() {
        const { params } = this.props.navigation.state

        return (
            <Booking {...params}/>
        )
    }
}