import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ToDoList from './components/ToDoList';
import 'react-native-get-random-values';
import { v4 as uuidv4} from 'uuid';

export default function App() {
  return (
    <View style={styles.container}>
      <ToDoList initialValues={["Buy a Horse", "Drink a Smoothie"]}/>
      <StatusBar style="auto"/>
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
