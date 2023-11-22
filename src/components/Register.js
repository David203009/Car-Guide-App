import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigation = useNavigation();

    const handleSignUp = () => {
        navigation.navigate('Login');
    };


    return (
        <View style={styles.container}>

            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder="NOMBRE"
            />
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="EMAIL"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                onChangeText={setConfirmEmail}
                value={confirmEmail}
                placeholder="REPETIR EMAIL"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="CONTRASEÑA"
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                placeholder="REPETIR CONTRASEÑA"
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>REGISTRAR</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50, // Adjust the padding as needed
        alignItems: 'center', // Adjust the padding as needed
    },
    input: {
        width: '90%',
        marginVertical: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#000',
        padding: 15,
        width: '90%',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default RegisterScreen;
