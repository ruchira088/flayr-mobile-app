import React from "react"
import { fetchUserDetails, storeUserDetails } from "../services/asyncStorage"
import { login, register } from "../services/backendService"
import { parseUserData } from "../utils/general"
import { HOME, LOGIN, NEW_USER, PENDING } from "./constants/appStatus"
import LoadingScreen from "./Loading"
import RegisterScreen from "./Register"
import LoginScreen from "./Login"
import Home from "./Home";

export default class Index extends React.Component
{
    static screenId = "index-screen"

    static navigationOptions = {
        title: "Index"
    }

    constructor(props) {
        super(props)

        this.state = {
            status: PENDING,
            mobileNumber: "",
            passcode: "",
            loading: false,
            userData: null
        }
    }

    async componentDidMount() {

        const userData = await fetchUserDetails()

        if (userData == null) {
            this.setState({ status: NEW_USER })
        } else {
            this.setState({ status: HOME, userData: parseUserData(userData)})
        }
    }

    STATUS_MAPPING = {
        [PENDING]: () => this.loadingScreen(),
        [NEW_USER]: () => this.registrationScreen(),
        [LOGIN]: () => this.loginScreen(),
        [HOME]: () => this.homeScreen()
    }

    getView = status => this.STATUS_MAPPING[status]()

    loadingScreen = () => {
        return <LoadingScreen/>
    }

    registrationScreen = () => {
        const { loading } = this.state

        return <RegisterScreen
            isLoading={loading}
            onMobileNumberChange={this.onStateChange("mobileNumber")}
            onRegisterButtonPress={this.onRegistrationSubmit}/>
    }

    loginScreen = () => {
        const { loading } = this.state

        return <LoginScreen
                isLoading={loading}
                onPasscodeChange={this.onStateChange("passcode")}
                onLoginButtonPress={this.onLoginSubmit}/>
    }

    homeScreen = () => {
        const { userData } = this.state

        return <Home userData={userData}/>
    }

    onRegistrationSubmit = async () => {
        const { mobileNumber } = this.state

        this.setState({ loading: true })

        const registrationResponse = await register(mobileNumber)

        console.log(registrationResponse.data)

        this.setState({ status: LOGIN, loading: false })
    }

    onLoginSubmit = async () => {
        const { mobileNumber, passcode } = this.state

        this.setState({ loading: true })

        const loginResponse = await login(mobileNumber, passcode)

        await storeUserDetails(loginResponse.data)

        this.setState({ status: HOME, loading: false, userData: parseUserData(loginResponse.data) })
    }

    onStateChange = name => value => {
        this.setState({ [name]: value })
    }

    render() {
        const { status } = this.state

        return this.getView(status)
    }

}