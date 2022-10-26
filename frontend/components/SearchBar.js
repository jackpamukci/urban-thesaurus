import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import React, {useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function SearchBar() {
  
  const [newWord, setNewWord] = useState('')

  const searchWord = (enteredWord) => {
    setNewWord(enteredWord)
  }

  const navigation = useNavigation();

  const getInfo = () => {
    const url = 'https://urbanthesaurusapi.herokuapp.com/homepage/' + newWord
    axios.get(url)
    .then(function (response) {
      console.log(response.data) 
      console.log(newWord)       
      navigation.push("Second",
          {
            'thesaurus': response.data.thesaurus,
            'definitions': response.data.urbdefinition
          });
    })
    .catch(function (error){
      console.log(error)
    })
  }



  return (
    <View >

      <LinearGradient 
      style={styles.container} 
      colors={['#410c87', '#b51238']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}>

      <View style={styles.backButtonView}>
        <TouchableOpacity style={{flex: 1}}>
        {/* <Text>piss</Text> */}
        <MaterialIcons 
        onPress={()=>navigation.goBack()}
        style={styles.backButton} name="arrow-back-ios" size={30} color="rgba(255, 255, 255, 0.3)"/> 
        </TouchableOpacity>
      </View>

      <View style={styles.searchSection}>
        <MaterialIcons style={styles.searchIcon} name="search" size={20} color="rgba(255, 255, 255, 0.3)"/> 

        <TextInput
        placeholder='Type any word...'
        placeholderTextColor={'rgba(255, 255, 255, 0.3)'}
        style={styles.input}
        onChangeText={searchWord}
        value={newWord}
        onSubmitEditing={()=>getInfo()}/>

      </View>

      <View style={styles.imageView}>
        <Image 
        source={require('../assets/urbanthesaurus-modified.png')}
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
      marginRight: 15,
      // width: 50,
      // height: 50,
      alignItems: 'center'
      // marginLeft: '3%',
      // marginTop: '1%'
    },
    
    imageDesign: {
      marginTop: 8,
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

    backButtonView: {
      backgroundColor: '#8f839c',
      borderRadius: 100,
      width: '12%',
      height: '65%',
      marginTop: 12,
      marginLeft: 5
      
    },

    backButton: {
      flex: 1,
      marginLeft: 13,
      marginTop: 7
    },

    searchIcon: {

    },

    searchSection: {
      height: '65%',
      width: '65%',
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