import React from "react"
import {Text, View} from "react-native"
import MapView from "react-native-maps"
import Location, { LoadingLocation, LocationUnavailable } from "../components/Location"
import { getCoordinates } from "../../services/geocodingService"
import styles from "../styles/bookings"

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
        const { suburb, state } = this.props.navigation.state.params

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
        const { params: booking } = this.props.navigation.state

        return (
            <View>
                <Text>{ booking.eventTime }</Text>
                { this.renderLocation() }
                <Text>{ booking.eventTime }</Text>
            </View>
        )
    }
}