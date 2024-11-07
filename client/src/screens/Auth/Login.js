import { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { userContext } from '../../context/UserContext';




const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const { setUser } = useContext(userContext);

    const handleLogin = () => {
        if (!email) {
            setErrorMessage('Input an email')

        } else if (!email) {
            setErrorMessage('Input a password')
        }
        setErrorMessage('')
        try {
            // TODO MORE ROBUST ACTUALLY CONNECT TO FIREBASE
            const isAuthenticated = true; // TODO PLACEHOLDER
            const userData = { id: '123', name: 'John Dope', email }

            if (isAuthenticated) {
                setUser(userData);
            } else {
                setErrorMessage('Login failed! Incorrect email or password')
            }

        } catch (e) {
            console.log(e)
            setErrorMessage(e.message)
        }
    }


    return (
        <View style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                keyboardType='email-address'
                autoCapitalize='none'
            />

            <TextInput
                placeholder='Password'
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                secureTextEntry
            />
            {errorMessage && <Text>{errorMessage}</Text>}

            <TouchableOpacity style={styles.button}
                onPress={() => handleLogin(navigation)}
            >
                <Text>
                    Log in
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('EmailOnboarding')}
            >
                <Text>
                    Create Account
                </Text>
            </TouchableOpacity>
        </View>
    )
}


export default Login;


const styles = StyleSheet.create({
    input: {
        width: '50%',
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    button: {
        height: 30,
        width: '50%',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})