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
            let frase = 'Ti Amo';
            this.state.frase = frase;
            this.setState({frase:frase});
          }}>
            <Image source={require('../assets/images/italy.png')} style={styles.country} />
          </TouchableHighlight>
          
        </View>

        <View style={styles.bgCountryRow}>

          <TouchableHighlight style={styles.btnCountry} onPress={()=>{
            let frase = 'Te amo';
            this.state.frase = frase;
            this.setState({frase:frase});
          }}>
           <Image source={require('../assets/images/spain.png')} style={styles.country} />
          </TouchableHighlight>

          <TouchableHighlight style={styles.btnCountry} onPress={()=>{
            let frase = 'Seni seviyorum';
            this.state.frase = frase;
            this.setState({frase:frase});
          }}>
           <Image source={require('../assets/images/turquia.png')} style={styles.country} />
          </TouchableHighlight>

          <TouchableHighlight style={styles.btnCountry} onPress={()=>{
            let frase = 'Ik hou van jou';
            this.state.frase = frase;
            this.setState({frase:frase});
          }}>
            <Image source={require('../assets/images/holanda.png')} style={styles.country} />
          </TouchableHighlight>

          <TouchableHighlight style={styles.btnCountry} onPress={()=>{
            let frase = 'AJe t’aime';
            this.state.frase = frase;
            this.setState({frase:frase});
          }}>
            <Image source={require('../assets/images/france.png')} style={styles.country} />
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
    backgroundColor: '#198aff'
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    marginTop: 30,
  },
  bgCountry: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 50,
  },
  bgCountryRow: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 0,
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