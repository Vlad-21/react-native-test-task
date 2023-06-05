import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    NativeSyntheticEvent,
    TextInputChangeEventData,
} from 'react-native';
import { getFilsList } from '../../service/HttpService';
import { IFilm } from '../../types/film.types';

interface ISearchComponentProps {
    setFilms: (films: IFilm[]) => void;
}

const SearchComponent: React.FC<ISearchComponentProps> = ({ setFilms }) => {
    const [filmName, setFilmName] = useState<string>('');

    const handleInputChange = (event: string): void => {
        setFilmName(event);
        if (filmName.length >= 1) {
            getFilsList(filmName).then((result: Array<IFilm>) => {
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

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 50,
    },
    input: {
        width: '90%',
        height: 40,
        margin: 12,
    },
});

export default SearchComponent;
