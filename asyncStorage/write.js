import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (notes, isOnLogin) => {
    const STORAGE_KEY = isOnLogin ? '@user_login' : '@user_input';

    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
    } catch (e) {
    }
}