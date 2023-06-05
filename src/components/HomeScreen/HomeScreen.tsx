import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import SearchComponent from '../SearchComponent/SearchComponent';
import FilmItem from '../FilmItem/FilmItem';

import { IFilm } from '../../types/film.types';
import { RootStackParamList } from '../../types/types';

import {styles} from "./HomeScreen.style";

const HomeScreen: React.FC = () => {
    const [filmsList, setFilmsList] = useState<Array<IFilm>>();
    const handleGetSearchResult = (list: Array<IFilm>) => {
        setFilmsList(list);
    };

    useEffect(() => {}, [filmsList]);
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const handleItemClick = (item: IFilm): void => {
        navigation.navigate('Details', { item: item });
    };
    return (
        <View style={styles.container}>
            <SearchComponent setFilms={handleGetSearchResult} />
            {filmsList?.length ? (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    style={styles.flatList}
                    data={filmsList}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleItemClick(item)}>
                            <FilmItem item={item} />
                        </TouchableOpacity>
                    )}
                />
            ) : (
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {filmsList?.length === 0
                            ? 'Sorry, nothing found with this search'
                            : "Type the show's name"}
                    </Text>
                </View>
            )}
        </View>
    );
};

export default HomeScreen;
