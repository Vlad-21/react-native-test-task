import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { IFilm, IImage } from '../../types/film.types';

const FilmItem: React.FC<{ item: IFilm }> = ({ item }) => {
    const image: IImage = item.show.image;

    return (
        <View style={styles.container}>
            {image?.medium ? (
                <Image style={styles.image} source={{ uri: image?.medium }} />
            ) : (
                <View style={styles.errorView}>
                    <Text style={styles.text}>Image not found</Text>
                </View>
            )}
            <View style={styles.descriptionContainer}>
                <Text numberOfLines={1} style={styles.title}>
                    {item.show.name}
                </Text>
                <Text style={styles.rating}>
                    {item.show.rating.average || 'waiting for more votes'}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        borderWidth: 1,
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#ffffff',
    },
    image: {
        width: 60,
        height: '90%',
        marginLeft: 20,
    },
    errorView: {
        width: 60,
        height: '90%',
        marginLeft: 20,
        borderColor: '#000000',
        borderWidth: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
    },
    descriptionContainer: {
        height: '90%',
        marginLeft: 20,
        display: 'flex',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        overflow: 'hidden',
        maxWidth: 280,
        fontWeight: 600,
    },
    rating: {
        fontSize: 18,
        marginTop: 10,
        color: '#8f8f8f',
    },
});

export default FilmItem;
