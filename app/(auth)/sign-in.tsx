import {
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
    useFonts
} from '@expo-google-fonts/dm-sans';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../src/components/Button';
import { Input } from '../../src/components/Input';
import { useAuth } from '../../src/hooks/useAuth';


export default function SignInScreen() {
    const router = useRouter();
    const { signIn } = useAuth();
    let [fontsLoaded] = useFonts({
        'DMSans-400': DMSans_400Regular,
        'DMSans-500': DMSans_500Medium,
        'DMSans-700': DMSans_700Bold,
    });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = useCallback(async () => {
        // Aqui você deve adicionar a lógica real de autenticação
        const userData = { email }; // Substitua pelo retorno da autenticação real
        await signIn(email, password);
        router.replace('/home');
    }, [signIn, email, router]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerForm}>
                <Input label="E-mail" inputProps={{ placeholder: 'Enter your e-mail', keyboardType: 'email-address', value: email, onChangeText: setEmail }} />
                <Input label="Password" inputProps={{ placeholder: 'Enter your password', secureTextEntry: true, value: password, onChangeText: setPassword }} />
                <Button label="Sign in" onPress={handleSignIn} />
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerForm: {
        width: '80%',
        height: '50%',
        gap: 8
    }
});
