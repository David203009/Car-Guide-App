import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const TechnicalGuideComponent = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Interpretación de Información Técnica Automotriz</Text>
            <Text style={styles.subtitle}>IDENTIFICACIÓN DE ESQUEMAS ELECTRICOS</Text>

            {/* ... other sections here ... */}

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>OBJETIVO DE LA EXPERIENCIA</Text>
                <Text style={styles.sectionContent}>
                    Desarrollar habilidades técnicas orientadas al análisis e interpretación correcta con el fin de resolución de servicios técnicos automotrices.
                </Text>
            </View>


            <View style={styles.imageContainer}>
                <Image source={require('../../public/auto2.jpeg')} style={styles.image} />
            </View>


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginTop: 20
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    section: {
        marginTop: 10,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    sectionContent: {
        fontSize: 14,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    image: {
        width: '100%', // Puedes ajustar esto según la necesidad de tu diseño
        height: 200, // Altura fija para la imagen, ajusta según necesites
        resizeMode: 'contain', // Esto asegura que la imagen se escale correctamente dentro de las dimensiones
      },
    // Estilos para las imágenes y otros componentes aquí...
});

export default TechnicalGuideComponent;
