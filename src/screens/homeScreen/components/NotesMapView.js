import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

export function NotesMapView({ notes, navigation  }) {

    const handleNotePress = (item) => {
        navigation.navigate("NotesScreen", { selectedNote: item })
    }
    const numColumns = 3;
    const arrangeTitleForView = (title) => {
        return title.split("").filter((letter, index) => index < 9);
    }
    const handleMapBorder = (index) => {
        const isEvenIndex = index % 2 == 0;
        return { borderColor: isEvenIndex ? "orange" : "grey" };
    }

    return (
        <View style={styles.container}>
            <FlatList 
                keyExtractor={(note) => note.id}
                data={notes}
                numColumns={numColumns}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity style={[styles.mapView, handleMapBorder(index) ]} onPress={() => handleNotePress(item)}>
                            <Text style={styles.title}>{arrangeTitleForView(item.title)}</Text>
                            <Text>{item.date.replace(/,.*$/,"")}</Text>
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
        flexDirection: 'row',
        padding: 5,
    },
    title: {
        margin: 10
    },
    mapView: {
        borderWidth: 1,
        padding: 2,
        height: 70,
        width: 110,
        margin: 2,
        alignItems: 'center'
    }
});