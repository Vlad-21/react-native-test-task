import {StyleSheet} from "react-native";

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
    textNameContainer: {
        overflow: 'hidden',
        maxWidth: 280,
    },
    textName: {
        fontSize: 24,
        fontWeight: '600',
    },
    rating: {
        fontSize: 18,
        marginTop: 10,
        color: '#8f8f8f',
    },
});

export {styles};