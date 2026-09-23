import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import AppShell from '@/components/AppShell'
import TopSlider from '@/components/home/top-slider'
import { movieProps } from '@/types'
import MovieCategoryList from '@/components/home/movie-category-list'
import MoviesCategoryWide from '@/components/home/movies-category-wide'

const home = () => {

    const [movies, setMovies] = useState<movieProps[]>([
        {
            id: 1,
            title: 'Test 1',
            overview: 'This is just a test',
            poster_path: ''
        },
        {
            id: 2,
            title: 'Test 2',
            overview: 'This is just a test',
            poster_path: ''
        },
        {
            id: 3,
            title: 'Test 3',
            overview: 'This is just a test',
            poster_path: ''
        },
        {
            id: 4,
            title: 'Test 4',
            overview: 'This is just a test',
            poster_path: ''
        },
        {
            id: 5,
            title: 'Test 5',
            overview: 'This is just a test',
            poster_path: ''
        }
    ]);

    const MovieCard = (item : movieProps) => (
        <View>
            <Text> { item.title } </Text>
        </View>
    )

    const EmptyState = () => (
        <View>
            <Text>No Data Detected</Text>
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

    return (
        <AppShell>
            <TopSlider />
            <FlatList
                ListHeaderComponent={HomeHeaderSection}
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => MovieCard(item)}
                numColumns={2}
                ListEmptyComponent={EmptyState}
            />
        </AppShell>
    )
}

export default home