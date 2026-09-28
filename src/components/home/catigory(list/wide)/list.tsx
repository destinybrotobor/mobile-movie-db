import { useMovies } from '@/hooks/use-movies';
import { Lucide } from "@react-native-vector-icons/lucide";
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
const list = () => {
    const { popularMovies, isLoading } = useMovies();
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className='flex-row gap-7'>
                {/**scrow 1 */}
                {popularMovies && popularMovies?.map((movie) => (
                    <TouchableOpacity activeOpacity={0.5}>

                        <View className='flex-col gap-3' key={movie.id}>
                            <Image className='w-45 h-40 rounded-2xl'
                                source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                            />
                            <View className='flex-col gap-1 '>
                                <View>
                                    <Text className='text-white font-medium'>{movie.title}</Text>

                                </View>
                                <View className='flex-row gap-2 items-center'>
                                    <Lucide name="star"
                                        size={15}
                                        color="gold" />
                                    <Text className='text-white font-extralight'>4.5 rating (4k+)</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                ))}
            </View>
        </ScrollView>
    )
}

export default list