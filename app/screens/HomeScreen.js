import React, { Component } from 'react';
import  { Image, Linking , StyleSheet, TouchableOpacity }
from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import ExploreScreen from './ExploreScreen';
import { ScrollView } from 'react-native-gesture-handler';

class HomeScreen extends Component {

  onPressx = () => {
    this.props.navigation.navigate('Denuncia')
  };
  onPressxxx = () => {
    this.props.navigation.navigate('Lugares Seguro')
  };
  onPressxxxvv = () => {
    this.props.navigation.navigate('Numero de Emergencia')
  };
render(){
    return (
      <Container style = {styles.fondo}>
        
       
        
        <ScrollView>
          
        <ExploreScreen/>
        <Content >
        <TouchableOpacity
         onPress={this.onPressx}
        >
        <Text style = {styles.separador}></Text>
            <CardItem style = {styles.columna}>
            <Text style = {styles.tit2} >Denuncia</Text>
                 
             <Image 
                source={require('./../assets/mega.png')} 
                style = {styles.imagen}
                
                />                           
          
            
            </CardItem>
            </TouchableOpacity>
        </Content>

        <Content >
        <TouchableOpacity
            onPress={this.onPressxxx}
        >
        <Text style = {styles.separador}></Text>
            <CardItem style = {styles.columna1}>
            <Text style = {styles.tit2} >Lugares Seguro</Text>
                 
             <Image 
                source={require('./../assets/llaa.png')} 
                style = {styles.imagen}
                
                />                           
          
            
            </CardItem>
            </TouchableOpacity>
        </Content>
                   
        <Content >
        <TouchableOpacity
    onPress={this.onPressxxxvv}
        >
        <Text style = {styles.separador}></Text>
            <CardItem style = {styles.columna2}>
            <Text style = {styles.tit2} >Numeros de Emergencia</Text>
                 
             <Image 
                source={require('./../assets/llaa.png')} 
                style = {styles.imagen}
                
                />                           
          
            
            </CardItem>
            </TouchableOpacity>
        </Content>
        <Text style = {styles.separador}></Text>
        </ScrollView>
       
      </Container>
      
    );
  }
  }

const styles =  StyleSheet.create({
  container:{
      backgroundColor: '#9599B3',
      flexDirection: 'column',
      alignItems: 'center',
    
  },
  titulo:{
    fontSize: 20,
    fontWeight: 'bold',
    color: "#ffffff",
    textAlign:'center'
},

tit2:{
  fontSize: 26,
  fontWeight: 'bold',
  marginTop:50,
  marginStart:0,
  color: 'white',
  marginHorizontal:135
},
ti1:{
  fontSize: 14,
  fontWeight: 'bold',
  color: '#98cb40',
 marginTop:1,
  marginHorizontal:10,
  textAlign:'auto'
},
columna:{
  flexDirection: 'column',
 
  width: '95%',
  backgroundColor: '#8A56AC',
  height: 180,
  borderTopLeftRadius:15,
  borderBottomLeftRadius:15,
  borderBottomRightRadius:15,
  borderTopRightRadius: 15,
  marginLeft: 10,
  marginHorizontal: 10,
},

columna1:{
  flexDirection: 'column',
 
  width: '95%',
  backgroundColor: '#FAAD2A',
  height: 180,
  borderTopLeftRadius:15,
  borderBottomLeftRadius:15,
  borderBottomRightRadius:15,
  borderTopRightRadius: 15,
  marginLeft: 10,
  marginHorizontal: 10,
},

columna2:{
  flexDirection: 'column',
 
  width: '95%',
  backgroundColor: '#1f65ff',
  height: 180,
  borderTopLeftRadius:15,
  borderBottomLeftRadius:15,
  borderBottomRightRadius:15,
  borderTopRightRadius: 15,
  marginLeft: 10,
  marginHorizontal: 10,
},
fondo:{
  backgroundColor: '#261237',
},

imagen:{
  width:100,
  height: 100,
  borderRadius: 0,
  marginLeft: 150,
  marginTop:-70,
 
},
separador: {
  width: 10
},
icon:{
  height: 75,
  marginTop: 55,
  marginLeft:3,
  color: "#ffffff", 
  
},
ic2:{
  color: "#ffffff",    
},
But:{
  width: 95,
  height: 45,
  marginTop:50,
  marginLeft:90,
  borderRadius:15,
  backgroundColor:"#EF578E"
},
But2:{
  width: 95,
  height: 45,
  margin:-45,
  marginLeft:100,
  marginTop:0,
  borderRadius:15,
  backgroundColor:"#EF578E"
},
})

export default HomeScreen;