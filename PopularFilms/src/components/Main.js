import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';
import api from './popularFilms'
import Content from './content'


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: api.api
    };
  }

  /*componentWillMount() {
    console.log(api.api)
    this.setState({
      films:api.api
    })
  }*/

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.films.map((film)=>(<Content key={film.id} film={film}/>))}

        <View>
          <Text style={{textAlign:"center"}}>21/07/2019</Text>
        </View>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#333"
  },
});
