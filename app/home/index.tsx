import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function HomeTabs() {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="edit"
                options={{
                    tabBarLabel: 'Edit',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="create" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}
