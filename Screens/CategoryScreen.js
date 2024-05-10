import { FlatList } from 'react-native';
import {CATEGORIES} from '../data/dummy-data'
import ListItem from '../Components/ListItem';




function CategoryScreen({navigation}){

   



    function listRender(itemData){
        
        function pressHandeler(){
            navigation.navigate("SpecificList" , {
                id : itemData.item.id
            });
        }
        return <ListItem title={itemData.item.title} color={itemData.item.color} onPress={pressHandeler} />
    }

    return (
        <FlatList  data={CATEGORIES} keyExtractor={item => item.id} renderItem={listRender} numColumns={2}>

        </FlatList>
    )
}

export default CategoryScreen;