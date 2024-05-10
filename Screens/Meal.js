import { startTransition, useLayoutEffect } from "react";
import { Button, Image, StyleSheet, Text , View , ScrollView, Platform } from "react-native";
import {  MEALS } from "../data/dummy-data";


function Meals({route , navigation}){
    const id = route.params.id;
    
    const mealInfo = MEALS.find((category) => category.id === id);

    useLayoutEffect(() => {
        navigation.setOptions({
            title : mealInfo.title,
            headerRight : () => <Button title="Tap Me!" onPress={console.log('Pressed')}></Button>
        })
    } , [])
    return (
    <ScrollView style={styles.container}>
            <View>
                <Image source={{uri : mealInfo.imageUrl}} alt="image" style={styles.image} />
            </View>
            <Text style={styles.title}>{mealInfo.title}</Text>
            <View style={styles.complexity}>
                    <Text >{mealInfo.complexity}</Text>
                    <Text >{mealInfo.affordability}</Text>
                    <Text >{mealInfo.duration}</Text>
                </View>
                <Text style={styles.title}>Ingridients</Text>
                <View style={styles.infoContainer}>
                    {mealInfo.ingredients.map((ingredient) => {
                        return <Text style={styles.infoContainerText}>{ingredient}</Text>
                    })}
                </View>
                <Text style={styles.title}>Steps</Text>
                <View style={styles.infoContainer}>
                    {mealInfo.steps.map((step) => {
                        return <Text style={styles.infoContainerText}>{step}</Text>
                    })}
                </View>
            </ScrollView>
        
    )
}

export default Meals;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        textAlign : 'center',
      marginBottom : Platform.OS === 'ios' ? 40 : 10,
    },
    image : {
        width : '100%',
        height : 300
    },
    title : {
        textAlign : 'center',
        fontWeight : 'bold',
        fontSize : 30,
        
    },
    complexity : {
        margin : 10,
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center',
        
    },
    infoContainer : {
        alignItems : 'center',
        marginVertical : 10,
        gap : 10,
        
    },
    infoContainerText : {
        borderWidth : 1,
        width : '90%',
        textAlign : 'center',
        borderRadius : 20,
        backgroundColor : '#ccf',
        padding : 5
    }
})