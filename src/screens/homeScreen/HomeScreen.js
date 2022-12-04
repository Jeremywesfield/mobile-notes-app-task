import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from 'react-native'
import { NotesListView } from './components/NotesListView';
import AppContext from "../../context/context";
import { NotesMapView } from "./components/NotesMapView";
import LinearGradient from 'react-native-linear-gradient';
import { getData as getDataFromStorage } from "../../../asyncStorage/read";

export function HomeScreen({ navigation }) {
    const [isListView, setIsListView] = useState(true);
    const appContext= useContext(AppContext);
    useEffect(() => {
        const dataFromStorage = getDataFromStorage().then((data) => {
            if(data) appContext.setNotes(data)
        });
    }, []);
   

    const notesArr = [...appContext.notes].sort((item) => item.date);
    const notesViewToDisplay = isListView ?  
        <NotesListView notes={appContext.notes} navigation={navigation} /> : 
        <NotesMapView notes={appContext.notes} navigation={navigation} />;
    const noNotesMsg = <View style={{marginTop: 80}}><Text style={styles.noNotesText}>You dont have any notes. Press New Note to add one!</Text></View>;
    const newNoteBtn = <Button title={'New Note'} onPress={() => navigation.navigate("NotesScreen", { notes: notesArr })} />;
    const displayName = appContext.user;
    const capitalizedDisplayName = displayName ? displayName.charAt(0).toUpperCase() + displayName.slice(1) : '*Username here*';

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#F5F5F5', 'grey', 'white']} style={styles.linearGradient}>
                <View style={styles.welcomeMsg}>
                    <Text style={styles.welcomeTxt}>{`Welcome ${capitalizedDisplayName}!`}</Text>
                </View>
                {notesArr.length ? <View style={styles.listViewBtnsContainer}>
                    <Button title={'New Note'} onPress={() => navigation.navigate("NotesScreen", { notes: notesArr })} />
                </View> : null}
                {notesArr.length ? notesViewToDisplay : noNotesMsg}
                <View style={[styles.btnsWrapper, { height: notesArr.length ? 180 : 400 }]}>
                    {notesArr.length ? 
                        <View style={styles.listViewBtnsContainer}>
                            <Button style={{top: 50}} title={'Note List'} onPress={() => setIsListView(true)} />
                            <Text>  ||  </Text>
                            <Button title={'Note Map'} onPress={() => setIsListView(false)} />
                        </View> 
                        : newNoteBtn}
                        {notesArr.Length ? <Button title={'Clear All Notes'} onPress={()=> appContext.setNotes([])} /> : null}
                    <Button style={styles.logoutBtn} title={'Logout'} onPress={() => appContext.setUser(false)} />
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    btnsWrapper:{
        marginTop: 50,
        justifyContent: "space-between"
    },
    container: {
        height: '100%',
        justifyContent: 'space-evenly'
    },
    text: {
        textAlign: 'center'
    },
    listViewBtnsContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center'
    },
    logoutBtn: {
        color: 'green'
    },
    noNotesText: {
        width: '80%',
        textAlign: 'center',
        alignSelf: 'center',
        fontFamily: 'Helvetica Neue',
        fontSize: 20
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    welcomeMsg: {
        marginTop: 50,
        alignItems: 'center'
    },
    welcomeTxt: {
        fontSize: 22
    }
});