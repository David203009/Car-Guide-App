import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const EditProfile = ({ onSave, onCancel, onEditImage, userData }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Ionicons name="close-circle-outline" size={30} color="red" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Ionicons name="save" size={30} color="green" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.profileImageContainer} onPress={onEditImage}>
                {/* <Image source={{ uri: userData.profileImageUrl }} style={styles.profileImage} /> */}
                <Image source={require('../../public/logo1.jpg')} style={styles.profileImage} />
                <Ionicons name="pencil" size={20} color="black" style={styles.editIcon} />
            </TouchableOpacity>
            <View style={styles.inputContainer}>
                <TextInput
                    value={userName}
                    onChangeText={setUserName}
                    placeholder="USER NAME"
                    style={styles.input}
                />
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="PASSWORD"
                    secureTextEntry
                    style={styles.input}
                />
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="EMAIL"
                    keyboardType="email-address"
                    style={styles.input}
                />
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        marginBottom: 20,
    },
    profileImageContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    editIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: 'white',
        padding: 4,
        borderRadius: 10,
    },
    inputContainer: {
        alignSelf: 'stretch',
    },
    input: {
        padding: 15,
        marginVertical: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 5,
        borderRadius: 5,
    },
});

export default EditProfile;
