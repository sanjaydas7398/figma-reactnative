import React from "react"
import { View,Text, StyleSheet, Button } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';

const PrizeInfo = ()=>{
    return(
        <>
           <View style={styles.prizemainContainer}>
              <View style={styles.PrizeContainer}>
                 <View style={styles.headerOverlay}>
                    <MaterialIcons name="trending-up" size={20} color="#1DB025" />
                    <Text style={styles.prizeLabel}>1ST PRIZE</Text>
                 </View>
                
                 <View style={styles.prizes}>
                     <Text style={styles.originalPrize}>₹50 Lakhs</Text>
                     <Text style={styles.finalPrize}>₹1.01 Cr</Text>
                     {/* <MaterialIcons name="arrow-drop-down" size={19} color="#666666" /> */}
                </View>    
           </View>


           <View style={styles.buttonWrapper}>
           <Button title="₹55"  color="#00BF36" onPress={() => {}} />
           </View>

           </View>
           
        </>
    )
}

export default PrizeInfo

const styles = StyleSheet.create({

  prizemainContainer:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
    PrizeContainer:{
          display:"flex",
          flexDirection:"row",
          alignSelf:"flex-start",
          marginVertical:8,
          borderWidth: 2,
          borderColor: "#CCCCCC",
          borderRadius: 8,
          margin: 8,
          padding:4,
          position:"relative",
          marginTop:18,
          marginLeft:2
           
    },
    headerOverlay:{
     position:"absolute",
     top:-12,
     left:"30%",
     transform: [{ translateX: -35 }],
     flexDirection: "row",
     alignItems: "center",
     backgroundColor: "#FFFFFF", 
     paddingHorizontal: 8,
    },
    prizeLabel:{
      color:"#666666",
      fontWeight:"bold",
      fontSize:10,
      marginLeft:4
    },
    prizes:{
      display:"flex",
      alignItems :"center",
      justifyContent:"center",
      flexDirection:"row",
      color: "#666666",
      fontWeight: "bold",
      padding:3,
      fontSize: 12,
    },
    originalPrize:{
        fontWeight:"normal",
        fontSize:14,
        color:"#666666",
        textDecorationLine: 'line-through',
        marginHorizontal: 8
    },
    finalPrize:{
      color:"#333333",
      fontSize:18,
      fontWeight: "bold"
    },
    buttonWrapper: {
      width: 118, 
      height: 40, 
      borderRadius: 8, 
      paddingTop: 4, 
      paddingRight: 20,
      paddingBottom: 4,
      paddingLeft: 15,
      marginTop:-20,
      marginHorizontal:25
    
    },
})