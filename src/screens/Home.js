import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';

export default class Home extends Component {

  static navigationOptions = {
    title: null,
    header: null
  }

  constructor(props){
    super(props);
    this.state = {
      frase: '',
      nome: 'Aléxia'
    };
  }  

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}> Escolha um idioma </Text>

        <View style={styles.bgCountry}>

          <TouchableHighlight style={styles.btnCountry} onPress={()=>{
            let frase = 'Eu te amo';
            this.state.frase = frase;
            this.setState({frase:frase});
          }}>
           <Image source={require('../assets/images/brazil.png')} style={styles.country} />
          </TouchableHighlight>

          <TouchableHighlight style={styles.btnCountry} onPress={()=>{
            let frase = 'I love you';
            this.state.frase = frase;
            this.setState({frase:frase});
          }}>
           <Image source={require('../assets/images/eua.png')} style={styles.country} />
          </TouchableHighlight>

          <TouchableHighlight style={styles.btnCountry} onPress={()=>{
            let frase = 'Kocham';
            this.state.frase = frase;
            this.setState({frase:frase});
          }}>
            <Image source={require('../assets/images/poland.png')} style={styles.country} />
          </TouchableHighlight>

          <TouchableHighlight style={styles.btnCountry} onPress={()=>{
            let frase = 'Amo';
            this.state.frase = frase;
            this.setState({frase:frase});
          }}>
            <Image source={require('../assets/images/italy.png')} style={styles.country} />
          </TouchableHighlight>
          
        </View>

        <View style={styles.bgCountry}> 
          <Text style={styles.txtFrase}>{this.state.frase+' '+this.state.nome+'!'}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffcadc'
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    marginTop: 20,
  },
  bgCountry: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 50,
  },
  btnCountry: {
    width: 50,
    height: 50,
    margin: 10,
  },
  country: {
    width: 50,
    height: 50,
  },
  txtFrase: {
    fontSize: 25,
    color: '#ffffff',
  }
});