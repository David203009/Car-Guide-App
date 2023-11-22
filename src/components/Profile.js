import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView,TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const NotificationItem = ({ children }) => (
    <View style={styles.notificationItem}>
        <Ionicons name="alert-circle" size={20} color="#FFCC00" style={styles.notificationIcon} />
        <Text style={styles.notificationText}>{children}</Text>
    </View>
);

const UserProfile = ({ userName, userEmail, notifications }) => {
    // const safeNotifications = Array.isArray(notifications) ? notifications : [];
    const safeNotifications = ["primera notificacion", "primera notificacion", "primera notificacion", "primera notificacion"];
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')} >
                    <Ionicons name="pencil" size={25} color="black" style={styles.editIcon} />
                </TouchableOpacity>
            </View>

            <View style={styles.profileSection}>
                <Image
                    source={require('../../public/logo1.jpg')} // Reemplaza con la ruta de tu imagen
                    style={styles.profilePic}
                />
                <Text style={styles.userName}>{userName} Juan Perez</Text>
                <Text style={styles.userEmail}>{userEmail}juan@gmail.com</Text>
            </View>

            <View style={styles.notificationsSection}>
                <Text style={styles.notificationsHeader}>Notificaciones:</Text>
                {safeNotifications.map((notification, index) => (
                    <NotificationItem key={index}>{notification}</NotificationItem>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row-reverse',
        padding: 20,
    },
    profileSection: {
        alignItems: 'center',
        marginVertical: 20,
    },
    profilePic: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: 'red',
        borderWidth: 2,
    },
    userName: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    userEmail: {
        fontSize: 16,
        color: 'gray',
    },
    notificationsSection: {
        padding: 20,
    },
    notificationsHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    notificationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        padding: 18,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity:0.5,
        shadowRadius: 1,
        elevation: 10,
    },
    notificationIcon: {
        marginRight: 10,
    },
    notificationText: {
        fontSize: 14,
        color: '#333',
    },
    editIcon: {
        bottom: 0,
        right: 0,
        backgroundColor: 'white',
        padding: 6,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity:0.5,
        shadowRadius: 1,
        elevation: 10,
    },
});

export default UserProfile;
