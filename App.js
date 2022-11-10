
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
////////Tailwindcss
import { TailwindProvider } from 'tailwindcss-react-native'
////////GraphQl
import {ApolloProvider,ApolloClient,InMemoryCache} from "@apollo/client"
////////Screens
import HomeScreen from './screens/HomeScreen';
import CompaniesDetailesScreen from './screens/CompaniesDetailesScreen';
import PostDetailScreen from './screens/PostDetailScreen';


const client = new ApolloClient({
  uri:"https://api-us-west-2.hygraph.com/v2/cl6fhcx0y2jzc01uk7s64ap52/master",
  cache:new InMemoryCache()
});

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <TailwindProvider>
            <Stack.Navigator>
              <Stack.Screen name='Home' component={HomeScreen}/>
              <Stack.Screen name="companiesDetailes" component={CompaniesDetailesScreen}/>
              <Stack.Screen name='postsDetailes' component={PostDetailScreen}/>
            </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
    </ApolloProvider>
  )
}

export default App