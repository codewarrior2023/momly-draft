import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function JobFormScreen({ route }) {
  const { name } = route.params;
  
  return (
   <View style={styles.container}>

      <View style={styles.form}>

        <Text style={styles.title}>
          Your Jobs Location:
        </Text>

      
      
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d3d3d3',
        alignItems: 'center',
    },
    form: {
      backgroundColor: '#ffffff',
      width: 375,
      height: 500,
      marginTop: 50,
      padding: 15,
      borderRadius: 8,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
    },
    button: {
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
      width: 375,
      height: 50,
      borderRadius: 8,
      marginTop: 10,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
    },

});