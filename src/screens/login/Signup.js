import React, { useState, useContext } from "react";
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { userSignUp } from "../../../firebaseAuth/signup";
import AppContext from "../../context/context";

export function Signup({ setContentToDisplay }) {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const appContext = useContext(AppContext);

    const handleSignUp = () => {
        if(!userName || !email || !password || !confirmPassword) return alert("Please fill in all the fields");
        if(password !== confirmPassword) return alert("Sorry, the passwords don't match!");

        const newUser = {
            userName,
            email,
            password
        }
        userSignUp({ newUser, appContext });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.registerTxt}>Register Here!</Text>
            <View style={styles.inputContainer}>
                <View style={styles.row}>
                    <Text>{'User-\nName'}</Text>
                    <TextInput style={styles.input} autoCapitalize="none" autoCorrect={false} value={userName} onChangeText={(nameInput) => setUserName(nameInput)} />
                </View>
                <View style={styles.row}>
                    <Text>Email:</Text>
                    <TextInput style={styles.input} autoCapitalize="none" autoCorrect={false} value={email} onChangeText={(emailInput) => setEmail(emailInput)} />
                </View>
                <View style={styles.row}>
                    <Text>Password:</Text>
                    <TextInput style={styles.input} autoCapitalize="none" autoCorrect={false} value={password} onChangeText={(passwordInput) => setPassword(passwordInput)} />
                </View>
                <View style={styles.row}>
                    <Text>{'Comfirm\nPassword'}</Text>
                    <TextInput style={styles.input} autoCapitalize="none" autoCorrect={false} value={confirmPassword} onChangeText={(confirmPasswordInput) => setConfirmPassword(confirmPasswordInput)} />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button title={'Sign up'} onPress={handleSignUp} />
                <Button title={'Back'} onPress={() => setContentToDisplay('')} />
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
        width: '80%',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        height: 200,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%'
    },
    registerTxt: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})