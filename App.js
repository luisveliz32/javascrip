import  React ,{useState,useEffect} from 'react';
import { Button, View, Text,Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Principal from './components/Principal';

function Principal({navigation}){
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
function Logo(){
  return(
    <Image
        style={{width:50,height:50}}
        source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}
    />

  )
}


const Stack=createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Principal'>
          <Stack.Screen 
              name='Principal' 
              component={Principal}
              options={{
                headerTitle:(props)=><Logo{...props}/>,
                headerRight:()=>(
                  <Button
                    onPress={()=>alert('presionaste aqi')}
                    title='preciona aqi'
                    color='#000'
                  />
                ),
              }}
          
          />
        </Stack.Navigator> 
    </NavigationContainer>
  );
}

