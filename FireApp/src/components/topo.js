import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';




const Topo = (props) => {
    return (
        <View style={{backgroundColor:"#161515"}}>
          
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>

                <Text style={styles.topo}>Top 5 Horror movies</Text>
                <Icon
                    name="envelope"
                    size={24}
                    style={styles.message}
                    onPress={()=>props.navigation.navigate("Message")}
                />
                </View>
            
        </View>
    )
}

export { Topo };

const styles = StyleSheet.create({
    topo: {
        color: "red",
        fontWeight: "bold",
        paddingLeft: "8%",
        paddingTop: "2%",
        paddingBottom: "2%",
        fontSize: 27,
        
        alignItems:"stretch"
        

    },
    message: {
        color:"#777",
        alignItems:"flex-end",
        padding:10
    }

})



