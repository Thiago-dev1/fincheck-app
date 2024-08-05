import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter, useSegments } from "expo-router";
import { StyleSheet, View } from "react-native";

export function NavigationLinks() {
    const router = useRouter();
    const segments = useSegments();

    const currentSegment = segments[segments.length - 1];

    return (
        <View style={styles.container}>
            <Link href="/home" style={styles.link}>
                <Ionicons name="home" size={20} color={currentSegment === 'home' ? '#087F5B' : 'black'} />
            </Link>
            <Link href="/edit" style={styles.link}>
                <Ionicons name="create" size={20} color={currentSegment === 'edit' ? '#087F5B' : 'black'} />
            </Link>
            <Link href="/profile" style={styles.link}>
                <Ionicons name="person" size={20} color={currentSegment === 'profile' ? '#087F5B' : 'black'} />
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: '#fff',
        padding: 10,
    },

    link: {
        color: 'blue',
        marginTop: 20,
        fontSize: 18,
    },
});
