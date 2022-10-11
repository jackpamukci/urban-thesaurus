import { View, Text, TextInput, StyleSheet, Image } from 'react-native'
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

export default function SearchBar(props) {



  return (
    <View >

      <LinearGradient 
      style={styles.container} 
      colors={['#410c87', '#b51238']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}>

      <View style={styles.searchSection}>
        <MaterialIcons style={styles.searchIcon} name="search" size={20} color="rgba(255, 255, 255, 0.3)"/> 

        <TextInput
        placeholder='Type any word...'
        placeholderTextColor={'rgba(255, 255, 255, 0.3)'}
        style={styles.input}
        value={props.searchText}
        onChangeText={(text)=>props.setSearchText(text)}/>

      </View>

      <View style={styles.imageView}>
        <Image 
        source={require('../assets/urbanthesaurus.png')}
        style={styles.imageDesign}/>
      </View>
      </LinearGradient>
    

    </View>
  );
};

const styles = StyleSheet.create({
    container:{
      
        // margin: 10,
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'yellow',
    },
    
    imageView: {
      flex: 1,
      marginRight: 10,
      // width: 50,
      // height: 50,
      alignItems: 'center'
      // marginLeft: '3%',
      // marginTop: '1%'
    },
    
    imageDesign: {
      marginTop: 10,
      width: 53,
      height: 53,
      // flex: 1
    }, 
    
    input: {
        width: '80%',
        padding: 10,
        // margin: 7,
        marginRight: 10,
        justifyContent: 'flex-start',
        alignSelf: 'flex-end',
        fontSize: 19,
        // backgroundColor: 'red'
    },

    searchIcon: {

    },

    searchSection: {
      height: '65%',
      width: '72%',
      margin: 12,
      backgroundColor: '#8f839c',
      // color: 'white',
      borderRadius: 7,
      // borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }
  })