import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Datos aleatorios para simular las entradas de tu lista
const articlesData = [
    {
        id: 1,
        category: "VISIÓN AUTOMOTRIZ",
        title: "Suplemento Visión Automotriz Edición 09 Septiembre 2023",
        excerpt: "Encartado en el periódico La Crónica de Hoy. Visión Automotriz es una revista especializada en el sector automotor, donde presenta pruebas de manejo de los nuevos modelos, auto show, entrevistas, reportajes de vehículos y todo lo que acontece en el mundo del ...",
        publishedOn: "Publicado en 11 de Septiembre de 2023"
    },
    {
        id: 2,
        category: "REVISTA MECANICA AUTOMOTRIZ",
        title: "Reputan Tres Veces Importación De Autos Chinos: AMDA.",
        excerpt: "Quedó atrás la crisis, la industria automotriz mexicana crece firme y fuerte. El 19.4% de los autos que se venden en México son chinos. Y esto apenas empieza.....",
        publishedOn: "Publicado en 11 de Septiembre de 2023"
    },
    {
        id: 3,
        category: "REVISTA MECANICA AUTOMOTRIZ",
        title: "Reputan Tres Veces Importación De Autos Chinos: AMDA.",
        excerpt: "Quedó atrás la crisis, la industria automotriz mexicana crece firme y fuerte. El 19.4% de los autos que se venden en México son chinos. Y esto apenas empieza.....",
        publishedOn: "Publicado en 11 de Septiembre de 2023"
    },
    {
        id: 4,
        category: "REVISTA MECANICA AUTOMOTRIZ",
        title: "Reputan Tres Veces Importación De Autos Chinos: AMDA.",
        excerpt: "Quedó atrás la crisis, la industria automotriz mexicana crece firme y fuerte. El 19.4% de los autos que se venden en México son chinos. Y esto apenas empieza.....",
        publishedOn: "Publicado en 11 de Septiembre de 2023"
    },
    // ...más artículos...
];

const ArticleComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [articles, setArticles] = useState(articlesData);

    const handleSearch = (text) => {
        setSearchQuery(text);
        if (!text.trim()) {
            setArticles(articlesData);
        } else {
            const filteredArticles = articlesData.filter(
                (article) =>
                    article.title.toLowerCase().includes(text.toLowerCase()) ||
                    article.category.toLowerCase().includes(text.toLowerCase()) ||
                    article.excerpt.toLowerCase().includes(text.toLowerCase())
            );
            setArticles(filteredArticles);
        }
    };

    return (
        <View style={styles.container}>

            <View style={styles.searchContainer}>
                <TextInput
                    placeholder="Buscar......"
                    value={searchQuery}
                    onChangeText={handleSearch}
                    style={styles.searchInput}
                />
                <Ionicons name="search" size={25} color="black" />
            </View>
            <ScrollView style={styles.scrollView}>
                {articles.map((article, index) => (
                    <View key={`article-${index}`} style={styles.articleContainer}>
                        <Text style={styles.category}>{article.category}</Text>
                        <Text style={styles.title}>{article.title}</Text>
                        <Text style={styles.excerpt}>{article.excerpt}</Text>
                        <Text style={styles.publishedOn}>{article.publishedOn}</Text>
                        <TouchableOpacity style={styles.readMoreButton}>
                            <Text style={styles.readMoreText}>VER MÁS..</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    scrollView: {
        padding: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
    },
    searchInput: {
        flex: 1,
        padding: 8,
        marginRight: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black',
    },
    articleContainer: {
        marginBottom: 20,
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    category: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'orange',
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5,
    },
    excerpt: {
        fontSize: 12,
        marginTop: 5,
    },
    publishedOn: {
        fontSize: 10,
        color: 'gray',
        marginTop: 5,
    },
    readMoreButton: {
        marginTop: 10,
    },
    readMoreText: {
        color: 'blue',
        fontWeight: 'bold',
    },
});

export default ArticleComponent;
