import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Rating } from 'react-native-ratings';

const WorkerProfile = () => {
    const [rating, setRating] = useState(3);

    const onWhatsAppPress = () => {
        // Asegúrate de usar un número en formato internacional y sin espacios ni caracteres especiales
        const phoneNumber = '77987310';
        Linking.openURL(`whatsapp://send?phone=${phoneNumber}`);
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../../public/profile.png')} // Cambia esto por la ruta de tu imagen
                style={styles.profilePic}
            />
            <Text style={styles.userName}>Lucas Ramirez</Text>
            <Rating
                type='star'
                ratingCount={5}
                imageSize={40}
                showRating
                onFinishRating={setRating}
                value={rating}
                style={styles.rating}
            />
            <Text style={styles.workshopInfo}>Informacion del Mecanico</Text>
            <Text style={styles.address}>Av 16</Text>
            <TouchableOpacity onPress={onWhatsAppPress} style={styles.whatsappButton}>
                <Image
                    source={require('../../public/watsap.png')} // Cambia esto por la ruta de tu icono de WhatsApp
                    style={styles.whatsappIcon}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'start',
        padding: 20,
        backgroundColor: 'white',
    },
    profilePic: {
        width: 100,
        height: 100,
        borderRadius: 50, // Esto hará que la imagen sea redonda
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 8,
    },
    rating: {
        paddingVertical: 10,
    },
    workshopInfo: {
        fontSize: 16,
        margin: 4,
        textAlign: 'center',
        // Aquí podrías agregar más estilos para la información del taller
    },
    address: {
        fontSize: 16,
        margin: 4,
    },
    whatsappButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#fff', // Color de WhatsApp
        padding: 10,
        borderRadius: 50,
    },
    whatsappIcon: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
});

export default WorkerProfile;
