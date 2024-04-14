import { View , Text , StyleSheet } from "react-native";


const Subtitle = ({children}) => {
    return(
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
};

export default Subtitle ;

const styles = StyleSheet.create({
    subtitle:{
        fontWeight:"bold",
        color:'#e2b497',
        textAlign:"center",
        fontSize:20,
    },
    subtitleContainer:{
        padding:6,
        marginVertical:4,
        marginHorizontal:14,
        borderColor:'#e2b497',
        borderBottomWidth:2,
    }
})
