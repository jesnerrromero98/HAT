
import React, { Component } from 'react';
import  { Image, Linking , StyleSheet }
from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';



export default class ServicioSocial extends Component {

  render() {
    
    const handleCallPress = async() =>{
        Linking.openURL("tel: 25122727");
      };
      const handleCall2Press = async() =>{
          Linking.openURL("tel: 25121212");
      };
      const handleCall3Press = async() =>{
        Linking.openURL("tel: 25121949");
      };
      const handleCall4Press = async() =>{
        Linking.openURL("tel: 57636600");
      };
    return (
      <Container style = {styles.fondo}>
        <CardItem cardBody>
              <Image source={require('./../assets/poli.png')} 
                 style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
        

        <Content >
          <Text style = {styles.separador}></Text>
            <CardItem style = {styles.columna}
            >
              
              <Left >
                <Thumbnail 
                source={require('./../assets/poli.png')} 
                style = {styles.imagen}
                />
                <Body>
                  <Text style = {styles.tit2} >Policia Nacional</Text>
                  <Text style = {styles.ti1} >Juigalpa,CHontales</Text>
                </Body>
              </Left>
             
                <Button onPress={handleCallPress} style = {styles.But} >
                   
                  <Text style = {styles.icon}>Llamar</Text>
                </Button>
            
              <Right>       
              </Right>
            </CardItem>
            
            <Text style = {styles.separador}></Text>
            <CardItem style = {styles.columna}>
              <Left >
                <Thumbnail 
                source={require('./../assets/Cruz-Roja.jpg')} 
                style = {styles.imagen}
                />
                <Body>
                  <Text style = {styles.tit2} >Cruz Roja</Text>
                  <Text style = {styles.ti1} >Juigalpa,CHontales</Text>
                </Body>
              </Left>
              <Button onPress={handleCall2Press} style = {styles.But} >
                   
                  <Text style = {styles.icon}>Llamar</Text>
                </Button>
            
          
              <Right>
       
              </Right>
            </CardItem>

            <Text style = {styles.separador}></Text>
            <CardItem style = {styles.columna}>
              <Left >
                <Thumbnail 
                source={require('./../assets/bomberos.jpg')} 
                style = {styles.imagen}
                />
                <Body>
                  <Text style = {styles.tit2} >Bomberos</Text>
                  <Text style = {styles.ti1} >Juigalpa,CHontales</Text>
                </Body>
              </Left>
          
                  <Button onPress={handleCall3Press} style = {styles.But} >
                    <Text style = {styles.icon}>Llamar</Text>
                  </Button>
                 
              <Right>
       
              </Right>
            </CardItem>
            <Text style = {styles.separador}></Text>
            
        <Header style = {styles.container}>
        <Text style = {styles.titulo}>Contacto de Emergencia</Text>
        </Header>
        <Text style = {styles.separador}></Text>
            <CardItem style = {styles.columna}>
              <Left >
                <Thumbnail 
                source={require('./../assets/rosa.jpg')} 
                style = {styles.imagen}
                />
                <Body>
                  <Text style = {styles.tit2} >Rosa Isleydi Arestegui</Text>
                  <Text style = {styles.ti1} >Juigalpa,CHontales</Text>
                </Body>
              </Left>
          
                  <Button onPress={handleCall4Press} style = {styles.But} >
                    <Text style = {styles.icon}>Llamar</Text>
                  </Button>
                 
              <Right>
       
              </Right>
            </CardItem>
            <Text style = {styles.separador}></Text>
        </Content>
      </Container>
    );
  }
}
const styles =  StyleSheet.create({
  container:{
      backgroundColor: '#1f65ff',
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
  fontSize: 18,
  fontWeight: 'bold',
  marginTop:30,
  marginStart:10,
  color: '#98cb40',
  textAlign:'auto'
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
  borderTopRightRadius: 15,
  marginLeft: 10,
  marginHorizontal: 10,
},
fondo:{
  backgroundColor: '#261237',
},

imagen:{
  width: 70,
  height: 70,
  resizeMode: 'cover',
  borderRadius: 10,
  marginLeft: 10,
  marginTop: 70
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
  marginTop:90,
  marginLeft:120,
  borderRadius:15,
  backgroundColor:"#EF578E"
},
But2:{
  width: 95,
  height: 45,
  margin:-45,
  marginLeft:200,
  borderRadius:15,
  backgroundColor:"#EF578E"
},
})
