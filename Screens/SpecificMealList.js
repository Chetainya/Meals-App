import { FlatList, StyleSheet, Text, View } from "react-native";
import {MEALS} from '../data/dummy-data'
import ListMeals from "../Components/ListMeals";


function SpecificMealList({route}){
    const id = route.params.id
    const dataToRender = MEALS.filter(meal => meal.categoryIds.includes(id));
    
    return (
        <FlatList style={styles.ViewContainer} data={dataToRender} keyExtractor={item => item.id} renderItem={itemData => <ListMeals title={itemData.item.title} imageUrl={itemData.item.imageUrl} affordability={itemData.item.affordability} duration={itemData.item.duration} complexity={itemData.item.complexity}></ListMeals> } />
    )

}

export default SpecificMealList;
const styles = StyleSheet.create({
    ViewContainer : {
        flex : 1,
        paddingBottom : 50,
        padding : 16,
        margin : 4
        
        
        
    }
})