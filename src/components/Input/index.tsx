import { useRef, useState } from "react";
import { StyleSheet, TextInput, TextInputProps, TouchableWithoutFeedback, View } from "react-native";
import { TextComponent } from "../Text";


interface InputProps {
    label: string;
    inputProps: TextInputProps;
}

export function Input({ label, inputProps }: Readonly<InputProps>) {

    const inputRef = useRef<TextInput>(null);
    const [isFocused, setIsFocused] = useState(false);

    const focusInput = () => {
        inputRef.current?.focus();
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <TouchableWithoutFeedback onPress={focusInput}>
            <View style={[styles.container, isFocused && styles.containerFocused]}>
                <TextComponent
                    size={12}
                    style={isFocused && styles.colorFocused}
                >{label}</TextComponent>
                <TextInput
                    ref={inputRef}
                    {...inputProps}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={styles.input}
                />
            </View>

        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 4,
        padding: 4,
    },

    colorFocused: {
        color: '#087F5B', // cor do texto quando o input está em foco
    },

    containerFocused: {
        borderColor: '#087F5B', // cor da borda quando o input está em foco
    },
    input: {
        width: '100%'
    }
})