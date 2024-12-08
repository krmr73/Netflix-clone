import { useEffect, useState } from "react";
import axios from "../../axios";
import { Movie } from "../../type";

export const useProps = (fetchUrl: string) => {
    const [movies, setMovies] = useState<Movie[]>([]);

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