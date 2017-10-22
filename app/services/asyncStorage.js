import { AsyncStorage } from "react-native"

const USER_DETAILS = "USER_DETAILS"

export const fetchUserDetails = async () => {
    const userDetails = await AsyncStorage.getItem(USER_DETAILS)
    return JSON.parse(userDetails)
}

export const storeUserDetails = user => AsyncStorage.setItem(USER_DETAILS, JSON.stringify(user))

export const removeUserDetails = () => AsyncStorage.removeItem(USER_DETAILS)