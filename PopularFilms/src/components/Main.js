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
        <Content />
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    
  },
});
