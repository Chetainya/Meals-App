import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import ListMeals from "../Components/ListMeals";
import { useLayoutEffect } from "react";

function SpecificMealList({ route, navigation }) {
  const id = route.params.id;
  
  const dataToRender = MEALS.filter((meal) => meal.categoryIds.includes(id));

  const dynamicTitle = CATEGORIES.find((category) => category.id === id).title;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: dynamicTitle,
    });
  }, []);
  

  return (
    <FlatList
      style={styles.ViewContainer}
      data={dataToRender}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => {
        {console.log(itemData.item.id)}
        return <ListMeals
           id={itemData.item.id}
          title={itemData.item.title}
          imageUrl={itemData.item.imageUrl}
          affordability={itemData.item.affordability}
          duration={itemData.item.duration}
          complexity={itemData.item.complexity}
          
        ></ListMeals>
      }}
    />
  );
}

export default SpecificMealList;
const styles = StyleSheet.create({
  ViewContainer: {
    flex: 1,
    paddingBottom: 50,
    padding: 16,
    margin: 4,
  },
});
