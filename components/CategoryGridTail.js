import { ImageBackground, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CategoryGridTail = ({title,imageURl,onPress}) => {

    return <ImageBackground resizeMode="cover" source={{
        uri:imageURl
    }} style={[styles.gridItem , ] }>
     <LinearGradient 
        colors={['#00000000', '#000000']} 
        style={{height : '100%', width : '100%' ,}}>

    <Pressable 
        android_ripple={{color:'#ccc'}} 
        style={({ pressed }) => 
        [styles.button,
        pressed ? styles.buttonPressed : null]}
        onPress={onPress}
        >
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </LinearGradient>
     
    </ImageBackground>
    

};

export default CategoryGridTail;

const styles = StyleSheet.create({
    gridItem:{
        height:150,
        margin:16,
        flex:1,
        borderRadius:10,
        elevation:4,
        overflow: Platform.OS === 'android'? 'hidden' : 'visible'
    },
    button:{
        flex:1
    },
    buttonPressed:{
        opacity:.5
    },
    innerContainer:{
        flex:1,
        padding:16,
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    title:{
        fontWeight:'bold',
        fontSize:16,
        color:'#ccc'
    }

})