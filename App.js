import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Principal({navigation}){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}} >
      <Text>Pantalla Principal</Text>

      <Button 
        title='Ir a la Siguiente pantalla'
        onPress={()=>navigation.navigate('Detalles')}
      />
    </View>
  );
}

function Detalles(){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}} >
      <Text>Pantalla detalles</Text>

    </View>
  )

}
const Stack=createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Principal'>
          <Stack.Screen name='Principal' component={Principal}/>
          <Stack.Screen name='Detalles' component={Detalles}/>
        </Stack.Navigator> 
    </NavigationContainer>
  );
}


