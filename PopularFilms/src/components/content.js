import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
//☆
class Content extends Component {
    setRate(){
        
    }
    render() {
        return (
            <View style={{flexDirection: "row",marginTop:2}}>
                <View style={{ flexDirection: "row", borderWidth: 3, borderColor: "black", width: 102, height: 102 }}>
                    <Image
                        source={{ uri: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UY67_CR0,0,45,67_AL_.jpg" }}
                        style={{ width: 100, height: 100 }}
                    />
                </View>
                <View style={{flexWrap:"nowrap"}}>
                    <Text>Bla bla bla</Text>
                    <Text>Bla bla bla {<Text style={{color:"yellow",fontSize:30}}></Text>}</Text>
                    <Text>bla bla bla</Text>
                </View>
            </View>
        )
    }

} export default Content;