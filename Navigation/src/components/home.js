import React, { Component } from 'react'
import { Text, View, Button, Image, StyleSheet, StatusBar,TouchableOpacity } from 'react-native'
import { createAppContainer, createStackNavigator,  } from 'react-navigation'

//IMGS
const logo = require("../../imgs/Freelancer_logo.png");
const menuCliente = require("../../imgs/menu_cliente.png");
const menuContato = require("../../imgs/menu_contato.png");
const menuEmpresa = require("../../imgs/menu_empresa.png");
const menuServico = require("../../imgs/menu_servico.png");


export default class Home extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (

            <View style={{flex:1,backgroundColor:"#323"}}>
            <StatusBar backgroundColor="#323"/>
                <View style={{ justifyContent: "center", flexDirection: "row" }}>
                    <Image
                        style={{ width: 350, height: 150, marginTop: 10 }}
                        source={logo}
                        resizeMode="stretch"
                    />

                </View>
                <View style={styles.viewButton}>
                    <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate("Cliente")}
                    >
                        <Image
                            style={styles.image}
                            source={menuCliente}
                        />
                    </TouchableOpacity>

                    <Image
                        style={styles.image}
                        source={menuContato}
                    />

                </View>

                <View style={styles.viewButton}>
                    <Image
                        style={styles.image}
                        source={menuEmpresa}
                    />

                    <Image
                        style={styles.image}
                        source={menuServico}
                    />
                </View>
            </View>
        )
    }
}

Home.navigationOptions = {
    title: "Home",
    headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerStyle:{
        backgroundColor:"#323",
    }
}

const styles = StyleSheet.create({
    viewButton: {
        flexDirection: "row",
        justifyContent: "center",

    },
    image: {
        width: 150,
        height: 150,
        margin: 10,
        
    }
})
