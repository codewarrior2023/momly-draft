import { StyleSheet, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar() {
  return (
    <View style={styles.container}> 
        <Ionicons 
            name="md-search" 
            size={26} 
            color='#000000'
        />
        <TextInput
            style={styles.textInput}
            placeholder='What do you need help with today?'
        /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    width: 375,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2,},
    shadowOpacity: 0.25,
    shadowRadius: 3.00,
    elevation: 3,
  },
  textInput: {
    fontSize: 18,
    marginLeft: 7,
  }
});
