import React from 'react';
import { Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
    const navigation = useNavigation();
    return (
        <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
        />
    );
};

export default HomeScreen;
