import React from "react"
import { View, Text,StyleSheet, Image } from "react-native"

interface TaglineProps {
    text: string;
}


const Tagline = ({text}:TaglineProps)=>{
    return(
        <>
          <View style={styles.taglineContainer}>
             <View style={styles.imgwithText}>
                <Image source={require("../../assets/images/up.png")} style={styles.imageT} />
                <Text style={styles.taglineText}>{text}</Text>   
            </View> 
          </View>
        </>
    )
}
export default Tagline

const styles = StyleSheet.create({
    taglineContainer:{
      backgroundColor:"#D9F1FE",
      padding:5,
      borderRadius:4,
      display:"flex",
      paddingVertical:10,
      marginLeft:-10,
      marginRight:-10,
      marginBottom:-10

    },
    imgwithText:{
        display:"flex",
        flexDirection:"row",
        marginLeft:5
    },
    taglineText:{
        color:"#000000",
        fontSize:13,
        fontWeight:"bold",
        paddingLeft:12
    },
    imageT:{
        height:20,
        width:20
    }
})