import ListMeals from "../Components/ListMeals";
import { FlatList, StyleSheet, View  , Text} from "react-native";

function FlatListUI({data}){

    

    return <FlatList
    style={styles.ViewContainer}
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={(itemData) => {
    
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
}

export default FlatListUI


const styles = StyleSheet.create({
  ViewContainer: {
    flex: 1,
    paddingBottom: 50,
    padding: 16,
    margin: 4,
  },
});
