import { Stack } from 'expo-router';
import { AuthContextProvider } from '../src/contexts/AuthContext';

export default function RootLayout() {

    return (
        <AuthContextProvider>
            <Stack screenOptions={{ headerShown: false }}>

            </Stack>
        </AuthContextProvider>
    )
}