import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Definition from '../components/Definition'

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import SearchBar from '../components/SearchBar';
import { useState } from 'react'


const Third = ({route, navigation}) => {


    const [searchText, setSearchText] = useState('');

    const defs = route.params;

    const [fontsLoaded] = useFonts({
        'Lora': require('../assets/fonts/Lora-VariableFont_wght.ttf'),
        'SourceSans': require('../assets/fonts/SourceSansPro-Black.ttf'),
      });


      
      const renderItem = ({item}) => {

        // var b = item.written_on.split(/\D+/);
        let b = new Date(item.written_on.substring(0, 10));

        b = b.toUTCString().substring(5, 16)
        

        return (
          <Definition 
                  word={item.word}
                  definition={item.definition.replace(/[\[\]']+/g, '')}
                  example={item.example.replace(/[\[\]']+/g, '')}
                  author={item.author}
                  written_on={b}/>
        );
      }

      if (!fontsLoaded) {
        return (
            <AppLoading />
        )
      } else {

        return (
          <SafeAreaView style={styles.container}>

              <View style={styles.search}>
              <SearchBar searchText={searchText} setSearchText={setSearchText}/>
              </View>
            

              
              <FlatList
                data={defs}
                renderItem={
                  renderItem
                }
              />
          
          </SafeAreaView>
      
        );



      }
}

export default Third

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#313447',
        paddingBottom: 8
    },

    search: {
      // backgroundColor: 'black',
    }
})