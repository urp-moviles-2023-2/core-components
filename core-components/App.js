import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>gdfg</Text>
      <Button
      style={styles.buttonColor}
      title="Learn More"
      accessibilityLabel="Learn more about this purple button"
    />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonColor: {
    color: "#841584"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
