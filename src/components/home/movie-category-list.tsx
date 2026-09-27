import { View, Text } from 'react-native'
import React from 'react'
import { movieCardProps } from '@/types'
import { Link } from 'expo-router'
import List from './catigory(list/wide)/list'
const MovieCategoryList = () => {
  return (
   <View className='flex-col gap-8 py-3 '>
     <View className='flex-row justify-between items-center'>
      <Text className='text-3xl text-white font-semibold'>Popular Movies & Show</Text>
      
       

<Link href="/(tabs)/theatre">
    <Text className="text-red-800 font-semibold text-xl border-b border-red-800 ">
        show All
    </Text>
</Link>
      </View>
      {/**scrow view componet */}
     <List/> 

      
   </View>
  )
}

export default MovieCategoryList