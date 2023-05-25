import React,{useEffect, useState} from 'react';
import { FlatList, View, StyleSheet,Text, TextInput } from 'react-native';

const Api = () => {
    const OptenerMovies= async () => {
        try {
            const response=await fetch('https://reactnative.dev/movies.json');
            const movies=await response.json();
            console.log(movies.movies);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(()=>{
        OptenerMovies();
    },[]);
    
  return (
    <View >
        

        <Text>
            holaaaaaa
        </Text>


    </View>
  );
};

export default Api;
