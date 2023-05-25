import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

export default function Hola(persona) {
  return (
    
      <View style={styles.container}>
        <Image style={styles.img} source={{uri: persona.ownerAvatarUrl}} />
        
        <Text style={styles.strong}>
          
          este es mi id:{persona.id}
        </Text>
        <Text >
          este es mi nombre:{persona.fullName}
        </Text>
        <Text >
          descripcion:{persona.description}
        </Text>
      </View>
     
  );
}

const styles = StyleSheet.create({
  
  img:{
    width:48,
    height:48,
    margin:'auto',
  },
});
