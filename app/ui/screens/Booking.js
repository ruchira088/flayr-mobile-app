import React from "react"
import {Text, View} from "react-native"
import MapView from "react-native-maps"
import styles from "../styles/bookings"

export const bookingScreenId = "booking-screen"

export default ({ navigation }) => {
    const booking = navigation.state.params

    return (
        <View style={styles.container}>
            <Text>{ booking.eventTime }</Text>
            <MapView
                style={styles.map}
                region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421}
            }/>
            <Text>{ booking.eventTime }</Text>
        </View>
    )
}