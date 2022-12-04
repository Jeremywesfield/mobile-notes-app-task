import { View, Text } from 'react-native';

export function WelcomeMsg({ style }) {
    return (
        <View> 
            <Text style={style}>Welcome to Our Notes App!</Text>
        </View>
    );
}