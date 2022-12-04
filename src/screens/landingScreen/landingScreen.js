import React, { useContext } from "react";
import { View } from 'react-native'
import { LandingModal } from "./components/LandingModal";
import { HomeScreen } from '../homeScreen/HomeScreen';
import AppContext from "../../context/context";
import { getUserLocation} from '../homeScreen/logic/getUserLocation';
import { getData as getDataFromStorage } from "../../../asyncStorage/read";

export function LandingScreen({ navigation, route }) {
   
    const appContext = useContext(AppContext);

    if (!appContext.location) {
        getUserLocation(appContext).then((location) => {
            if (location) {
                appContext.setLocation ({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude
                })
            }
        });
        const data = getDataFromStorage(true).then((res) => {
            appContext.setUser(res? res.userName : "");
        });
    }

    const screenToShow = appContext.user ? 
        <HomeScreen navigation={navigation} route={route} /> 
        : <LandingModal />;

    return (
        <View>
            {screenToShow}
        </View>
    );
}