import React from "react"
import { View, Text, TextInput, KeyboardAvoidingView } from "react-native"
import Button from "apsl-react-native-button"
import commonStyles, { jsStyles } from "../styles/general"

export default ({ onPasscodeChange, onLoginButtonPress, isLoading }) => (
    <KeyboardAvoidingView behavior="position" style={commonStyles.container}>
        <View style={commonStyles.body}>
            <Text style={commonStyles.description}>
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout.
            </Text>
            <Text style={commonStyles.label}>Passcode</Text>
            <TextInput
                keyboardType="number-pad"
                placeholder="passcode"
                onChangeText={onPasscodeChange}
                style={commonStyles.textInput}/>
        </View>
        <Button
            isLoading={isLoading}
            textStyle={jsStyles.textStyle}
            activityIndicatorColor={jsStyles.activityIndicatorColor}
            onPress={onLoginButtonPress}
            style={commonStyles.button}>
            Submit
        </Button>
    </KeyboardAvoidingView>
)