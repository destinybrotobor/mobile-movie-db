import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
    return (
        <NativeTabs
        labelVisibilityMode='labeled'
        >
            <NativeTabs.Trigger name="index">
                <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
                <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="theatre">
                <NativeTabs.Trigger.Icon sf="movieclapper" md="movie" />
                <NativeTabs.Trigger.Label>Theatre</NativeTabs.Trigger.Label>
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="explore">
                <NativeTabs.Trigger.Icon sf="safari" md="explore" />
                <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="favourites">
                <NativeTabs.Trigger.Icon sf="heart" md="favorite" />
                <NativeTabs.Trigger.Label>Favourites</NativeTabs.Trigger.Label>
            </NativeTabs.Trigger>
        </NativeTabs>
    );
}
