import React from "react"
import { View,Text, StyleSheet, Button, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";


const StatsBar = ()=>{
    return(
        <>
          <View style={styles.statsBar}>
              <Text style={styles.totalPrize}>Total Prize ₹2.01Cr</Text>
              
              <View style={styles.winners}>
                <MaterialIcons name="emoji-events" size={15} color="#F8B64C" /> 
                <Text style={styles.winnersText}>40% Winners</Text>
             </View>
               <View style={styles.butcontainer}>
                  <Button title="Win 1Cr" color="#5287D8" onPress={() => {}} />
              </View>
          </View>
        </>
    )
}

export default StatsBar


const styles = StyleSheet.create({
    statsBar:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical: 3,
        alignItems:"center",
        marginLeft:4
        
    },
    totalPrize:{
        color:"#666666",
        fontSize:13,
        fontWeight:"normal"
    },
    winners:{
      color:"#666666",
      fontSize:13,
      fontWeight:"normal",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center"
    },
    winnersText: {
        color: "#666666",
        fontSize: 13,
        fontWeight: "normal",
      },
    butcontainer:{
      width:100,
      borderTopLeftRadius:50,
      borderBottomLeftRadius:50,
      borderTopRightRadius:0,
      borderBottomRightRadius:0,
      overflow: 'hidden',  
      marginRight:-10,
      backgroundColor: '#5287D8',
      fontSize:5
    },
    
    
})