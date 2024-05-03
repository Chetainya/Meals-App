import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

function ListMeals({title , imageUrl , complexity , affordability , duration}){

return (
   
    <View style={styles.rootContainer}>
        <Pressable>
            <View>
                <View>
                <Image source={{uri : imageUrl}} style={styles.image} />
                </View>
                <Text style={styles.TitleText}>{title}</Text>
                <View>
                <View style={styles.MealInfo}>
                    <Text style={styles.MealInfoText}>{complexity}</Text>
                    <Text style={styles.MealInfoText}>{affordability}</Text>
                    <Text style={styles.MealInfoText}>{duration}</Text>
                </View>
                </View>
            </View>
        </Pressable>
    </View>
    
)

}

export default ListMeals;

const styles = StyleSheet.create({
    rootContainer : {
        flex: 1,
        margin : 10,
        
        borderBottomWidth : 1,
        overflow : 'hidden',
        marginBottom : 30
    
        
        
    },
    image : {
        width : '100%',
        height : 200,
        borderRadius : 10
    },
    MealInfo : {
        margin : 10,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-around'
        
    },
    MealInfoText : {
        fontWeight : 'bold'
    },
    TitleText : {
        textAlign : 'center',
        margin : 3,
        fontWeight : 'bold',
        
    }
})