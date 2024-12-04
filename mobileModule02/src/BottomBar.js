import { View, Text, Platform, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import CurrentlyScreen from './Screen/CurrentlyScreen';
import TodayScreen from './Screen/TodayScreen';
import WeeklyScreen from './Screen/WeeklyScreen';

const Tab = createMaterialTopTabNavigator();

const getTabBarIcon = (routeName, focused, color, size) => {
    let iconName;

    switch (routeName) {
        case 'Currently':
            iconName = focused ? 'time' : 'time-outline';
            break;
        case 'Today':
            iconName = focused ? 'sunny' : 'sunny-outline';
            break;
        case 'Weekly':
            iconName = focused ? 'calendar' : 'calendar-outline';
            break;
        default:
            iconName = 'help-circle';
    }
    return <Icon name={iconName} size={size} color={color} />;
}

export default function BottomBar({ error, location, currentWeather, todayWeather, weeklyWeather }) {
    return (
    <Tab.Navigator tabBarPosition='bottom'
    screenOptions={({ route }) => ({ 
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused, color, size }) => getTabBarIcon(route.name, focused, color, size),
        tabBarActiveTintColor: '#f5cb5c',
        tabBarInactiveTintColor: '#333533',
    })}>
        <Tab.Screen 
            name="Currently"
            children={() => (
                <CurrentlyScreen error={error} location={location} currentWeather={currentWeather} />
            )}
        />
        <Tab.Screen 
            name="Today"
            children={() => (
                <TodayScreen error={error} location={location} todayWeather={todayWeather} />
            )}
        />
        <Tab.Screen 
            name="Weekly"
            children={() => (
                <WeeklyScreen error={error} location={location} weeklyWeather={weeklyWeather} />
            )}
        />
    </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#e8eddf',
        borderTopWidth: 1,
        borderTopColor: '#e8eddf',
    }
})