import React, { useEffect, useState } from 'react'
import { movieCardProps, movieProps } from '@/types'

export const useMovies = () => {
    const [movies, setMovies] = useState<movieProps[]>([]);
    const [popularMovies, setPopularMovies] = useState<movieProps[]>([]);

    const fetchMovies = async () => {

    }

    const fetchPopularMovies = async () => {

    }

    useEffect(() => {
        fetchMovies();
        fetchPopularMovies();
    }, [])

    
    return {
        movies,
        popularMovies
    }
}