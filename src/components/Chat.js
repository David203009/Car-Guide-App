import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, FlatList, Text, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChatComponent = ({ }) => {
    const [inputText, setInputText] = useState('');
    const messages = [
        {
            id: '1',
            text: '¿Cuáles bujías son mejores?',
            isOwnMessage: true, // false si el mensaje es de otro usuario
            timestamp: new Date('2023-01-01T14:00:00Z'), // Opcional: la fecha y hora del mensaje
            avatar: 'https://example.com/path-to-avatar1.jpg', // Opcional: URL del avatar del usuario
        },
        {
            id: '2',
            text: 'Procesando......',
            isOwnMessage: false, // true si el mensaje es del usuario actual
            timestamp: new Date('2023-01-01T14:01:00Z'),
            avatar: 'https://example.com/path-to-avatar2.jpg',
        },
        // ... más mensajes ...
    ];


    const sendMessage = () => {
        // Aquí iría la lógica para enviar un mensaje, como actualizar el estado o enviar a un backend
        console.log(inputText);
        setInputText(''); // Limpia el input después de enviar
    };

    const renderItem = ({ item }) => (
        <View style={[styles.messageBubble, item.isOwnMessage ? styles.ownMessage : styles.otherMessage]}>
            <Text>{item.text}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={messages}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                style={styles.messageList}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Escribe algo..."
                    value={inputText}
                    onChangeText={setInputText}
                    style={styles.input}
                />
                <TouchableOpacity onPress={sendMessage}>
                    <Ionicons name="send" size={24} color="#000" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    messageList: {
        flex: 1,
        padding: 10
    },
    messageBubble: {
        padding: 10,
        margin: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    ownMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#D1FAD7',
    },
    otherMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#E1E1E1',
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    input: {
        flex: 1,
        marginRight: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 20,
    },
});

export default ChatComponent;
