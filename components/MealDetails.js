import { StyleSheet, Text, View } from "react-native";

const MealDetails = ({duration , affordability , complexity , style , textStyle}) => {
    return (
        <View style={[styles.details, style ]}>
            <Text style={[styles.detailItem, textStyle]}>{duration} Min</Text>
            <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
            <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
        </View>
    )
}

export default MealDetails ;


const styles = StyleSheet.create({
    details:{
        flexDirection:'row',
        padding: 10,
        alignItems:'center',
        justifyContent:'center'
    },
    detailItem:{
        marginHorizontal:8,
        fontSize:13,
        fontWeight:"500"
    }
})