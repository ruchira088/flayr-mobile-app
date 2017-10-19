import React from "react"
import { View, TextInput, Text } from "react-native"
import Button from "apsl-react-native-button"
import commonStyles, { jsStyles } from "./styles/general"
import styles from "./styles/registerScreen"

export default ({ onMobileNumberChange, onRegisterButtonPress, isLoading }) => (
    <View style={commonStyles.container}>
        <View style={commonStyles.body}>
            <Text style={styles.title}>F L A Y R</Text>
            <Text style={commonStyles.description}>
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old.
            </Text>
            <Text style={commonStyles.label}>Mobile Number</Text>
            <TextInput
                placeholder="0412345678"
                keyboardType="number-pad"
                onChangeText={onMobileNumberChange}
                style={commonStyles.textInput}/>
            </View>
        <Button
            isLoading={isLoading}
            activityIndicatorColor={jsStyles.activityIndicatorColor}
            onPress={onRegisterButtonPress}
            style={commonStyles.button} textStyle={jsStyles.textStyle}>
            NEXT
        </Button>
    </View>
)