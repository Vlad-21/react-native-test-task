import React, { useEffect, useState } from 'react';
import {
    Button,
    Text,
    View,
    StyleSheet,
    FlatList,
    Touchable,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchComponent from '../SearchComponent/SearchComponent';
import FilmItem from '../FilmItem/FilmItem';
import { IFilm } from '../../types/film.types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/types';

const HomeScreen: React.FC = () => {
    const [filmsList, setFilmsList] = useState<Array<IFilm>>();
    const handleGetSeacrResult = (list: Array<IFilm>) => {
        setFilmsList(list);
    };

    useEffect(() => {}, [filmsList]);
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const handleItemClick = (item: IFilm): void => {
        navigation.navigate('Details', { item: item });
    };
    return (
        <View style={styles.container}>
            <SearchComponent setFilms={handleGetSeacrResult} />
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

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flatList: {
        width: '95%',
        marginTop: 20,
        marginBottom: 45,
    },
    textContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    text: {
        fontSize: 20,
    },
});

export default HomeScreen;
