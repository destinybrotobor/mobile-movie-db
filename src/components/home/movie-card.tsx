import { useMovies } from '@/hooks/use-movies';
import { movieProps } from '@/types';
import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from 'react-native';

interface genreProps {
    id: number | string;
    name: string;
};

const MovieCard = ({ movie }: { movie: movieProps }) => {
    const { genres } = useMovies();

    let movieGenres: genreProps[] = [];

    movie.genre_ids?.forEach(id => {
        let g = genres.find((gen) => gen.id == id)
        if (g) {
            movieGenres.push(g)
        }
    });

    movie.genre = movieGenres;

    return (
        <TouchableOpacity activeOpacity={0.7} className='flex-1 px-1'>
            <View className='bg-gray-900 overflow-hidden rounded-xl'>
                <View className='w-full'>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                        contentFit='cover'
                        style={{ width: '100%', height: 250 }}
                    />
                </View>
                <View className='px-4 py-3'>
                    <Text className='text-white capitalize'>{movie.title}</Text>

                    {movie.genre && (
                        <View className='flex flex-row flex-wrap gap-2 mt-2'>
                            {movie.genre?.map((gen: genreProps, index: number) => (
                                <View key={index} className='bg-slate-800 inline-flex py-1 px-2 rounded-sm'>
                                    <Text className='text-white text-xs'>{gen.name}</Text>
                                </View>
                            ))}
                        </View>)}
                </View>
            </View>
        </TouchableOpacity>
    )
};

export default MovieCard;