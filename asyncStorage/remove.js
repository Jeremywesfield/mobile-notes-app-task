import AsyncStorage from '@react-native-async-storage/async-storage';

export const deleteData = async (isLogout) => {
    try {
        if (isLogout) await AsyncStorage.removeItem('@user_login')
        await AsyncStorage.removeItem('@user_input')
    }   catch(e) {
        console.log("Went in error")
    }
  }
  