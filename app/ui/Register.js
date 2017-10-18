import React from "react"
import { View, TextInput, Text, Button } from "react-native"
import styles from "./styles/registerScreen"

export default ({ onMobileNumberChange, onRegisterButtonPress }) => (
    <View>
        <Text style={ styles.title }>F L A Y R</Text>
        <Text style={ styles.description }>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
        </Text>
        <Text style={ styles.label }>Mobile Number</Text>
        <TextInput
            placeholder="0412345678"
            keyboardType="number-pad"
            onChangeText={ onMobileNumberChange }
            style={ styles.textInput }/>
        <Button
            title="Register"
            onPress={onRegisterButtonPress}
            styles={ styles.button }/>
    </View>
)