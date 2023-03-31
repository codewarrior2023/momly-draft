import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import Job from '../components/Job';
import JobButton from '../components/JobButton';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.mainContainer}>

        <View style={styles.searchContainer}>
            <SearchBar />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 20}}
        >
            <View style={styles.titleContainerOne}>
                <Text style={styles.titleText}> 
                    Popular on Momly
                </Text>
            </View>

            <View style={styles.jobsContainer}>
              <View style={styles.jobsContainerLeft}>
                <Job 
                  style={styles.jobLeft}
                  jobTitle='Cleaning' 
                  imageUrl= {require('../assets/cleaning.jpeg')}
                  navigation={navigation} 
                />
              </View>
              <View style={styles.jobsContainerRight}>
                <Job 
                  style={styles.jobRight}
                  jobTitle='Meal Prepping' 
                  imageUrl={require('../assets/meal-prepping.jpeg')}
                  navigation={navigation} 
                />
              </View>
            </View>

            <View style={styles.jobsContainer}>
              <View style={styles.jobsContainerLeft}>
                <Job 
                  style={styles.jobLeft}
                  jobTitle='Baby Sitting' 
                  imageUrl={require('../assets/baby-sitting.jpg')}
                  navigation={navigation} 
                />
              </View>
              <View style={styles.jobsContainerRight}>
                <Job 
                  style={styles.jobRight}
                  jobTitle='Delivery' 
                  imageUrl= {require('../assets/delivery.jpeg')}
                  navigation={navigation} 
                />
              </View>
            </View>

            <View style={styles.titleContainerTwo}>
                <Text style={styles.titleText}> 
                    Trending Now
                </Text>
            </View>

            <View style={styles.jobsContainer}>
              <View style={styles.jobsContainerLeft}>
                <Job 
                  style={styles.jobLeft}
                  jobTitle='Photography' 
                  imageUrl= {require('../assets/photography.png')}
                  navigation={navigation} 
                />
              </View>
              <View style={styles.jobsContainerRight}>
                <Job 
                  style={styles.jobRight}
                  jobTitle='Interior Design' 
                  imageUrl= {require('../assets/interior-design.jpeg')}
                  navigation={navigation} 
                />
              </View>
            </View>

            <View style={styles.jobsContainer}>
              <View style={styles.jobsContainerLeft}>
                <Job 
                  style={styles.jobLeft}
                  jobTitle='Event Helper' 
                  imageUrl= {require('../assets/event-staffing.jpeg')}
                  navigation={navigation} 
                />
              </View>
              <View style={styles.jobsContainerRight}>
                <Job 
                  style={styles.jobRight}
                  jobTitle='Organizing' 
                  imageUrl= {require('../assets/organizing.jpeg')}
                  navigation={navigation} 
                />
              </View>
            </View>

            <View style={styles.titleContainerTwo}>
                <Text style={styles.titleText}> 
                    Browse More Categories
                </Text>
            </View>

            <View style={styles.jobButtonsContainer}>
              <JobButton jobTitle='Shopping'/>
              <JobButton jobTitle='Holiday Decorating'/>
            </View>

            <View style={styles.jobButtonsContainer}>
              <JobButton jobTitle='Errands'/>
              <JobButton jobTitle='Personal Assistant'/>
            </View>

            <View style={styles.jobButtonsContainer}>
              <JobButton jobTitle='Help Moving'/>
              <JobButton jobTitle='Waiting In Line'/>
            </View>

            <View style={styles.jobButtonsContainer}>
              <JobButton jobTitle='Dog Walking'/>
              <JobButton jobTitle='Baby Prepping'/>
            </View>

            <View style={styles.jobButtonsContainer}>
              <JobButton jobTitle='Gardening'/>
              <JobButton jobTitle=' Indoor Painting'/>
            </View>
        </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  searchContainer: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 25,
    borderColor: '#ececec',
    borderBottomWidth: 1,
  },
  titleContainerOne:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  titleContainerTwo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  titleText: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  jobsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },  
  jobsContainerLeft: {
    marginRight: 12.5,
  },
  jobsContainerRight: {
    marginLeft: 12.5,
  },
  jobButtonsContainer:{
    flexDirection: 'row',
    marginBottom: 10,
  },  


});
