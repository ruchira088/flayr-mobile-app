import React from "react"
import { View, Text, TextInput, Button } from "react-native"

export default ({ onPasscodeChange, onLoginButtonPress }) => (
    <View>
        <Text>Passcode</Text>
        <TextInput placeholder="passcode" onChangeText={onPasscodeChange}/>
        <Button title="Submit" onPress={onLoginButtonPress}/>
    </View>
)