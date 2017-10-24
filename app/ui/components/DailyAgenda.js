import React from "react"
import { View, Text } from "react-native"
import { Moment } from "../../constants/general"
import Event from "./Event"
import commonStyles from "../styles/general"

export default ({ events, date }) => {

    const eventCards = events.map((event, index) =>
        <Event
            title={event.title}
            startTimestamp={event.startDate}
            endTimestamp={event.endDate}
            key={index}/>
    )

    return (
        <View style={commonStyles.section}>
            <Text>

                { date.format(Moment.DATE_DISPLAY_FORMAT) }
            </Text>
            <View>
                { eventCards }
            </View>
        </View>
    )
}