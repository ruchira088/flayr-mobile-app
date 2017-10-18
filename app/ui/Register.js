import React from "react"
import { View, TextInput, Text, Button } from "react-native"
import generalStyles from "./styles/general"

export default ({ onMobileNumberChange, onRegisterButtonPress }) => (
    <View>
        <Text style={generalStyles.label}>Mobile Number</Text>
        <TextInput
            placeholder="0412345678"
            keyboardType="number-pad"
            onChangeText={ onMobileNumberChange }
        />
        <Button title="Register" onPress={onRegisterButtonPress}/>
    </View>
)