import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoryScreen from "./Screens/CategoryScreen";
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SpecificMealList from "./Screens/SpecificMealList";
import Meals from "./Screens/Meal";
import { createDrawerNavigator } from '@react-navigation/drawer';

const stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Category" component={CategoryScreen} />
      
    </Drawer.Navigator>
  );
}




export default function App() {
  return (
    <>
    <StatusBar style="light" />
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
