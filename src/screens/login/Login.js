import React, { useState, useContext } from "react";
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import AppContext from '../../context/context';
import { login } from "../../../firebaseAuth/login";

export function Login({ setContentToDisplay }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const appContext = useContext(AppContext);

    const handleLogin = () => {
        const user = login(email, password, appContext);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.loginText}>Please Enter Your Login Info!</Text>
            <View style={styles.inputContainer}>
                <View style={styles.row}>
                    <Text>Email:</Text>
                    <TextInput style={styles.input} autoCapitalize="none" autoCorrect={false} value={email} onChangeText={(emailInput) => setEmail(emailInput)} />
                </View>
                <View style={styles.row}>
                    <Text>Password:</Text>
                    <TextInput style={styles.input} autoCapitalize="none" autoCorrect={false} value={password} onChangeText={(passwordInput) => setPassword(passwordInput)} />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button title={'Login'} onPress={handleLogin} />
                <Button onPress={() => setContentToDisplay('')} title={'Back'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '60%',
        top: 40
    },
    row: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    loginText:{
        fontSize: 19,
        fontWeight: 'bold',
    },
    input: {
        height: 36,
        margin: 12,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, .4)',
        padding: 10,
        width: 160,
        borderRadius: 40,
    },
    inputContainer: {
        height: 120,
        justifyContent: 'space-evenly',
    },
    buttonContainer: {
        bottom: 20
    }
})