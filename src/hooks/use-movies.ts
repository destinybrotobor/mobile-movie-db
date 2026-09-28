import { movieProps } from '@/types';
import { useEffect, useState } from 'react';

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState<movieProps[]>([]);
    const [genres, setGenres] = useState<{id: number | string; name: string}[]>([])
    const [popularMovies, setPopularMovies] = useState<movieProps[]>([]);
    const BaseUrl = process.env.EXPO_PUBLIC_MOVIEDB_BASE_URL;
    const AccessKey = process.env.EXPO_PUBLIC_MOVIEDB_ACCESS_KEY;

    const fetchGenres = async () => {
        setIsLoading(true);
        try {
            const options = {
                method: 'GET',
                headers: { accept: 'application/json', Authorization: `Bearer ${AccessKey}` }
            };

            const response = await fetch(`${BaseUrl}/genre/movie/list?language=en`, options);
            const data = await response.json();
            setGenres(data?.results);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    const fetchMovies = async () => {
        setIsLoading(true);
        try {
            const options = {
                method: 'GET',
                headers: { accept: 'application/json', Authorization: `Bearer ${AccessKey}` }
            };

            const response = await fetch(`${BaseUrl}/trending/movie/day`, options);
            const data = await response.json();
            setMovies(data?.results)
            // console.log(data.results);

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    const fetchPopularMovies = async () => {

    }

    useEffect(() => {
        fetchMovies();
        fetchPopularMovies();

        // set static genres
        setGenres([
                {
                    id: 28,
                    name: "Action"
                },
                {
                    id: 12,
                    name: "Abenteuer"
                },
                {
                    id: 16,
                    name: "Animation"
                },
                {
                    id: 35,
                    name: "Komödie"
                },
                {
                    id: 80,
                    name: "Krimi"
                },
                {
                    id: 99,
                    name: "Dokumentarfilm"
                },
                {
                    id: 18,
                    name: "Drama"
                },
                {
                    id: 10751,
                    name: "Familie"
                },
                {
                    id: 14,
                    name: "Fantasy"
                },
                {
                    id: 36,
                    name: "Historie"
                },
                {
                    id: 27,
                    name: "Horror"
                },
                {
                    id: 10402,
                    name: "Musik"
                },
                {
                    id: 9648,
                    name: "Mystery"
                },
                {
                    id: 10749,
                    name: "Liebesfilm"
                },
                {
                    id: 878,
                    name: "Science Fiction"
                },
                {
                    id: 10770,
                    name: "TV-Film"
                },
                {
                    id: 53,
                    name: "Thriller"
                },
                {
                    id: 10752,
                    name: "Kriegsfilm"
                },
                {
                    id: 37,
                    name: "Western"
                }
            ])
    }, [])


    return {
        isLoading,
        movies,
        genres,
        popularMovies,
    }
}