import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ContactForm = ({ onContactSubmit }) => {

    const navigation = useNavigation()

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [consultation, setConsultation] = useState('');
    const [description, setDescription] = useState('');



    return (
        <View style={styles.container}>
            <TextInput
                placeholder="NOMBRE DE USUARIO"
                value={userName}
                onChangeText={setUserName}
                style={styles.input}
            />
            <TextInput
                placeholder="EMAIL"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                keyboardType="email-address"
            />
            <TextInput
                placeholder="CONSULTA"
                value={consultation}
                onChangeText={setConsultation}
                style={styles.input}
            />
            <TextInput
                placeholder="DESCRIPCION"
                value={description}
                onChangeText={setDescription}
                style={[styles.input, styles.descriptionInput]} // Estilo adicional para la descripción
                multiline={true}
                numberOfLines={4}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>ENVIAR</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30,
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
    descriptionInput: {
        height: 100, // Ajusta la altura para el campo de descripción
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

export default ContactForm;
