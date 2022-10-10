import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Definition from '../components/Definition'

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import SearchBar from '../components/SearchBar';
import { useState } from 'react'

import { Dimensions } from 'react-native';


const Third = () => {

    const [searchText, setSearchText] = useState('');

    const [fontsLoaded] = useFonts({
        'Lora': require('../assets/fonts/Lora-VariableFont_wght.ttf'),
        'SourceSans': require('../assets/fonts/SourceSansPro-Black.ttf'),
      });

    
      if (!fontsLoaded) {
        return (
            <AppLoading />
        )
      } else {



        return (
          <SafeAreaView style={styles.container}>

              <View style={styles.search}>
              <SearchBar searchText={searchText} setSearchText={setSearchText}/>
              {/* <Text>{searchText}</Text> */}
              </View>
            

              
              <ScrollView>

              <Definition />
              <Definition />
              <Definition />
              <Definition />
              </ScrollView>
              
          
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