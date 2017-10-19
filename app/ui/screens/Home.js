import React from "react"
import { View, Text } from "react-native"
import BookingsSection from "../components/BookingsSection"
import { fetchBookings } from "../../services/backendService"

export default class Home extends React.Component
{
    constructor(props) {
        super(props)

        this.state = {
            bookings: []
        }
    }

    async componentDidMount() {
        const { userData: { bearerToken, airtableId } } = this.props

        const bookings = await fetchBookings({ bearerToken, airtableId })

        this.setState({ bookings })
    }

    render() {
        const { bookings } = this.state
        const { userData } = this.props

        return (
            <View>
                <Text>Hello { userData.firstName }</Text>
                <View>
                    <BookingsSection bookings={bookings}/>
                </View>
            </View>
        )
    }
}