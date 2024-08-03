import { ActivityIndicator, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { TextComponent } from '../Text';


interface ButtonProps extends TouchableOpacityProps {
    label: string;
    isLoaded?: boolean;
}

export function Button({ label, style, disabled, isLoaded, ...props }: Readonly<ButtonProps>) {
    return (
        <TouchableOpacity style={[styles.container, disabled ? styles.disabled : {}, style]} disabled={disabled} {...props}>
            {isLoaded &&
                <ActivityIndicator color="white" />}

            {!isLoaded && <TextComponent style={styles.label}>{label}</TextComponent>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 4,
        padding: 8,
        backgroundColor: '#087F5B',
    },

    label: {
        fontSize: 16,
        color: 'white',
    },

    disabled: {
        backgroundColor: '#ccc',
    }
})