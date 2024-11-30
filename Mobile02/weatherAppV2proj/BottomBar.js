import { View, Text, Platform, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { PlatformPressable } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/Ionicons';

import CurrentlyScreen from './CurrentlyScreen';
import TodayScreen from './TodayScreen';
import WeeklyScreen from './WeeklyScreen';

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

export default function BottomBar({ screenText }) {
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
                <CurrentlyScreen screenText={screenText} />
            )}
        />
        <Tab.Screen 
            name="Today"
            children={() => (
                <TodayScreen screenText={screenText} />
            )}
        />
        <Tab.Screen 
            name="Weekly"
            children={() => (
                <WeeklyScreen screenText={screenText} />
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