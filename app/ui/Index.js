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
            passcode: ""
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
        return <RegisterScreen
            onMobileNumberChange={this.onStateChange("mobileNumber")}
            onRegisterButtonPress={this.onRegistrationSubmit}/>
    }

    loginScreen = () => {
        return <LoginScreen
                onPasscodeChange={this.onStateChange("passcode")}
                onLoginButtonPress={this.onLoginSubmit}/>
    }

    homeScreen = () => {
        return <Home/>
    }

    onRegistrationSubmit = async () => {
        const { mobileNumber } = this.state

        const registrationResponse = await register(mobileNumber)

        console.log(registrationResponse.data)

        this.setState({ status: LOGIN })
    }

    onLoginSubmit = async () => {
        const { mobileNumber, passcode } = this.state

        const loginResponse = await login(mobileNumber, passcode)

        await storeUserDetails(loginResponse.data)

        console.log(loginResponse.data)

        this.setState({ status: HOME })

    }

    onStateChange = name => value => {
        this.setState({ [name]: value })
    }

    render() {
        const { status } = this.state
        return (
            <View style={generalStyles.container}>
                { this.getView(status) }
            </View>
        )
    }

}