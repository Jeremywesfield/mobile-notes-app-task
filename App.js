import { LandingScreen } from "./src/screens/landingScreen/landingScreen";
import { NotesScreen } from "./src/screens/notesScreen/NoteScreen";
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppContext from "./src/context/context";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(false);
  const [notes, setNotes] = useState([]);
  const [location, setLocation] = useState();

  return (
    <NavigationContainer>
      <AppContext.Provider value={{
                 user: user,
                 setUser: setUser,
                 notes: notes,
                 setNotes: setNotes,
                 location, location,
                 setLocation, setLocation
            }}>
        <Stack.Navigator>
          <Stack.Screen name="Notes App" component={LandingScreen} />
          <Stack.Screen name="NotesScreen" component={NotesScreen} />
        </Stack.Navigator>
      </AppContext.Provider>
    </NavigationContainer>
  )
}

