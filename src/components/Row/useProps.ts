import { useEffect, useState } from "react";
import axios from "../../axios";

export type Movie = {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
}

export const useProps = (fetchUrl: string) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    console.log(fetchUrl);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            const moviesData = request.data.results.map((movie: Movie) => ({
                id: movie.id,
                name: movie.name,
                poster_path: movie.poster_path,
                backdrop_path: movie.backdrop_path
            }));
            setMovies(moviesData);
        }
        fetchData();
    }, [fetchUrl]);

    return { movies };
}