import React from "react"
import { View } from "react-native"
import Event from "./Event"

export default ({ events }) => {

    const eventCards = events.map((event, index) =>
        <Event
            title={event.title}
            startTimestamp={event.startDate}
            endTimestamp={event.endDate}
            key={index}/>
    )

    return (
        <View>
            { eventCards }
        </View>
    )
}