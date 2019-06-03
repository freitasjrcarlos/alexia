import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Preload extends Component {

  static navigationOptions = {
    title: null,
    header: null
  }

  constructor(props){
    super(props);
    this.state = {};

    this.props.navigation.navigate('Home');
  }

  


  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.appName}> Alexia </Text>
        <Text style={styles.preTxt}>Carregando...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#198aff'
  },
  appName: {
    fontSize: 30,
    marginBottom: 20,
    color: '#ffffff',
  },
  preTxt: {
    color: '#ffffff'
  }
});