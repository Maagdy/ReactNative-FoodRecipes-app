import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../Data/Data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import {addFavorite,removeFavorite} from '../store/redux/favorites'
// import { FavoritesContext } from "../store/context/favorites-context";

const MealItemDetails = ({route,navigation}) => {
    // const favoritesMealsCtx = useContext(FavoritesContext);

    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId );
    const mealIsFavorite = favoriteMealIds.includes(mealId);

    const changeFavoritesStatusHandler = () => {
        if (mealIsFavorite) {
            // favoriteMealsCtx.removeFavorite(mealId);
            dispatch(removeFavorite({ id: mealId }));
          } else {
            // favoriteMealsCtx.addFavorite(mealId);
            dispatch(addFavorite({ id: mealId }));
          }
        }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton 
                onPress={changeFavoritesStatusHandler} 
                icon={mealIsFavorite ? 'star' : 'star-outline'}
                color="white" />
            }
        });
    },[navigation,changeFavoritesStatusHandler]);

    return (
    <ScrollView style={styles.rootContainer}>
        <Image  style={styles.image} source={{uri:selectedMeal.imageUrl}} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails 
        duration={selectedMeal.duration} 
        complexity={selectedMeal.complexity} 
        affordability={selectedMeal.affordability}
        textStyle={styles.text} />
        <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>
                <List data={selectedMeal.ingredients} />
                <Subtitle>Steps</Subtitle>
                <List data={selectedMeal.steps} />
            </View>
        </View>
    </ScrollView>
    )
}

export default MealItemDetails;

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom:32
    },
    image:{
        flex:1,
        margin:10,
        borderRadius:16,
        borderColor:"#e2b497",
        borderWidth:2,
        height:350,
    },
    title:{
        fontWeight:"bold",
        color:'white',
        fontSize:24,
        margin:8,
        textAlign:'center',
    },
    text:{
        color:"white"
    },
    listContainer:{
        width:'80%',
    },
    listOuterContainer:{
        alignItems:'center'
    }
})