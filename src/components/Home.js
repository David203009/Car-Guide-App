// HomeScreens.js
import React, { useState, useCallback } from 'react';
import { View, StyleSheet, TouchableOpacity, SafeAreaView, Image, Text, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import DrawerMenu from './Nav/DrawerMenu';
import { Callout, Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

const HomeScreens = () => {

    const [selectedType, setSelectedType] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const [markers, setMarkers] = useState({
        car: [],
        crane: [],
        oil: [],
        wash: [],
    });

    const navigation = useNavigation()
    const iconImages = {
        car: require('../../public/car.png'),
        crane: require('../../public/crane.png'),
        oil: require('../../public/oil.png'),
        wash: require('../../public/wash.png'),
        // ... otros tipos e imágenes
    };

    const generateRandomPositions = (count) => {
        let positions = [];
        for (let i = 0; i < count; i++) {
            const latitude = -17.413977 + (Math.random() - 0.5) * 0.05; // Rango ajustado
            const longitude = -66.165322 + (Math.random() - 0.5) * 0.05; // Rango ajustado
            positions.push({ latitude, longitude });
        }
        return positions;
    };
    
    const handleIconClick = async (type, event) => {
        // Detener la propagación del evento para evitar activar otros manejadores
        if (event) {
            event.stopPropagation();
        }

        // Genera 3 nuevas posiciones aleatorias
        const newPositions = await generateRandomPositions(10);

        // Actualiza el estado con las nuevas posiciones para el tipo seleccionado
        await setMarkers({
            car: [],
            crane: [],
            oil: [],
            wash: [],
            [type]: newPositions,
        });

        // Actualiza el tipo seleccionado
        await setSelectedType(type);
    };


    const toggleDrawer = useCallback(() => {
    setIsDrawerOpen(prevState => !prevState);
}, []);

    return (
        <View style={styles.container}>
            {/* Botón de menú para abrir el drawer */}
            <TouchableOpacity
                style={styles.menuButton}
                onPress={toggleDrawer}
            >
                <Ionicons name="menu" size={40} color="black" />
            </TouchableOpacity>

            {/* Mapa que ocupa todo el componente */}
            <MapView style={styles.map} region={{
                latitude: -17.413977,
                longitude: -66.165322,
                latitudeDelta: 0.0922, // Puedes ajustar estos valores para cambiar el zoom
                longitudeDelta: 0.0421,
            }} >
                {Object.entries(markers).map(([type, positions]) =>
                    positions.map((position, index) => (
                        <Marker
                            key={`${type}-${index}`}
                            coordinate={position}
                        // No es necesario el onPress si no estás cambiando el estado o haciendo otra acción
                        >
                            <View style={styles.markerIcon}>
                                <Image
                                    source={iconImages[type]}
                                    style={styles.markerImage}
                                    resizeMode="contain"
                                />
                            </View>
                            <Callout tooltip style={styles.customView} onPress={() => navigation.navigate("Worker")}>
                                <View style={styles.calloutView}>
                                    <Text style={styles.calloutText}>Direccion: Av.15</Text>
                                    <Text style={styles.calloutText}>Celular: 12345876</Text>
                                </View>
                            </Callout>
                        </Marker>


                    ))
                )}
            </MapView>

            {/* Menú lateral personalizado */}
            <DrawerMenu isOpen={isDrawerOpen} onClose={toggleDrawer} />

            {/* Barra de botones inferior */}
            <View style={styles.bottomBar}>

                {Object.keys(markers).map((type) => (
                    <TouchableOpacity
                        key={type}
                        style={[
                            styles.iconButton,
                            { backgroundColor: selectedType === type ? 'red' : 'white' }
                        ]}
                        onPress={(event) => handleIconClick(type, event)}
                    >
                        <Image
                            source={iconImages[type]}
                            style={styles.buttonImage}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                ))}

            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    menuButton: {
        position: 'absolute',
        top: 20,
        left: 17,
        zIndex: 10,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'black',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        borderTopWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
    },
    iconButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60, // Ajuste del ancho del botón
        height: 60, // Ajuste de la altura del botón
        borderRadius: 30, // Ajuste para redondear los botones
        backgroundColor: 'white', // Fondo blanco para los botones
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        elevation: 5,
    },
    markerIcon: {
        // Puedes personalizar esto como quieras
        padding: 10,
        borderRadius: 20,
        backgroundColor: 'white', // fondo del ícono del marcador
        // Agrega sombra o cualquier otro estilo que desees
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,

        width: 30, // Menor para que los marcadores sean más pequeños
        height: 30,
        borderRadius: 25, // La mitad del ancho y alto para hacerlos redondos
        backgroundColor: 'white', // Fondo del ícono del marcador
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden', // Asegura que la imagen no se salga del borde redondeado
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#000',

    },
    markerImage: {
        width: 22, // Menor para que la imagen dentro del marcador sea más pequeña
        height: 22,
        borderRadius: 25, // La mitad del ancho y alto para hacerlas redondas

    },
    iconButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60, // Ajuste del ancho del botón
        height: 60, // Ajuste de la altura del botón
        borderRadius: 50, // Ajuste para redondear los botones a forma circular
        backgroundColor: 'white', // Fondo blanco para los botones
        // ... otros estilos
    },
    buttonImage: {
        width: 50, // Menor para que las imágenes sean más pequeñas
        height: 50,
        borderRadius: 25, // La mitad del ancho y alto para hacerlas redondas
    },
    calloutView: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        backgroundColor: 'white',
        borderRadius: 6,
        padding: 10,
        width: 150, // o la anchura que necesites
        height: 70, // o la altura que necesites
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    calloutText: {
        fontSize: 16,
        marginBottom: 5,
    },
    calloutButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default HomeScreens;
