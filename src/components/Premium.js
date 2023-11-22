import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

// Obtener las dimensiones de la pantalla
const { width } = Dimensions.get('window');

const PriceCard = ({ planName, price, features, onGetPlan }) => (
    <View style={styles.card}>
        <Text style={styles.planName}>{planName}</Text>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.perMonth}>por Mes</Text>
        <View style={styles.featuresContainer}>
            {features.map((feature, index) => (
                <Text key={index} style={styles.feature}>{feature}</Text>
            ))}
        </View>
        <TouchableOpacity onPress={onGetPlan} style={styles.button}>
            <Text style={styles.buttonText}>OBTEBER PLAN</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 20,
        width: width * 0.9, // Utiliza el 90% del ancho de la pantalla
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginVertical: 20, // Agrega un margen vertical
    },
    planName: {
        color: '#1db954',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    price: {
        color: '#333333',
        fontSize: 26,
        fontWeight: 'bold',
    },
    perMonth: {
        color: '#333333',
        fontSize: 16,
        marginBottom: 15,
    },
    featuresContainer: {
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        marginBottom: 15,
    },
    feature: {
        fontSize: 14,
        color: '#666666',
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#1db954',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginTop: 10, // Agrega un margen superior al botón
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

const PricingScreen = () => {
    const pricingPlans = [
        {
            planName: 'PREMIUM',
            price: 'Bs. 59.00',
            features: [
                'Accesso sin Internet',
                'Descuentos en Servicios',
                'Seguridad de cuenta',
            ],
            onGetPlan: () => console.log('Getting Business Plan'),
        },
        
        // ... other pricing plans
    ];

    return (
        <View style={{ flex: 1, justifyContent: 'start', backgroundColor: '#f5f5f5' }}> 
            <View style={{ alignItems: 'center', padding: 10 }}>
                {pricingPlans.map((plan, index) => (
                    <PriceCard key={index} {...plan} />
                ))}
            </View>
        </View>
    );
};

export default PricingScreen;
