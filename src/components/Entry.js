import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EntryScreen = () => {

    const navigation = useNavigation();

    const handleRegisterPress = () => {
        navigation.navigate('Register');
     };

     const handleLoginPress = () => {
        navigation.navigate('Login');
     };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                {/* Asegúrate de agregar tu imagen del coche en la carpeta de assets con el nombre car_logo.png */}
                <Image source={require('../../public/logo1.jpg')} style={styles.logo} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLoginPress}>
                    <Text style={[styles.buttonText, styles.loginButtonText]}>LOG IN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.registerButton]} onPress={handleRegisterPress}>
                    <Text style={styles.buttonText}>REGISTRARSE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        grid: 1,
        height: "100%",
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    logo: {
        width: 300, // Ajusta el ancho según tu diseño
        height: 300, // Ajusta la altura según tu diseño
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10
    },
    button: {
        paddingVertical: 10,
        borderRadius: 5,
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    loginButton: {
        backgroundColor: '#fff',
    },
    registerButton: {
        backgroundColor: 'red',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    loginButtonText: {
        color: '#000',
    },
});

export default EntryScreen;
