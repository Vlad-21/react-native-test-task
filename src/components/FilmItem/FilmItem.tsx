import React from 'react';
import { Text, View, Image } from 'react-native';

import { IImage } from '../../types/film.types';
import {IFilmItemProps} from "./FilmItem.types";

import {styles} from "./FilmItem.style";

const FilmItem: React.FC<IFilmItemProps> = ({ item }) => {
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
                <View style={styles.textNameContainer}>
                    <Text numberOfLines={1} style={styles.textName}>
                        {item.show.name}
                    </Text>
                </View>
                <Text style={styles.rating}>
                    {item.show.rating.average || 'waiting for more votes'}
                </Text>
            </View>
        </View>
    );
};

export default FilmItem;
