import React, { useCallback, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Linking,
} from 'react-native';

import { IFilm } from '../../types/film.types';
import {DetailsScreenProps} from "./FilmDetailScreen.types";

import {styles} from "./FilmDetailScreen.style";

const FilmDetailScreen: React.FC<DetailsScreenProps> = (
    props
) => {
    const item: IFilm = props.route.params.item;

    useEffect(() => {
        props.navigation.setOptions({
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

    const spriteHtmlTags = (html: string): string => {
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
                            {spriteHtmlTags(item.show.summary)}
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

export default FilmDetailScreen;
