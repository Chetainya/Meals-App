import { createContext, useState } from "react";

export const FavouriteContext = createContext({
    ids : [],
    addFavourite : () => {},
    removeFavourite : () => {}
})

function FavouriteContextProvider({children}){
    const [favouriteIds , setFavouriteIds] = useState([]);

    function addFavourite(id){
        setFavouriteIds((currIds) => [...currIds , id])
    }
    function removeFavourite(id){
        setFavouriteIds((currIds) => {
            return currIds.filter(favouriteId => favouriteId !== id)
        })
    }
    let value = {
        ids : favouriteIds,
        addFavourite,
        removeFavourite
    }

    return <FavouriteContext.Provider value={value}>{children}</FavouriteContext.Provider>
}

export default FavouriteContextProvider
