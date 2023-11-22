import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps'; // Asegúrate de haber instalado react-native-maps

const AboutComponent = ({ companyInfo, companyAddress, mapRegion }) => {

    const markerCoordinate = {
        latitude: 37.78825,
        longitude: -122.4324,
    };

    return (
        <ScrollView style={styles.container}>
            <Image
                source={require('../../public/logo2.png')} // Reemplaza con la imagen de tu empresa
                style={styles.logo}
            />
            <Text style={styles.companyInfo}>{companyInfo}Informacion de la empresa</Text>

            <Text style={styles.addressTitle}>DIRECCIÓN</Text>
            {/* Aquí puedes utilizar una imagen estática o un componente MapView para un mapa interactivo */}
            <MapView
                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                scrollEnabled={false}
                zoomEnabled={false}
            >
                <Marker coordinate={markerCoordinate} />
            </MapView>

            <Text style={styles.footerText}>© 2023 Car Guide. Todos los derechos reservados.</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    logo: {
        width: '100%',
        height: 200, // Ajusta según las dimensiones de tu logo
        resizeMode: 'contain',
    },
    companyInfo: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
        textAlign: 'center',
        height: 200
    },
    addressTitle: {
        marginHorizontal: 20,
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    map: {
        width: '90%',
        height: 200,
        alignSelf: 'center',
    },
    footerText: {
        textAlign: 'center',
        padding: 20,
        color: 'gray',
    },
});

export default AboutComponent;
