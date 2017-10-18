import axios from "axios"
import { BACKEND_SERVICE_URL } from "../config"

const axiosClient = axios.create({
    baseURL: BACKEND_SERVICE_URL
})

export const register = mobileNumber => axiosClient.post("/user/register", { mobileNumber })

export const login = (mobileNumber, passcode) =>
    axiosClient.post("/user/login", { mobileNumber, passcode })
