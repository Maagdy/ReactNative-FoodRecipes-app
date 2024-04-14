import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MealDetails from "../MealDetails";

const MealItem = ( { id , title , imageUrl , duration , affordability , complexity} ) =>{
    
    const navigation = useNavigation();

    function selectMealItemHandler () {
        navigation.navigate('MealsDetails',{
            mealId: id
        })
    }
    
    return <View style={styles.mealItem}>
    <Pressable android_ripple={{color:'#ccc'}}  style={({ pressed }) => 
        pressed ? styles.buttonPressed : null}
        onPress={selectMealItemHandler}>
        <View>
            <Image source={{uri:imageUrl}} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails
        duration={duration}
        affordability={affordability}
        complexity={complexity} />
    </Pressable>
    </View>

}

export default MealItem ; 

const styles = StyleSheet.create({
    mealItem:{
        margin:10,
        overflow:'hidden',
        borderRadius:14,
        backgroundColor:'white',
        elevation:4
    },
    buttonPressed:{
        opacity:.5
    },
    image:{
        width:'100%',
        height:200,
        borderRadius:10,
    },
    title:{
        margin:8,
        fontWeight: 'bold',
        textAlign:'center',
        fontSize:18
    }
})