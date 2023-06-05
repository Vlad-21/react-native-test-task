import {IFilm} from "../../types/film.types";

interface ISearchComponentProps {
    setFilms: (films: IFilm[]) => void;
}

export {ISearchComponentProps};