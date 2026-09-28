import AppShell from '@/components/AppShell'
import MovieCard from '@/components/home/movie-card'
import MovieCategoryList from '@/components/home/movie-category-list'
import MoviesCategoryWide from '@/components/home/movies-category-wide'
import TopSlider from '@/components/home/top-slider'
import { useMovies } from '@/hooks/use-movies'
import { FlatList, Text, View } from 'react-native'

const EmptyState = () => (
    <View>
        <Text className='text-white'>No Data Detected</Text>
    </View>
)


const HomeHeaderSection = () => {
    return (
        <>
            <MovieCategoryList />
            <MoviesCategoryWide />
        </>
    )
}

const home = () => {
    const { movies, isLoading } = useMovies();

    return (
        <AppShell>
            <TopSlider />
            {isLoading ? (<View>
                {/* Loader */}
            </View>) :
                <FlatList
                    ListHeaderComponent={HomeHeaderSection}
                    data={movies}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (<MovieCard movie={item} />)}
                    numColumns={2}
                    ListEmptyComponent={EmptyState}
                    contentContainerClassName='gap-2 pb-8'
                />
            }
            
        </AppShell>
    )
}

export default home