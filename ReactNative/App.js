import { StyleSheet, Text, ScrollView, } from 'react-native';
import ActivityIndicatorX from './CoreComponents/ActivityIndicatorX';
import ButtonX from './CoreComponents/ButtonX';
import FlatListX from './CoreComponents/FlatListX';
import ModalX from './CoreComponents/ModalX';
import PressableX from './CoreComponents/PressableX';
import RefreshControlX from './CoreComponents/RefreshControlX';
import ScrollViewX from './CoreComponents/ScrollViewX';
import SectionListX from './CoreComponents/SectionListX';
import StatusBarX from './CoreComponents/StatusBarX';
import SwitchX from './CoreComponents/SwitchX';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>REACT NATIVE</Text>

      <ActivityIndicatorX/>

      <ButtonX/>

      <FlatListX/>

      <ModalX/>

      <PressableX/>

      <RefreshControlX/>

      <ScrollViewX />

      <SectionListX/>

      <StatusBarX/>

      <SwitchX/>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 50,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },

  text: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
