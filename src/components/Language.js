import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const languages = [
    { name: 'Español', code: 'es' },
    { name: 'Portugues', code: 'po' },
    { name: 'Chino', code: 'ch' },
    { name: 'Italiano', code: 'ita' },
    { name: 'Frances', code: 'fr' },
    { name: 'Japones', code: 'jpn' },
    { name: 'Ruso', code: 'ru' },
];

const LanguageSelector = ({ currentLanguageCode, onSelectLanguage }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Idioma</Text>
            <Text style={styles.subHeader}>My languages:</Text>
            <TouchableOpacity style={styles.languageItem}>
                <Text style={styles.languageText}>Ingles (en)</Text>
            </TouchableOpacity>
            <Text style={styles.subHeader}>Other language:</Text>
            <ScrollView>
                {languages.map((language, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.languageItem}

                    >
                        <Text style={styles.languageText}>{`${language.name} (${language.code})`}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <Text style={styles.footerText}>© 2023 Car Guide. Todos los derechos reservados.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
        textAlign: 'center',
    },
    subHeader: {
        fontSize: 16,
        padding: 15,
        paddingTop: 20,
        paddingBottom: 5,
        backgroundColor: '#f0f0f0',
    },
    languageItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    languageText: {
        fontSize: 16,
    },
    footerText: {
        padding: 20,
        textAlign: 'center',
        fontSize: 12,
        color: 'gray',
    },
});

export default LanguageSelector;
