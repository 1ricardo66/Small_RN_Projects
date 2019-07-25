import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native'

const logo = require("../../imgs/Freelancer_logo.png");
const linkedin = require("../../imgs/linkedin.png")
const github = require("../../imgs/github.png")
const whatsapp = require("../../imgs/whatsapp.png")

export default class Contato extends Component {


    
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#323" }}>


                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <Image
                        style={{ width: 320, height: 100, marginTop: 5, marginBottom: 15 }}
                        source={logo}
                        resizeMode="contain"
                    />
                </View>

                <View >
                    <Text style={styles.text}>Você pode entrar em contato através das seguintes redes sociais</Text>
                </View>

                <View style={ styles.socialView }>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/paulo-ricardo-0a1057146/")}>
                        <Image
                            source={linkedin}
                            style={styles.socialImg}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Linking.openURL("https://github.com/1ricardo66/Small_RN_Projects")}>
                        <Image
                            source={github}
                            style={styles.socialImg}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>alert("Link indisponível")}>
                        <Image
                            source={whatsapp}
                            style={styles.socialImg}
                        />
                    </TouchableOpacity>
                </View>




            </View>
        )
    }
}

Contato.navigationOptions = {
    title: "Contato",
    headerTintColor: 'black',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    headerStyle: {
        backgroundColor: "#323",
    }
}


const styles= StyleSheet.create({
    socialView:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:40,
        marginBottom:10
        
        
    },
    socialImg:{
        width:80,
        height:80,
        
    },
    text:{
        fontSize:22,
        fontStyle:"italic",
        textDecorationLine:"underline",
        margin:60
    }
})