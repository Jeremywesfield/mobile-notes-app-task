import { useState, useContext, useEffect } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';
import uuid from 'react-native-uuid';
import { saveData } from '../../../asyncStorage/write';
import AppContext from '../../context/context'

export function NotesScreen({ route, navigation }) {
    const [title, setTitle] = useState('Title');
    const [date, setDate] = useState(`${new Date().toLocaleString()}`);
    const [text, setText] = useState('');
    const appContext = useContext(AppContext);

    const { selectedNote } = route.params;
    const notesArr = [...appContext.notes];

    useEffect(()=>{
        if(selectedNote){
            setTitle(selectedNote.title);
            setDate(selectedNote.date);
            setText(selectedNote.text);
        }
    },[]);
 
    const handleSave = () => {
        const newNote = {
            title,
            date,
            text,
            location: appContext.location,
            id: uuid.v4()
        }
        notesArr.push(newNote);
        appContext.setNotes(notesArr);
        saveData(notesArr)
        navigation.goBack();
    }
    const handleDelete = () => {
        if (selectedNote) {
            appContext.notes.forEach((note, index) => {
                if(note.id === selectedNote.id) {
                    notesArr.splice(index, 1);
                    appContext.setNotes(notesArr)
                }
            })
        }
        navigation.goBack()
    }

    return (
        <View style={{marginTop: 50}}>
            <View style={styles.noteContainer}>
                <View>
                    <TextInput value={title} style={styles.textInput} onChangeText={(titleInput) => setTitle(titleInput)}></TextInput>
                    <TextInput value={date} style={styles.textInput}></TextInput>
                </View>
                <TextInput value={text} style={[styles.textInput, styles.noteInput]} onChangeText={(textInput) => setText(textInput)}></TextInput>
            </View>
            <View style={styles.buttonsContainer}>
                <Button title={'Save'} onPress={handleSave} />
                <Button title={'Delete'} onPress={handleDelete} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    noteContainer: {
        height: '80%',
        alignItems: 'center'
    },
    buttonsContainer: {
        top: 70,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    textInput:{
        height: 36,
        margin: 12,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, .4)',
        padding: 10,
        width: 200,
        borderRadius: 5,
        textAlign: 'center'
    },
    noteInput: {
        height: 400,
        width: '90%',
        textAlign: 'left',
        flexWrap: 'wrap'    }
});