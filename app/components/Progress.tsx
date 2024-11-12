import React from "react"
import { View,Text,StyleSheet, Image } from "react-native";

const Progress = ()=>{
    return(
        <>
          <View style={styles.progressContainer}>
              <View style={styles.mainText}>
                 <View>
                    <Text>1123/4000 teams</Text>
                 </View>
                 <View style={styles.rcont}>
                  <Text style={styles.textWithImage}>
                    <Image source={require("../../assets/images/guaranteed.png")} style={styles.image} />
                    100%</Text>
                  <Text style={styles.textWithImage}>
                  <Image source={require("../../assets/images/booster.png")} style={styles.image} />
                  3</Text>
                  <Text style={styles.textWithImage}>
                  <Image source={require("../../assets/images/multiple.png")} style={styles.image} />
                    12</Text>
                  </View>
                  </View>     
          </View>
               <View style={styles.progressBarBackground}>
                       <View style={styles.progressBarFill}></View>
                    </View>
        </>
    )
}
export default Progress

const styles = StyleSheet.create({
    progressContainer:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        marginTop:3,
        backgroundColor:"#FAFAFA",
        width:"105%",
        paddingHorizontal: 5,
        paddingVertical:8,
        marginLeft:-8
    },

    mainText:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%", 
        marginBottom: 5
    },
    rcont:{
      display:"flex",
      flexDirection: "row",
    },
    textWithImage: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center", 
        marginHorizontal: 5, 
      },
    progressBarBackground:{
        width:"35%",
        height:5,
        borderRadius:4
    },
    progressBarFill:{
        width: '100%', 
        height: '100%',
        backgroundColor: '#3b5998',
        borderRadius: 4,
    },
    image:{
        height:16,
        width:16
    }
})

