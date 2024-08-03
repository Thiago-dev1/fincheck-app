import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../../src/hooks/useAuth';

export default function HomeScreen() {
    const { user } = useAuth();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen {user.name}</Text>
            <Link href="/home/edit" style={styles.link}>Go to Edit</Link>
            <Link href="/home/profile" style={styles.link}>Go to Profile</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1A1A1A',
    },
    text: {
        color: '#fff',
        fontSize: 24,
    },
    link: {
        color: 'blue',
        marginTop: 20,
        fontSize: 18,
    },
});
