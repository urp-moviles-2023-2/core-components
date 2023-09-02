import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.styleText}>
        Hello class!!
      </Text>
      <Button title='Press here' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  styleText: {
    borderWidth: 2,
    padding: 10,
    margin: 10,
    borderColor: 'blue'
  }
});
