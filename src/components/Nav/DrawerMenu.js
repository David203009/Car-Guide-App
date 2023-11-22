// DrawerMenu.js
import React, {useRef} from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const DrawerMenuItem = ({ iconName, title, onPress }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
        <Ionicons name={iconName} size={24} color="#333" />
        <Text style={styles.menuItemText}>{title}</Text>
    </TouchableOpacity>
);

const DrawerMenu = ({ isOpen, onClose, userName, userEmail }) => {

    const navigation = useNavigation();
    const drawerWidth = 250;
    const drawerAnimation = useRef(new Animated.Value(isOpen ? 0 : -drawerWidth)).current;

    React.useEffect(() => {
        Animated.timing(drawerAnimation, {
            toValue: isOpen ? 0 : -drawerWidth,
            duration: 250,
            useNativeDriver: true,
        }).start();
    }, [isOpen]);

    return (
        <Animated.View
            style={[
                styles.drawer,
                {
                    transform: [{ translateX: drawerAnimation }],
                },
            ]}
        >
            <View style={styles.header}>
                <TouchableOpacity style={styles.header} onPress={() => navigation.navigate('Profile')}>
                    <Image
                        source={require('../../../public/profile.png')} // Reemplaza con la ruta de tu imagen
                        style={styles.profilePic}
                    />
                    <Text style={styles.userName}>{userName} Juan Martinez</Text>
                    <Text style={styles.userEmail}>{userEmail}Juan@gmail.com</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.menuItemsContainer}>
                <DrawerMenuItem iconName="home-outline" title="Inicio" onPress={onClose} />
                <DrawerMenuItem iconName="car-outline" title="Vehiculos" onPress={() => navigation.navigate('Cars')} />
                <DrawerMenuItem iconName="help-buoy-outline" title="Solicitar Asistencia" onPress={onClose} />
                <DrawerMenuItem iconName="call-outline" title="Contacto" onPress={() => navigation.navigate('Contact')} />
                <DrawerMenuItem iconName="information-circle-outline" title="Sobre Nosotros" onPress={() => navigation.navigate('AboutUs')} />
                <DrawerMenuItem iconName="medal-outline" title="Obtener Premium" onPress={() => navigation.navigate('Premium')} />
                <DrawerMenuItem iconName="language-outline" title="Idioma (en)" onPress={() => navigation.navigate('Language')} />
                <DrawerMenuItem iconName="log-out-outline" title="Sign off" onPress={() => navigation.navigate('Entry')} />
            </ScrollView>
            <Text style={styles.footerText}>© 2023 Car Guide. Todos los derechos reservados.</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    drawer: {
        position: 'absolute',
        width: 250,
        height: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingTop: 0, // Para evitar la barra de estado
    },
    header: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#ececec'
    },
    profilePic: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    userEmail: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 10,
    },
    menuItemsContainer: {
        flex: 1,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingLeft: 20,
    },
    menuItemText: {
        fontSize: 16,
        marginLeft: 20,
    },
    footerText: {
        padding: 20,
        textAlign: 'center',
        fontSize: 12,
        color: 'gray',
    },
});

export default DrawerMenu;
