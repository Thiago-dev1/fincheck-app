import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
  useFonts
} from '@expo-google-fonts/dm-sans';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  let [fontsLoaded] = useFonts({
    'DMSans-400': DMSans_400Regular,
    'DMSans-500': DMSans_500Medium,
    'DMSans-700': DMSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>Thiago</Text>
      <Text style={{ fontFamily: 'DMSans-400' }}>Thiago</Text>
      <Text style={{ fontFamily: 'DMSans-700' }}>Thiago</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
