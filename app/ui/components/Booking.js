import React from "react"
import {View} from "react-native"
import {getCoordinates} from "../../services/geocodingService"
import Location, {LoadingLocation, LocationUnavailable} from "./Location"
import BookingSummary from "./BookingSummary"

export default class Booking extends React.Component
{
    static screenId = "booking-screen"

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            coordinates: null
        }
    }

    async componentDidMount() {
        const { suburb, state } = this.props

        const coordinates = await getCoordinates({ suburb, state })

        this.setState({ coordinates, loading: false })
    }

    renderLocation() {
        const { loading, coordinates } = this.state

        if (loading) {
            return <LoadingLocation/>
        } else if (coordinates !== null) {
            return <Location coordinates={coordinates}/>
        } else {
            return <LocationUnavailable/>
        }
    }

    render() {
        return (
            <View>
                <BookingSummary booking={this.props}/>
                { this.renderLocation() }
            </View>
        )
    }
}