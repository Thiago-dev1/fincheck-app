import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextComponent } from "../../../../src/components/Text";
import { NavigationLinks } from "../NavigationLinks";

interface DefaultLayoutScreenProps {
    title: string;
    children?: React.ReactNode;
}

export function DefaultLayoutScreen({ title, children }: Readonly<DefaultLayoutScreenProps>) {
    return (
        <SafeAreaView style={styles.container}>
            <TextComponent style={styles.text}>{title}</TextComponent>
            <View style={styles.mainSection}>
                {children}
            </View>
            <NavigationLinks />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1A1A1A',
    },

    mainSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },

    containerTabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: '#1A1A1A',
        padding: 10,
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
