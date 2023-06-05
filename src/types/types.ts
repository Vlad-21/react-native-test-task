import { IFilm } from './film.types';

type RootStackParamList = {
    Home: undefined
    Details: { item: IFilm };
};

export { RootStackParamList };
