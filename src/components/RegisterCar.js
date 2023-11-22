import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterCar = ({ onRegisterCar }) => {

    const navigation = useNavigation()
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [color, setColor] = useState('');
    const [engineNumber, setEngineNumber] = useState('');
    const [mileage, setMileage] = useState('');

   

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Marca"
                value={brand}
                onChangeText={setBrand}
                style={styles.input}
            />
            <TextInput
                placeholder="MODELO"
                value={model}
                onChangeText={setModel}
                style={styles.input}
            />
            <TextInput
                placeholder="AÑO"
                value={year}
                onChangeText={setYear}
                style={styles.input}
                keyboardType="number-pad"
            />
            <TextInput
                placeholder="COLOR"
                value={color}
                onChangeText={setColor}
                style={styles.input}
            />
            <TextInput
                placeholder="NÚMERO DE MOTOR"
                value={engineNumber}
                onChangeText={setEngineNumber}
                style={styles.input}
            />
            <TextInput
                placeholder="KILOMETRAJE"
                value={mileage}
                onChangeText={setMileage}
                style={styles.input}
                keyboardType="number-pad"
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cars')}>
                <Text style={styles.buttonText}>REGISTRAR COCHE</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30, // Adjust the padding as needed
        alignItems: 'center',
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

export default RegisterCar;
