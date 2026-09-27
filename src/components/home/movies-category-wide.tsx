import { View, Text } from 'react-native'
import { movieCardProps } from '@/types'
import { Link } from 'expo-router'
import Wide from './catigory(list/wide)/wide'

const MoviesCategoryWide = () => {
    return (
         <View className='flex-col gap-8 py-3 mt-7 '>
     <View className='flex-row justify-between items-center'>
     
       <Text className='text-3xl text-white font-semibold'>Continue  Watching</Text>
     
       

<Link href="/(tabs)/theatre" >
    <Text className="text-red-800 font-semibold text-xl border-b border-red-800 ">
        View All
    </Text>
</Link>
      </View>
      {/**scrow view componet */}
     <Wide/> 

      
   </View>
    )
}

export default MoviesCategoryWide