import { Slot } from 'expo-router';
import { AuthContextProvider } from '../src/contexts/AuthContext';

export default function RootLayout() {

    return (
        <AuthContextProvider>
            <Slot />
        </AuthContextProvider>
    )
}