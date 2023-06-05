import React, { useState } from 'react';
import {
    View,
    TextInput
} from 'react-native';

import { getFilmsList } from '../../service/HttpService';

import { IFilm } from '../../types/film.types';
import {ISearchComponentProps} from "./SearchComponent.types";

import {styles} from "./SearchComponent.style";

const SearchComponent: React.FC<ISearchComponentProps> = ({ setFilms }) => {
    const [filmName, setFilmName] = useState<string>('');

    const handleInputChange = (event: string): void => {
        setFilmName(event);
        if (filmName.length >= 1) {
            getFilmsList(filmName).then((result: Array<IFilm>) => {
                setFilms(result);
            });
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={filmName}
                onChangeText={handleInputChange}
                placeholder="Type the show's name"
            />
        </View>
    );
};

export default SearchComponent;
