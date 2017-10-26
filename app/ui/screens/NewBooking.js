import React from "react"
import moment from "moment"
import { View, Text, Alert } from "react-native"
import CalendarEvents from "react-native-calendar-events"
import { Moment } from "../../constants/general"
import DailyAgenda from "../components/DailyAgenda"
import Booking from "../components/Booking"

export default class NewBooking extends React.Component
{
    static screenId = "new-booking"

    constructor(props) {
        super(props)

        this.state = {
            events: []
        }
    }

    getDateRange = () => {
        const { date } = this.props.navigation.state.params

        const format = momentDate => momentDate.utc().format().replace("Z", ".000Z")

        return {
            startTimestamp: format(moment(date).startOf(Moment.DAY)),
            endTimestamp: format(moment(date).endOf(Moment.DAY))
        }
    }

    async componentDidMount() {
        const { startTimestamp, endTimestamp } = this.getDateRange()

        try {
            const authorizationStatus = await CalendarEvents.authorizeEventStore()
            const allEvents = await CalendarEvents.fetchAllEvents(startTimestamp, endTimestamp)

            const events = allEvents.filter(({ calendar }) => calendar.source === "Default")

            this.setState({ events })
        } catch (error) {
            Alert.alert(error.message)
        }
    }

    render() {
        const { events } = this.state
        const { params: booking } = this.props.navigation.state

        return (
            <View>
                <Booking {...booking}/>
                {/*<DailyAgenda events={events} date={date}/>*/}
            </View>
        )
    }
}