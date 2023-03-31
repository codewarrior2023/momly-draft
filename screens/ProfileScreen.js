import { StyleSheet, Text, View} from 'react-native';

export default function ProfileScreen({jobTitle}) {
  return (
   <View style={styles.container}>
    <Text> Profile Screen </Text>
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