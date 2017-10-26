import React from "react"
import { View, Text } from "react-native"
import moment from "moment"
import { Moment } from "../../constants/general"
import styles from "../styles/bookingSummary"

const Section = ({ label, value }) => (
    <View style={styles.lineItem}>
        <Text style={styles.lineItemLabel}>{ label }:</Text>
        <Text style={styles.lineItemValue}>{ value }</Text>
    </View>
)

export default ({ booking }) => (
    <View style={styles.container}>
        <Section label="Date" value={moment(booking.eventDate).format(Moment.DATE_DISPLAY_FORMAT)}/>
        <Section label="Time" value={booking.eventTime}/>
        <Section label="Suburb" value={booking.suburb}/>
        <Section label="State" value={booking.state}/>
        <Section label="Payment" value={booking.supplierPayment}/>
        <Section label="Number of People" value={booking.numberOfPeople}/>
    </View>
)