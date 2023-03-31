import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons'; 
import HomeScreen from './screens/HomeScreen';
import JobsScreen from './screens/JobsScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';
import JobFormScreen from './screens/JobFormScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({focused, color}) => {

          let iconName;

          switch (route.name) {
            case 'Home': 
              iconName='ios-home';
              color = focused ? '#d3d3d3' : 'black';
              break;
            case 'Jobs': 
              iconName='ios-clipboard'
              color = focused ? '#d3d3d3' : 'black';
              break;
            case 'Chat':
              iconName='chatbubble-ellipses'
              color = focused ? '#d3d3d3' : 'black';
              break;
            case 'Profile':
              iconName='person'
              color = focused ? '#d3d3d3' : 'black';
              break;
            default:
              break;
          }
          return <Ionicons name={iconName} color={color} size={26} />
          },
          tabBarStyle: {
            height: 95, 
            paddingTop: 20,
          },
          headerShown: false,
          tabBarActiveTintColor: '#d3d3d3',
          tabBarInactiveTintColor: 'black',
         })}
      >
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen name='Jobs' component={JobsScreen}/>
        <Tab.Screen name='Chat' component={ChatScreen}/>
        <Tab.Screen name='Profile' component={ProfileScreen}/>
      </Tab.Navigator>
  )
}


export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Tabs" 
          component={Tabs} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="JobForm" 
          component={JobFormScreen}
          options={({route}) => ({title: route.params.name})}
        />
      </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
