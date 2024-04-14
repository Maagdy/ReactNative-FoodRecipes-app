import { StyleSheet, Text, View } from "react-native";

const List = ({data}) => {
    return data.map((dataPoint) => (
    <View style={styles.listContainer} key={dataPoint}>
        <Text style={styles.textStyle}>{dataPoint}</Text>
    </View>
     )
    )
};

export default List ;

const styles = StyleSheet.create({
    listContainer:{
        backgroundColor:'#e2b497',
        marginHorizontal:12,
        marginVertical:4,
        paddingVertical:3,
        paddingHorizontal:8,
        borderRadius:10
    },
    textStyle :{
        color:'#351401',
        fontSize:18,
        textAlign:"center"
    }
})
