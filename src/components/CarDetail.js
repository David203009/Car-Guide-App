import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const menuItems = [
    {
        id: '1',
        title: 'Guia Tecnica',
        icon: 'book-outline',
    },
    {
        id: '2',
        title: 'Articulos de Mantenimiento',
        icon: 'build-outline',
    },
    {
        id: '3',
        title: 'Terminos Tecnicos',
        icon: 'glasses-outline',
    },
    {
        id: '4',
        title: 'Preguntas Frecuentes',
        icon: 'help-circle-outline',
    },
];

const MenuItem = ({ title, icon, onPress }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
        <Ionicons name={icon} size={24} style={styles.menuIcon} />
        <Text style={styles.menuTitle}>{title}</Text>
        <Ionicons name="chevron-forward" size={24} />
    </TouchableOpacity>
);

const CarDetails = ({ onItemPress, onChatPress }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image
                source={require('../../public/auto1.jpeg')} // Reemplaza con la imagen de tu auto
                style={styles.carImage}
            />
            <FlatList
                data={menuItems}
                renderItem={({ item }) => (
                    <View>
                        <MenuItem
                            title={item.title}
                            icon={item.icon}
                            onPress={() => {
                                if (item.id == 1) {
                                    navigation.navigate('TechnicalGuide')
                                }
                                if (item.id == 2) {
                                    navigation.navigate('Article')
                                }
                                if (item.id == 3) {
                                    Alert.alert("No definido", "falta agregar funcionalidad")
                                }
                                if (item.id == 4) {
                                    navigation.navigate('FAQs')
                                }
                            }}
                        />
                        <View style={styles.separator} />
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
            <TouchableOpacity style={styles.chatButton} onPress={() => navigation.navigate('Chat')}>
                <Text style={styles.chatButtonText}>Chat</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    carImage: {
        width: '100%',
        height: 200, // Ajusta la altura según sea necesario
        resizeMode: 'cover',
    },
    separator: {
        height: 2,
        backgroundColor: 'black'
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    menuIcon: {
        marginRight: 10,
    },
    menuTitle: {
        flex: 1,
        fontSize: 18,
    },
    chatButton: {
        backgroundColor: 'black',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    chatButtonText: {
        color: 'white',
        fontSize: 18,
    },
    // Añade cualquier estilo adicional que puedas necesitar
});

export default CarDetails;
