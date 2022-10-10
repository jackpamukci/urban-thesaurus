import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Definition from '../components/Definition'

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


const Second = () => {

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

            <ScrollView >
            <Definition />
            <Definition />
            <Definition />
            <Definition />
            <Definition />
          </ScrollView>
          </SafeAreaView>
      
        );



      }
}

export default Second

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: 8
    }
})