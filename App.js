import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from './screens/feedscreens/Feed';
import TrendingPosts from './screens/feedscreens/TrendingPosts';
import MyPosts from './screens/feedscreens/MyPosts';
import Categories from './screens/Categories';
import { Ionicons } from '@expo/vector-icons'


const Stack = createStackNavigator(); 
const BottonTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Nesting tab component into side drawer component -> feed has bottom tabs
const FeedPage = () => {
  return (
    <BottonTab.Navigator 
      screenOptions={{
      }}
    >
      <BottonTab.Screen name='Feed' component={Feed} options={{
        title: 'Home',
        tabBarIcon: ({color, size}) => <Ionicons name='home' size={size} color={color} />,
        headerTitleAlign: 'center'
      }} />
      <BottonTab.Screen name='TrendingPosts' component={TrendingPosts} options={{
        title: 'Trending',
        tabBarIcon: ({color, size}) => <Ionicons name='trending-up' size={size} color={color} />,
        headerTitleAlign: 'center'
      }} />
      <BottonTab.Screen name='MyPosts' component={MyPosts} options={{
        title: 'My Posts',
        tabBarIcon: ({color, size}) => <Ionicons name='person' size={size} color={color} />,
        headerTitleAlign: 'center'
      }}/>
    </BottonTab.Navigator>
  )
}

 
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
        <NavigationContainer>
          {/* Home screen as tabs */}
          <Drawer.Navigator
            screenOptions={{
              headerRight: ({size, color}) => 
                  <Ionicons name='person' style={{alignItems: 'center', marginHorizontal: 12}} size={32} color={color} />
              
            }}
          >
            <Drawer.Screen name='FeedPage' component={FeedPage} options={{
              title: 'Feed',
              headerTitleAlign: 'center',
            }}
            />
            <Drawer.Screen name='Categories' component={Categories} options={{
              title: 'Categories',
              headerTitleAlign: 'center'
            }}/>

          </Drawer.Navigator>
        </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
