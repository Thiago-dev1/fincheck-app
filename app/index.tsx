import {
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
    useFonts
} from '@expo-google-fonts/dm-sans';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button } from '../src/components/Button';
import { Input } from '../src/components/Input';

export default function SignInScreen() {
    const router = useRouter();
    let [fontsLoaded] = useFonts({
        'DMSans-400': DMSans_400Regular,
        'DMSans-500': DMSans_500Medium,
        'DMSans-700': DMSans_700Bold,
    });

    const handleSignIn = useCallback(() => {
        console.log('Sign in');
        router.replace('/home/home');
    }, [router]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerForm}>
                <Input label="E-mail" inputProps={{ placeholder: 'Enter your e-mail', keyboardType: 'email-address' }} />
                <Input label="Password" inputProps={{ placeholder: 'Enter your password', secureTextEntry: true }} />
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
