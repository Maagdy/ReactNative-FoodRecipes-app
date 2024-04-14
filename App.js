import { StyleSheet} from 'react-native';
import CategoiresScreen from './screens/CategoriesScreen';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Ionicons} from "@expo/vector-icons"

import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { Store } from './store/redux/store';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavCategories from './screens/FavCategoriesScreen';
// import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return <Drawer.Navigator screenOptions={{
        headerStyle:{backgroundColor:'#572304'},
        headerTintColor:'white',
        sceneContainerStyle:{backgroundColor:'#3f2f25'},
        drawerContentStyle:{backgroundColor:'#572304'},
        drawerInactiveTintColor:"white",
        drawerActiveTintColor:'#572304',
        drawerActiveBackgroundColor:"#e2baa1",
        
  }} >
        <Drawer.Screen name='Categories' component={CategoiresScreen} options={{
          title:'All Categories',
          drawerIcon: ({color , size}) => <Ionicons name='list' color={color} size={size}/>
        }} />
        <Drawer.Screen name='Favorites' component={FavCategories} options={{
                    drawerIcon: ({color , size}) => <Ionicons name='star' color={color} size={size}/>
        }} />
  </Drawer.Navigator>
};

export default function App() {
  return <>
    <StatusBar style='light' />

    <Provider store={Store}>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerStyle:{backgroundColor:'#572304'},
          headerTintColor:'white',
          contentStyle:{backgroundColor:'#3f2f25'}
      }}>
        <Stack.Screen 
        name="Drawer" 
        component={DrawerNavigator} 
        options={{
          headerShown:false
        }}/>
        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        <Stack.Screen name='MealsDetails' component={MealDetailsScreen} options={{
          title:'About the Meal'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    </>
  ;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
