import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from './screens/feedscreens/Feed';
import TrendingPosts from './screens/feedscreens/TrendingPosts';
import MyPosts from './screens/feedscreens/MyPosts';
import Categories from './screens/Categories';


const Stack = createStackNavigator(); 
const BottonTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Nesting tab component into side drawer component -> feed has bottom tabs
const FeedPage = () => {
  return (
    <BottonTab.Navigator 
      screenOptions={{
        headerShown: false
      }}
    >
      <BottonTab.Screen name='Feed' component={Feed} />
      <BottonTab.Screen name='TrendingPosts' component={TrendingPosts} />
      <BottonTab.Screen name='MyPosts' component={MyPosts} />
    </BottonTab.Navigator>
  )
}

 
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
        <NavigationContainer>
          {/* Home screen as tabs */}
          <Drawer.Navigator>
            <Drawer.Screen name='FeedPage' component={FeedPage} />
            <Drawer.Screen name='Categories' component={Categories} />

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
