import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async (isOnAppOpen) => {
    console.log("trying to read data", isOnAppOpen);
    const STORAGE_KEY = isOnAppOpen ? '@user_login' : '@user_input';
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }
  