import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { CommonActions, getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
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
import EditProfileForm from './screens/userscreens/editProfile/EditProfileForm';
import EditProfileImage from './screens/userscreens/editProfile/editProfileImage/EditProfileImage';

// Contexts:
import UserContextProvider from './context/User/user-data-context';
import Login from './screens/authscreens/Login';
import Signup from './screens/authscreens/Signup';


const Stack = createStackNavigator(); 
const BottomTab = createBottomTabNavigator();
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
      <Stack.Screen name='MyPosts' component={MyPosts} />
      <Stack.Screen name='EditPost' component={EditBlog} 
        options={({ route }) => ({
          title: route.params.title,
          headerShown: false,
          presentation: 'modal',
          headerRight: ({size, color}) => <Ionicons name='star-outline' style={{paddingHorizontal: 8, alignItems: 'center'}} size={28} color={color} />
        })}
      />
    </Stack.Navigator>
  );
};

const EditProfileScreens = () => {
  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerShown: false
      // }}
    >
      <Stack.Screen name='EditProfileForm' component={EditProfileForm} options={{
        presentation: 'modal',
        headerRight: () => (
          <Pressable onPress={() => console.log("Saved")}>
            <Ionicons name='checkmark-outline' style={{paddingHorizontal: 16}} size={32} />
          </Pressable>
        )
      }}/>
      <Stack.Screen name='EditProfileImage' component={EditProfileImage} options={{
        headerRight: () => (
          <Pressable onPress={() => console.log("Saved")}>
            <Ionicons name='checkmark-outline' style={{paddingHorizontal: 16}} size={32} />
          </Pressable>
        )
      }}/>
    </Stack.Navigator>
  )
}

const UserProfileScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='UserProfile' component={UserProfile} />
      <Stack.Screen name='EditProfileHead' component={EditProfileScreens} />
    </Stack.Navigator>
  );
};

// Nesting tab component into side drawer component -> feed has bottom tabs
const TabScreens = () => {
  return (
    <BottomTab.Navigator 
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTab.Screen name='tabFeed' component={StackScreens} options={{
        title: 'Home',
        tabBarIcon: ({color, size}) => <Ionicons name='home' size={size} color={color} />,
        headerTitleAlign: 'center'
      }} />
      <BottomTab.Screen name='TrendingPosts' component={TrendingPostsScreens} options={{
        title: 'Trending Posts',
        tabBarIcon: ({color, size}) => <Ionicons name='trending-up' size={size} color={color} />,
        headerTitleAlign: 'center'
      }} />
      <BottomTab.Screen name='MyPostsHead' component={MyPostsScreens} options={{
        title: 'My Posts',
        tabBarIcon: ({color, size}) => <Ionicons name='file-tray-full-outline' size={size} color={color} />,
        headerTitleAlign: 'center'
      }}/>
      <BottomTab.Screen name='UserProfileHead' component={UserProfileScreens} options={{
        title: 'Profile',
        headerTitleAlign: 'center',
        tabBarIcon: ({color, size}) => <Ionicons name='person' size={size} color={color} />,
      }} />
    </BottomTab.Navigator>
  );
};

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

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='login' component={Login} />
      <Stack.Screen name='signup' component={Signup} options={{
        presentation: 'modal',
        headerTitle: 'SIGNUP',
        headerTitleAlign: 'center',
      }}/>
    </Stack.Navigator>
  )
}

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
      case 'UserProfile': {
        return 'Account';
      };
    };
  };

  return (
    <>
      <StatusBar style="auto" />
      <UserContextProvider>
        <NavigationContainer>
          <AuthStack />
          {/* Home screen as tabs */}
          {/* <Drawer.Navigator
            screenOptions={(navigation) => ({
              headerRight: ({size, color}) => 
                  <Ionicons name='person' style={{alignItems: 'center', marginHorizontal: 12}} size={32} color={color} onPress={() => {}}/>,
            })}
          >
            <Drawer.Screen name='Feed' component={TabScreens} options={(route) => ({
              headerTitle: getHeaderTitleInTabs(route.route),
              headerTitleAlign: 'center',
            })}
            />
            <Drawer.Screen name='Categories' component={CategoryScreens} options={{
              title: 'Categories',
              headerTitleAlign: 'center'
            }}/>
            <Drawer.Screen name='rootBookmarks' component={BookmarksScreens} options={{
              title: 'Bookmarks',
              headerTitleAlign: 'center'
            }}/>
          </Drawer.Navigator> */}
        </NavigationContainer>
      </UserContextProvider>
    </>
  );
};
