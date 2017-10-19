import React from "react"
import { View } from "react-native"
import { fetchUserDetails, storeUserDetails } from "../services/asyncStorage"
import { register, login } from "../services/backendService"
import { PENDING, NEW_USER, LOGIN, HOME } from "./constants/appStatus"
import LoadingScreen from "./Loading"
import RegisterScreen from "./Register"
import LoginScreen from "./Login"
import generalStyles from "./styles/general"
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
            loading: false
        }
    }

    async componentDidMount() {

        const userDetails = await fetchUserDetails()

        const status = userDetails == null ? NEW_USER : HOME

        this.setState({ status })
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
        return <Home/>
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

        this.setState({ status: HOME, loading: false })
    }

    onStateChange = name => value => {
        this.setState({ [name]: value })
    }

    render() {
        const { status } = this.state

        return this.getView(status)
    }

}