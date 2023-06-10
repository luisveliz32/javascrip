import  React ,{useState,useEffect} from 'react';
import { Button, View, Text,Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default  function Principal({navigation}){
  const[cont,setcont]=useState(0);
  useEffect(()=>{
    navigation.setOptions({
      headerRight:()=>(
        <Button 
          onPress={()=>setcont(cont+1)}
          title='contador'
        />
      )
    })
  })
  return(
    
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}} >
        <Text>Pantalla Principal{cont} </Text>

      <Button 
        title='Ir a la Siguiente pantalla'
        onPress={()=>navigation.navigate('Detalles')}
      />
    </View>
  );
}





