import axios from "axios"
import moment from "moment"
import { BACKEND_SERVICE_URL, DEFAULT_AUTHENTICATION_SCHEME } from "../config"
import { AUTHORIZATION } from "../constants/headers"

const createAxiosClient = (props = {}) =>
    axios.create(Object.assign({}, { baseURL: BACKEND_SERVICE_URL }, props))

const axiosClient = createAxiosClient()

const authenticatedAxiosClient = bearerToken =>
    createAxiosClient({
        headers: { [AUTHORIZATION]: `${DEFAULT_AUTHENTICATION_SCHEME} ${bearerToken}`}
    })

export const register = mobileNumber => axiosClient.post("/user/register", { mobileNumber })

export const login = (mobileNumber, passcode) =>
    axiosClient.post("/user/login", { mobileNumber, passcode })

export const fetchBookings = async ({ bearerToken, airtableId }) =>
{
    const bookingsResponse = await authenticatedAxiosClient(bearerToken).get(`/bookings/${airtableId}`)

    const bookings = bookingsResponse.data.map(booking =>
            Object.assign({}, booking, { eventDate: moment(booking.eventDate) })
        )

    return bookings
}


