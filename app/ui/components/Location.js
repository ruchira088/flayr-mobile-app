import React from "react"
import { View, Text } from "react-native"
import MapView from "react-native-maps"
import { LOCATION_DELTA } from "../../config"
import styles from "../styles/bookings"

export default ({ coordinates }) => (
    <View style={styles.container}>
        <MapView
            style={styles.map}
            initialRegion={
                Object.assign({}, coordinates, {
                    latitudeDelta: LOCATION_DELTA,
                    longitudeDelta: LOCATION_DELTA
                })}>
            <MapView.Marker
                coordinate={coordinates}
                title="title"
                description="description"/>
        </MapView>
    </View>
)

export const LocationUnavailable = () => (
    <View>
        <Text> Location unavailable </Text>
    </View>
)

export const LoadingLocation = () => (
    <View>
        <Text> Loading map </Text>
    </View>
)