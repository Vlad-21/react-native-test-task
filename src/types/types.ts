import { IFilm } from './film.types';

type RootStackParamList = {
    Details: { item: IFilm } | undefined;
};

export { RootStackParamList };
