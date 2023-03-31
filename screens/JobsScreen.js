import { StyleSheet, Text, View} from 'react-native';

export default function JobsScreen({jobTitle}) {
  return (
   <View style={styles.container}>
    <Text> Jobs Screen </Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});