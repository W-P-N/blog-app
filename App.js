import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from './screens/feedscreens/Feed';
import TrendingPosts from './screens/feedscreens/TrendingPosts';
import MyPosts from './screens/feedscreens/mypostsscreens/MyPosts';
import Categories from './screens/categoryscreens/Categories';
import { Ionicons } from '@expo/vector-icons';
import Post from './screens/Post';
import Bookmarks from './screens/Bookmarks';
import CategoryBlogs from './screens/categoryscreens/CategoryBlogs';
// import EditBlogForm from './components/EditBlogForm';
import EditBlog from './screens/feedscreens/mypostsscreens/EditBlog';
import UserProfile from './screens/userscreens/UserProfile';
import { useEffect } from 'react';


const Stack = createStackNavigator(); 
const BottonTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Nesting Stack componnent into tab -> post will stack on the feed:
const StackScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='stackFeed' component={Feed} options={{
        title: 'Blogs',
        headerTitleAlign: 'center'
      }} />
      <Stack.Screen name='Post' component={Post}
        options={({ route }) => ({
          title: route.params.title,
          headerRight: ({size, color}) => <Ionicons name='star-outline' style={{paddingHorizontal: 8, alignItems: 'center'}} size={28} color={color} />
        })}
      />
    </Stack.Navigator>
  );
};

const TrendingPostsScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='Trending' component={TrendingPosts} />
      <Stack.Screen name='Post' component={Post} 
        options={({ route }) => ({
          title: route.params.title,
          headerRight: ({size, color}) => <Ionicons name='star-outline' style={{paddingHorizontal: 8, alignItems: 'center'}} size={28} color={color} />
        })}
      />
    </Stack.Navigator>
  );
};

const MyPostsScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='My Posts' component={MyPosts} />
      <Stack.Screen name='EditPost' component={EditBlog} 
        options={({ route }) => ({
          title: route.params.title,
          headerShown: false,
          presentation: 'modal',
          headerRight: ({size, color}) => <Ionicons name='star-outline' style={{paddingHorizontal: 8, alignItems: 'center'}} size={28} color={color} />
        })}
      />
    </Stack.Navigator>
  )
}

// Nesting tab component into side drawer component -> feed has bottom tabs
const TabScreens = () => {
  return (
    <BottonTab.Navigator 
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottonTab.Screen name='tabFeed' component={StackScreens} options={{
        title: 'Home',
        tabBarIcon: ({color, size}) => <Ionicons name='home' size={size} color={color} />,
        headerTitleAlign: 'center',
      }} />
      <BottonTab.Screen name='TrendingPosts' component={TrendingPostsScreens} options={(navigation) => ({
        title: 'Trending Posts',
        tabBarIcon: ({color, size}) => <Ionicons name='trending-up' size={size} color={color} />,
        headerTitleAlign: 'center'
      })} />
      <BottonTab.Screen name='MyPosts' component={MyPostsScreens} options={{
        title: 'My Posts',
        tabBarIcon: ({color, size}) => <Ionicons name='person' size={size} color={color} />,
        headerTitleAlign: 'center'
      }}/>
    </BottonTab.Navigator>
  )
}

const CategoryScreens = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name='Category' component={Categories} />
        <Stack.Screen name='CategoryBlogs' component={CategoryBlogs} 
          options={({route}) => ({
            title: route.params.title,
            headerTitleAlign: 'center'
          })}
        />
        <Stack.Screen name='Post' component={Post}
        options={({ route }) => ({
          title: route.params.title,
          headerRight: ({size, color}) => <Ionicons name='star-outline' style={{paddingHorizontal: 8, alignItems: 'center'}} size={28} color={color} />
        })}
      />
      </Stack.Navigator>
  );
};

const BookmarksScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Bookmarks' component={Bookmarks} />
      <Stack.Screen name='Post' component={Post} options={({ route }) => ({
          title: route.params.title,
          headerRight: ({size, color}) => <Ionicons name='star-outline' style={{paddingHorizontal: 8, alignItems: 'center'}} size={28} color={color} />
        })}
      />
    </Stack.Navigator>
  );
};

export default function App() {

  function getHeaderTitleInTabs(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'tabFeed';

    switch(routeName) {
      case 'tabFeed': {
        return 'Feed';
      };
      case 'TrendingPosts': {
        return 'Trending Posts';
      };
      case 'MyPosts': {
        return 'My Posts';
      };
    };
  };

  return (
    <>
      <StatusBar style="auto" />
        <NavigationContainer>
          {/* Home screen as tabs */}
          <Drawer.Navigator
            screenOptions={(navigation) => ({
              headerRight: ({size, color}) => 
                  <Ionicons name='person' style={{alignItems: 'center', marginHorizontal: 12}} size={32} color={color} onPress={() => navigation.navigation.navigate(
                    'User'
                  )}/>
            })}
          >
            <Drawer.Screen name='Feed' component={TabScreens} options={(route) => ({
              headerTitle: getHeaderTitleInTabs(route.route),
              headerTitleAlign: 'center',
            })}
            />
            <Drawer.Screen name='User' component={UserProfile} options={{
              title: 'Profile',
              headerTitleAlign: 'center',
              drawerItemStyle: {display: 'none'},
              // Use modal like screen flow to view the profile.
            }} />
            <Drawer.Screen name='Categories' component={CategoryScreens} options={{
              title: 'Categories',
              headerTitleAlign: 'center'
            }}/>
            <Drawer.Screen name='rootBookmarks' component={BookmarksScreens} options={{
              title: 'Bookmarks',
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
