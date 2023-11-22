import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const faqs = [
    {
        question: '¿CUÁNTO DURA UNA BUJÍA DE PLATINO?',
        answer: 'Por electrodo (60.000 km en total), mientras que las bujías de platino pueden durar hasta 80.000 km. Por cada electrodo. Estas distancias son orientativas, pero funcionan principalmente para saber cuándo debes revisar las bujías de tu coche.',
    },
    {
        question: '¿CUÁNTO DURA UNA BUJÍA DE PLATINO?',
        answer: 'Por electrodo (60.000 km en total), mientras que las bujías de platino pueden durar hasta 80.000 km. Por cada electrodo. Estas distancias son orientativas, pero funcionan principalmente para saber cuándo debes revisar las bujías de tu coche.',
    },
    {
        question: '¿CUÁNTO DURA UNA BUJÍA DE PLATINO?',
        answer: 'Por electrodo (60.000 km en total), mientras que las bujías de platino pueden durar hasta 80.000 km. Por cada electrodo. Estas distancias son orientativas, pero funcionan principalmente para saber cuándo debes revisar las bujías de tu coche.',
    },
    {
        question: '¿CUÁNTO DURA UNA BUJÍA DE PLATINO?',
        answer: 'Por electrodo (60.000 km en total), mientras que las bujías de platino pueden durar hasta 80.000 km. Por cada electrodo. Estas distancias son orientativas, pero funcionan principalmente para saber cuándo debes revisar las bujías de tu coche.',
    },
    {
        question: '¿CUÁNTO DURA UNA BUJÍA DE PLATINO?',
        answer: 'Por electrodo (60.000 km en total), mientras que las bujías de platino pueden durar hasta 80.000 km. Por cada electrodo. Estas distancias son orientativas, pero funcionan principalmente para saber cuándo debes revisar las bujías de tu coche.',
    },
];

const QuestionsComponent = () => {
    const [selectedFAQ, setSelectedFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setSelectedFAQ(selectedFAQ === index ? null : index);
    };

    return (
        <ScrollView style={styles.container}>
            {faqs.map((faq, index) => (
                <View key={index} style={styles.faqItem}>
                    <TouchableOpacity onPress={() => toggleFAQ(index)} style={styles.questionContainer}>
                        <Text style={styles.question}>{faq.question}</Text>
                        <Text style={styles.dropdownArrow}>{selectedFAQ === index ? '▲' : '▼'}</Text>
                    </TouchableOpacity>
                    {selectedFAQ === index && <Text style={styles.answer}>{faq.answer}</Text>}
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    faqItem: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
    },
    questionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    question: {
        fontWeight: 'bold',
    },
    answer: {
        marginTop: 5,
        fontSize: 12,
    },
    dropdownArrow: {
        fontSize: 16,
    },
   
});

export default QuestionsComponent;
