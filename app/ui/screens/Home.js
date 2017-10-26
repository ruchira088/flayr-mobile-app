import React from "react"
import {Alert, Button, PushNotificationIOS, Text, View} from "react-native"
import BookingsSection from "../components/BookingsSection"
import NewBooking from "../screens/NewBooking"
import {PushEvents} from "../../constants/general"
import {fetchBookings, registerPushNotificationsToken} from "../../services/backendService"

export default class Home extends React.Component
{
    constructor(props) {
        super(props)

        this.state = {
            bookings: []
        }
    }

    async componentDidMount() {
        const { userData: { bearerToken, airtableId }, navigate } = this.props

        this.notificationEventHandler(PushNotificationIOS.addEventListener)

        PushNotificationIOS.requestPermissions()

        const launchNotification = await PushNotificationIOS.getInitialNotification()

        if (launchNotification !== null) {
            navigate(NewBooking.screenId, launchNotification._data)
        }

        const bookings = await fetchBookings({ bearerToken, airtableId })

        this.setState({ bookings })
    }

    componentWillUnmount() {
        this.notificationEventHandler(PushNotificationIOS.removeEventListener)
    }

    notificationEventHandler = eventListener =>
    {
        eventListener(PushEvents.REGISTER, this.onPushNotificationsRegister)

        eventListener(PushEvents.REMOTE_NOTIFICATION, this.onRemoteNotification)

        eventListener(PushEvents.LOCAL_NOTIFICATION, this.onLocalNotification)
    }

    onPushNotificationsRegister = apnsToken =>
    {
        const { userData: { bearerToken, airtableId, id } } = this.props

        registerPushNotificationsToken(bearerToken)(
            {
                stylistAirtableId: airtableId,
                stylistId: id,
                apnsToken
            })
    }

    onRemoteNotification = remoteNotification => {
        const { navigate } = this.props

        remoteNotification.finish(PushNotificationIOS.FetchResult.NewData)
        navigate(NewBooking.screenId, remoteNotification._data)
    }

    onLocalNotification = localNotification => {
        Alert.alert("local notification")
    }

    onNewBooking = () => {
        const { navigate } = this.props

        navigate(NewBooking.screenId, {
            eventTime: "2:00 PM",
            eventDate: "2018-05-19",
            state: "VIC",
            suburb: "Caroline Springs",
            supplierPayment: "620",
            numberOfPeople: "6"
        })
    }

    render() {
        const { bookings } = this.state
        const { userData, navigate, onLogout } = this.props

        return (
            <View>
                <Text>Hello { userData.firstName }</Text>
                <View>
                    <BookingsSection bookings={bookings} navigate={navigate}/>
                </View>
                <Button title="New Booking" onPress={this.onNewBooking}/>
                <Button title="Logout" onPress={onLogout}/>
            </View>
        )
    }
}