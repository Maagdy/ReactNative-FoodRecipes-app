import { CATEGORIES } from "../Data/Data";
import { FlatList } from "react-native";
import CategoryGridTail from "../components/CategoryGridTail";
   


const CategoiresScreen = ({navigation}) => {
    const renderItemHandler = (itemData) =>{
        const pressHandler = () => {
            navigation.navigate("MealsOverview",{
                categoryId : itemData.item.id
            })
        }
    
        return <CategoryGridTail 
        title={itemData.item.title}
        imageURl={itemData.item.imageURL}
        onPress={pressHandler}
        />
    };


    return (
    <FlatList 
    data={CATEGORIES} 
    keyExtractor={(item) => item.id} 
    renderItem={renderItemHandler}/>
    )
};

export default CategoiresScreen;