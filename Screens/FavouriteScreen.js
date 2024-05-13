import { useContext } from "react";

import { FavouriteContext } from "../Store/FavoutiteContextProvider";
import { MEALS } from "../data/dummy-data";
import FlatListUI from "../Components/FlatListUI";
import { View } from "react-native";

function FavouriteScreen(){
    const favouriteMealIds = useContext(FavouriteContext);
    const favouriteMeals = MEALS.filter(meal => favouriteMealIds.ids.includes(meal.id))

    if(!favouriteMeals){
        return <View>
            <Text>No Favourites</Text>
        </View>
    }
    return <FlatListUI data={favouriteMeals} />
}

export default FavouriteScreen;