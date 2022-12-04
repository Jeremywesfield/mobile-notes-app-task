import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { getData } from '../../../../asyncStorage/read'
export function NotesListView({ notes, navigation  }) {

    const handleTitlePress = async (item) => {
        console.log("we are init? ", await getData());
        navigation.navigate("NotesScreen", { selectedNote: item });
    }

    return (
        <View style={styles.container}>
            <FlatList 
                keyExtractor={(note) => note.id}
                data={notes}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => handleTitlePress(item)}>
                            <Text style={styles.title}>{item.title}</Text>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'black',
        height: 400,
        padding: 5,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    title: {
        margin: 10,
        textAlign: 'left',
        fontFamily: 'Arial'
    }
});