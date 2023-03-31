import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function JobButton({jobTitle}) {
  return (
    <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>
            {jobTitle}
        </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000000',
        borderWidth: 3,
        padding: 8,
        marginRight: 8,
        borderRadius: 25,
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        marginHorizontal: 15,
    },
});
