import React, { useCallback, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    Linking,
} from 'react-native';
import { IFilm } from '../../types/film.types';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/types';

type DetailsScreenProps = StackScreenProps<RootStackParamList, 'Details'>;

const FilmDetailScreen: React.FC<DetailsScreenProps> = ({
    route,
    navigation,
}) => {
    const item: IFilm = route.params.item;

    useEffect(() => {
        navigation.setOptions({
            title: item.show.name,
        });
    }, []);

    const createScheduleList = () => {
        const time = item.show.schedule.time
            ? ` at ${item.show.schedule.time}`
            : '';
        return (
            <>
                {item.show.schedule.days.length ? (
                    item.show.schedule.days.map((element, index) => (
                        <Text key={element} style={styles.scheduleText}>
                            {item.show.schedule.days.length >= 4
                                ? element.substring(0, 3)
                                : element}
                            {item.show.schedule.days.length - 1 === index
                                ? time
                                : ', '}
                        </Text>
                    ))
                ) : (
                    <Text style={styles.scheduleText}>
                        no schedule available
                    </Text>
                )}
            </>
        );
    };

    const spritHtmlTags = (html: string): string => {
        const regex = /<[^>]+>/g;
        return html.replace(regex, '');
    };

    const handleButtonShowClick = useCallback(async () => {
        const supported: boolean = await Linking.canOpenURL(item.show.url);
        if (supported) {
            await Linking.openURL(item.show.url);
        }
    }, []);

    return (
        <ScrollView>
            <View style={styles.detailsContainer}>
                {item.show.image?.original ? (
                    <Image
                        style={styles.image}
                        source={{ uri: item.show.image.original }}
                    />
                ) : (
                    <View style={styles.errorImage}>
                        <Text style={styles.errorText}>Image not found</Text>
                    </View>
                )}

                <Text numberOfLines={1} style={styles.title}>
                    {item.show.name}
                </Text>
                <View style={styles.showInfo}>
                    <View style={styles.genresList}>
                        {item.show.genres.length ? (
                            item.show.genres.map((element, index) => (
                                <Text key={element} style={styles.genre}>
                                    {element}
                                    {item.show.genres.length - 1 === index
                                        ? ''
                                        : ' | '}
                                </Text>
                            ))
                        ) : (
                            <Text style={styles.genre}>Genres no found</Text>
                        )}
                    </View>
                    <Text style={styles.rating}>
                        Rating:{' '}
                        {item.show.rating?.average || 'waiting for more votes'}
                    </Text>
                    <View style={styles.scheduleList}>
                        <Text style={styles.scheduleText}>Schedule: </Text>
                        {createScheduleList()}
                    </View>
                    <Text style={styles.status}>
                        Status: {item.show.status || 'no status'}
                    </Text>
                    {item.show.summary && (
                        <Text style={styles.text}>
                            {spritHtmlTags(item.show.summary)}
                        </Text>
                    )}
                </View>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={handleButtonShowClick}
                >
                    <Text style={styles.buttonText}>Go To Show</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    detailsContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 40,
    },
    image: {
        width: 270,
        height: 380,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginTop: 20,
        maxWidth: '90%',
    },
    showInfo: {
        width: '80%',
        display: 'flex',
        alignItems: 'center',
    },
    genresList: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
    },
    genre: {
        color: '#8f8f8f',
        fontSize: 16,
    },
    rating: {
        color: '#8f8f8f',
        marginTop: 10,
    },
    scheduleList: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
    },
    scheduleText: {
        color: '#8f8f8f',
    },
    status: {
        color: '#8f8f8f',
        marginTop: 10,
    },
    text: {
        color: '#8f8f8f',
        fontSize: 16,
        marginTop: 10,
        textAlign: 'center',
    },
    buttonContainer: {
        width: '80%',
        height: 40,
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#70b9e9',
        marginTop: 20,
        marginBottom: 40,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
    },
    errorImage: {
        width: 270,
        height: 380,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    errorText: {
        fontSize: 32,
        textAlign: 'center',
    },
});

export default FilmDetailScreen;
