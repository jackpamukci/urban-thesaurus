import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Image } from 'react-native-elements'

export default function Sear(){
  return (
    <View style={styles.hbar}>
      <TextInput placeholder='name' style={styles.input}></TextInput >
      <View style={styles.logodiv}>
        <Image 
        source={require('./assets/urbanthesaurus.png')}
        style={styles.imageDesign}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

    hbar:{
        backgroundColor: 'pink',
        height: '35%'
    },

    imageDesign: {

    },

    logodiv: {
        flex: 0.15, 
        justifyContent: 'center', 
        alignItems: 'center', 
        // backgroundColor: '',
        width: '70%',
        marginLeft: '15%'
      },
    

    input: {
        width: '60%',
        height: '50%',
        position: 'absolute',
        marginTop: 30,
        marginLeft: '15%',
    
        // borderWidth: 5,
        borderRadius: 2,
        backgroundColor: '#b399c9',
        fontSize: 15
    }
})

