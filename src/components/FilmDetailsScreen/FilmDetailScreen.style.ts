import {StyleSheet} from "react-native";

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

export {styles};