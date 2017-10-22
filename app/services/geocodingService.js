import axios from "axios"
import R from "ramda"
import { UnknownLocationError } from "../utils/exceptions"
import { GOOGLE_GEOCODING_API_URL, DEFAULT_COUNTRY } from "../config"

export const getCoordinates = async ({ suburb, state, country = DEFAULT_COUNTRY }) =>
{
    const response = await axios.get(`${GOOGLE_GEOCODING_API_URL}?address=${suburb},+${state},+${country}`)

    const { results } = response.data

    if ( results.length === 0) {
        return Promise.reject(new UnknownLocationError(`${suburb}, ${state}, ${country}`))
    } else {
        const { lat, lng } = R.head(results).geometry.location

        return { latitude: lat, longitude: lng }
    }
}
