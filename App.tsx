import { Slot } from 'expo-router';
import { AuthContextProvider } from './src/contexts/AuthContext';

export default function App() {
    return (
        <AuthContextProvider>
            <Slot />
        </AuthContextProvider>
    );
}
