import React, { Component } from 'react';
import { View, Button, Text, Image, StyleSheet } from 'react-native';


class SkinScreen extends Component {
    render() {
        return (
            <View style={styles.MainView} >

                <View style={styles.Image}>
                    <Image
                        style={{width: 180, height:180 , resizeMode:"contain"}}
                        source={{ uri: `https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_progressiv_light_large.91cde781cd0c8502bbbb66f37cc7f1baf2a10c05.png` }}
                        

                    />
                </View>
                <View style={{flexWrap:"nowrap", flex:1}}>
                    <Text>Teste</Text>
                    <Text>Teste</Text>
                    <Text>Teste</Text>
                </View>
            </View>
        )
    }
}

export default SkinScreen;

const styles = StyleSheet.create({
    MainView: {
        flexDirection: "row",
        marginTop: 4,
        flex: 1,
        borderColor: "black",
        borderWidth: 3,
        backgroundColor:"#333"

    },
    Image: {
        flexDirection: "row",
        width: 200,
        height: 200,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    Text:{
        marginLeft: 10,
        marginTop: 5,
        color: "blue",
        fontSize: 15,

    }
})