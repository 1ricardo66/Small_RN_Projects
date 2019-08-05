import React, { Component } from 'react'
import { Text, View,ScrollView,StyleSheet} from 'react-native'
import {Topo,Sobrenatural,Teen,Slasher} from './components/index'
import Axios from 'axios'

export default class App extends Component {
    constructor(){
        super();
        this.state={
            sobrenatural:[],
            teen:[],
            slasher:[],

        }
    
    }

    componentWillMount(){
        Axios.get("https://apitest-7c305.firebaseapp.com/home").then(
            (data)=>{
                this.setState({
                    sobrenatural:data.data[0].Genre.Sobrenatural,
                    teen:data.data[0].Genre.Teen,
                    slasher:data.data[0].Genre.Slasher,
                })
            }
        )
    }
    



    render() {
        return (
            <ScrollView style={{flex:1,backgroundColor:"#454242"}}>
                <Topo navigation={this.props.navigation}/>


                <Text style={styles.filmTitle}>Sobrenatural</Text>
                <ScrollView
                    contentContainerStyle={{paddingTop:10}}
                    horizontal={true}
                >
                {this.state.sobrenatural.map((sobrenatural)=>(<Sobrenatural key={sobrenatural.id} sobrenatural={sobrenatural}/>))}
                </ScrollView>


                <Text style={styles.filmTitle}>Teen</Text>
                <ScrollView
                    contentContainerStyle={{paddingTop:10}}
                    horizontal={true}
                >
                {this.state.teen.map((teen)=>(<Teen key={teen.id} teen={teen}/>))}
                </ScrollView>

                <Text style={styles.filmTitle}>Slasher</Text>
                <ScrollView
                    contentContainerStyle={{paddingTop:10}}
                    horizontal={true}
                >
                {this.state.slasher.map((slasher)=>(<Slasher key={slasher.id} slasher={slasher}/>))}
                </ScrollView>


            </ScrollView>
        )
    }
}

App.navigationOptions={
    title:"Home",
    header:null
}

const styles = StyleSheet.create({
    filmTitle:{
        fontSize:17,
        color:"red",
        textAlign:"center"
    }
})
