import { Button } from 'react-native';

export function ButtonRow({ setContentToDisplay }) {
    return(
        <>
            <Button title={'Login'} onPress={() => setContentToDisplay('login')} />
            <Button title={'Signup'} onPress={() => setContentToDisplay('signup')} />
        </>
    )
}