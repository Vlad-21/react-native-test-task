import { IFilm } from '../types/film.types';

const getFilsList = async (filmName: string): Promise<Array<IFilm>> => {
    const result = await fetch(
        `https://api.tvmaze.com/search/shows?q=${filmName}`
    );
    const data = await result.json();
    return data;
};

export { getFilsList };
