import React from "react"
import { View,Text,StyleSheet } from "react-native"


const ContestCard = ()=>{
    return (
        <>
          <View style={styles.header}>
                <Text style={styles.contestType}>Mega Contest</Text>
                 <View style={styles.discountContainer}>
                    <Text style={styles.discountTimer}>Discount ends in 10:05:45 </Text>
                    <View style={styles.discountWrapper}>
                       <Text style={styles.discountAmount}>₹60</Text>
                       <Text style={styles.redLine}></Text>
                    </View>
                     
                </View>
          </View>
        </>
    )
}

export default ContestCard

const styles = StyleSheet.create({
    header:{
       flexDirection:"row",
       justifyContent: "space-between",
    },
    contestType:{
       marginTop:-10,
       paddingTop:6,
       paddingRight:12,
       paddingBottom:6,
       paddingLeft:12,
       borderRadius:4,
       backgroundColor:"#E8F6FB",
       color:"#306999",
       fontWeight:"medium",
       borderWidth: 1,
       borderColor: "rgba(0, 0, 0, 0.1)",

    }
    ,

    discountContainer:{
      display:"flex",
      flexDirection:"row",
      alignItems:"center"
    },
    discountTimer:{
      color:"#024680",
      fontWeight:"medium",
      fontSize:11,
      marginRight:4
    },
    discountWrapper:{
        position:"relative",
        flexDirection:"row",
        alignItems:"center"
    },
    discountAmount:{
      color:"#333333",
      fontWeight:"bold",
      fontSize:11,
    },
    redLine:{
       position:"absolute",
       bottom:"28%",
       left:-2,
       right:0,
       height:1,
       width:23,
       backgroundColor: "#FF0000",
    }
})

