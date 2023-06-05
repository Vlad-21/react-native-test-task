interface IFilm {
    score: number;
    show: {
        averageRuntime: number;
        dvdCountry: string;
        ended: string;
        externals: IFilmExternals;
        genres: Array<string>;
        id: number;
        image: IImage;
        language: string;
        name: string;
        network: IFilmNetwork;
        rating: {
            average: any;
        };
        runtime: number;
        schedule: IFilmSchedule;
        status: string;
        summary: string;
        type: string;
        updated: number;
        url: string;
        webChannel: string;
        weight: number;
    };
}

interface IImage {
    medium: string;
    original: string;
}

interface IFilmNetwork {
    country: IFilmCountry;
    id: number;
    name: string;
    officialSite: string;
    premiered: string;
}

interface IFilmSchedule {
    days: Array<string>;
    time: string;
}

interface IFilmCountry {
    code: string;
    name: string;
    timezone: string;
}

interface IFilmExternals {
    imdb: string;
    thetvdb: string;
    tvrage: string;
}

export { IFilm, IImage };
