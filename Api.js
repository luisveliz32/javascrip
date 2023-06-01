import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

const Api = () => {
 const[carga,setcargar]=useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      console.log(json.movies);
      setData(json.movies);
      
    } catch (error) {
      console.error(error);
    }finally{
      setcargar(false);
      
    }
  };

  useEffect(() => {
    getMovies();
    console.log(data);
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {carga ?(<ActivityIndicator/>):(
        <FlatList
        data={data}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
            <Text>
            {item.title}, {item.releaseYear}
            </Text>
        )}
        />

      )

      }
      
      
    </View>
  );
};

export default Api;
