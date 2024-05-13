import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoryScreen from "./Screens/CategoryScreen";
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SpecificMealList from "./Screens/SpecificMealList";
import Meals from "./Screens/Meal";
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavouriteScreen from "./Screens/FavouriteScreen";
import IconButton from "./Components/IconButton";
import FavouriteContextProvider from "./Store/FavoutiteContextProvider";

const stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={ {
      headerStyle : { backgroundColor : 'gray'},
      headerTintColor : 'white',
      contentStyle : {backgroundColor : "white"},
      animationTypeForReplace: 'push',
      sceneContainerStyle : {
        backgroundColor : 'white',
        
      },
      drawerStyle: {
        backgroundColor: '#c6cbef',
        
      },
      drawerActiveBackgroundColor : '#cccccc',
      drawerActiveTintColor : 'blue'
      
    }}>
      <Drawer.Screen name="Category" component={CategoryScreen} options={{
        drawerIcon : ({color , size}) => <IconButton name='home' color={color} size={size} />
      }} />
      <Drawer.Screen name="Favourite" component={FavouriteScreen} options={{
        drawerIcon : ({color , size}) => <IconButton name='star' color={color} size={size} />
      }}  />
      
    </Drawer.Navigator>
  );
}




export default function App() {
  return (
    <>
    <StatusBar style="light" />
    <FavouriteContextProvider>
    <NavigationContainer>
      <stack.Navigator screenOptions={
        {
          headerStyle : { backgroundColor : 'gray'},
          headerTintColor : 'white',
          contentStyle : {backgroundColor : "white"},
          animationTypeForReplace: 'push',
          // animation : 'fade',
          
        }
      }>
      <stack.Screen options={{
        headerShown : false
      }} name="Drawer" component={MyDrawer} />
      
      <stack.Screen  name="SpecificList" component={SpecificMealList} />
      <stack.Screen name="Meals" component={Meals} options={{
        contentStyle : {
          backgroundColor : '#ccc'
        }
      }} />
      </stack.Navigator>

    </NavigationContainer>
    </FavouriteContextProvider>
   
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
