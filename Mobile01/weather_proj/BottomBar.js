import { View, Text, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { PlatformPressable } from '@react-navigation/elements';

// Tes écrans
import CurrentlyScreen from './CurrentlyScreen';
import TodayScreen from './TodayScreen';
import WeeklyScreen from './WeeklyScreen';

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
    const { colors } = useTheme();

    return (
    <View style={{ flexDirection: 'row' }}>
    {state.routes.map((route, index) => {

        const isFocused = state.index === index;

        const onPress = () => {
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
        }
        };

        const onLongPress = () => {
        navigation.emit({
            type: 'tabLongPress',
            target: route.key,
        });
        };

        return (
        <PlatformPressable
            key={route.key}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
        >
            <Text style={{ color: isFocused ? colors.primary : colors.text }}>
            {label}
            </Text>
        </PlatformPressable>
        );
    })}
    </View>
    );
}

export default function BottomBar() {
    return (
    <Tab.Navigator>
        <Tab.Screen name="Currently" component={CurrentlyScreen} />
        <Tab.Screen name="Today" component={TodayScreen} />
        <Tab.Screen name="Weekly" component={WeeklyScreen} />
    </Tab.Navigator>
    );
}