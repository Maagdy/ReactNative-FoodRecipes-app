import { useSelector } from "react-redux";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../Data/Data";
// import { useContext } from "react";
// import { FavoritesContext } from "../store/context/favorites-context";
import { StyleSheet, Text, View } from "react-native";


const FavCategories = () => {
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    // const favoriteMealCtx = useContext(FavoritesContext);

    const favoritesMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id))

    if(favoritesMeals.length === 0 ){
        return <View style={styles.container}>
            <Text style={styles.text} >There is no Favorite Meals yet.</Text>
        </View>
    }

    return <MealsList items={favoritesMeals}/>
};

export default FavCategories ;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:20,
        fontWeight:"bold",
        color:"white"
    }
})