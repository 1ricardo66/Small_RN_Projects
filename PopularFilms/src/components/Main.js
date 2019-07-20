import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';
import Axios from 'axios'
import api from './popularFilms'


export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      films: []
    };
  }

  componentWillMount() {
    console.log(api.api)
    this.setState({
      films:api.api
    })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.films.map((data)=>{
          return(<Text key="id">{data.titulo}</Text>)
        })}
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    
  },
});
