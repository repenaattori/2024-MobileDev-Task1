import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './components/Logo.js';

export default function App() {
  return (
    <View style={Styles.container}>
      <Logo></Logo>
      <Logo></Logo>
      <Logo></Logo>
  </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
