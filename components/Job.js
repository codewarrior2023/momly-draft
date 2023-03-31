import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Job({ jobTitle, imageUrl, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => {navigation.navigate('JobForm', {
        name: jobTitle
      })}}
    >
        <Text style={styles.text}>
            {jobTitle}
        </Text>
        <Image 
            style={styles.image}
            source={imageUrl}
            resizeMode='cover'
        />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    text: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 10,
    },
    image: {
      width: 175,
      height: 175,
      borderRadius: 8,
    },
});
