import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
  useFonts
} from '@expo-google-fonts/dm-sans';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Input } from './src/components/Input';

export default function App() {
  let [fontsLoaded] = useFonts({
    'DMSans-400': DMSans_400Regular,
    'DMSans-500': DMSans_500Medium,
    'DMSans-700': DMSans_700Bold,
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerForm}>
        <Input label="E-mail" inputProps={{ placeholder: 'Enter your e-mail', keyboardType: 'email-address' }} />
        <Input label="Password" inputProps={{ placeholder: 'Enter your password', secureTextEntry: true }} />
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
})