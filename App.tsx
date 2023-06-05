import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FilmDetailScreen from './src/components/FilmDetailsScreen/FilmDetailScreen';
import HomeScreen from './src/components/HomeScreen/HomeScreen';

import {RootStackParamList} from "./src/types/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Films' }}
                />
                <Stack.Screen name="Details" component={FilmDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
