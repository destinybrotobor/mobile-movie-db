import { useMovies } from '@/hooks/use-movies'
import { View, Text } from 'react-native'

const TopSlider = () => {
    const {movies} = useMovies();
    return (
        <View>
            <Text>TopSlider</Text>
        </View>
    )
}

export default TopSlider