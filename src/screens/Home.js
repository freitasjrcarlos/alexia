import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Home extends Component {

  static navigationOptions = {
    title: null,
    header: null
  }

  constructor(props){
    super(props);
    this.state = {};

  }

  


  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}> Escolha um idioma </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ff0000'
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    marginTop: 20,
  }
});