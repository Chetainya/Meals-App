import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoryScreen from "./Screens/CategoryScreen";
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import SpecificMealList from "./Screens/SpecificMealList";

const stack = createStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style="dark" />
    <NavigationContainer>
      <stack.Navigator>
      <stack.Screen name="MealsCategory" component={CategoryScreen} />
      <stack.Screen name="SpecificList" component={SpecificMealList} />

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
