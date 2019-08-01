import React, { Component } from 'react'
import { Text, ScrollView, Button,StyleSheet,View } from 'react-native'
import { Topo, BodyHorror } from './components/index'
import Axios from "axios";
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { horrorFilms: [] }



    }

    componentWillMount() {
        Axios.get("https://apitest-7c305.firebaseapp.com/home").then(
            (data) => {
                this.setState({
                    horrorFilms: data.data[0].Genre.Horror
                })

            }
        )
    }

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: "#333" }}>
                <Topo />
                    <View>
                        <Text style={styles.title}>Horror</Text>
                    </View>
                <ScrollView
                    contentContainerStyle={styles.item}
                    horizontal={true}
                >
                    {this.state.horrorFilms.map(horror=>(<BodyHorror key={horror.id} horror={horror}/>))}
                </ScrollView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        paddingTop: 10,
    },
    title: {
        color: "#fff",
        fontSize: 17,
        marginLeft: "2%",
        textAlign:"center",
        fontSize:20

    },
    
})