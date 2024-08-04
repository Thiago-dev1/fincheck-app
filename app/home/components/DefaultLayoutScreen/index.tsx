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
            <TextComponent>{title}</TextComponent>
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
        backgroundColor: '#fff',
    },

    mainSection: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
});
