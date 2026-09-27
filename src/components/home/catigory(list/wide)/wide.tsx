import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'

const wide = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className='flex-row gap-7'>
                {/**scrow 1 */}
                <View className='flex-col gap-3'>
                    <TouchableOpacity>

                        <Image className='w-45 h-40 rounded-2xl'
                            source={require('../../../../assets/bg-web3.jpg')}
                        />
                    </TouchableOpacity>
                    <View className='flex-col gap-1'>
                        <Text className='text-white font-medium'>Barbie</Text>
                        <View className='flex-row gap-2'>
                            <Text className='text-white'>logo</Text>
                            <Text className='text-white font-extralight'>4.5 rating (4k+)</Text>
                        </View>
                    </View>
                </View>


                {/**scrow 2 */}
                <View className='flex-col gap-3'>
                    <TouchableOpacity>

                        <Image className='w-45 h-40 rounded-2xl'
                            source={require('../../../../assets/bg-web3.jpg')}
                        />
                    </TouchableOpacity>
                    <View className='flex-col gap-1'>
                        <Text className='text-white font-medium'>Barbie</Text>
                        <View className='flex-row gap-2'>
                            <Text className='text-white'>logo</Text>
                            <Text className='text-white font-extralight'>4.5 rating (4k+)</Text>
                        </View>
                    </View>
                </View>
                {/**scrow 3 */}
                <View className='flex-col gap-3'>
                    <TouchableOpacity>

                        <Image className='w-45 h-40 rounded-2xl'
                            source={require('../../../../assets/bg-web3.jpg')}
                        />
                    </TouchableOpacity>
                    <View className='flex-col gap-1'>
                        <Text className='text-white font-medium'>Barbie</Text>
                        <View className='flex-row gap-2'>
                            <Text className='text-white'>logo</Text>
                            <Text className='text-white font-extralight'>4.5 rating (4k+)</Text>
                        </View>
                    </View>
                </View>

                {/**scrow 4*/}
                <View className='flex-col gap-3'>
                    <TouchableOpacity>

                        <Image className='w-45 h-40 rounded-2xl'
                            source={require('../../../../assets/bg-web3.jpg')}
                        />
                    </TouchableOpacity>
                    <View className='flex-col gap-1'>
                        <Text className='text-white font-medium'>Barbie</Text>
                        <View className='flex-row gap-2'>
                            <Text className='text-white'>logo</Text>
                            <Text className='text-white font-extralight'>4.5 rating (4k+)</Text>
                        </View>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

export default wide