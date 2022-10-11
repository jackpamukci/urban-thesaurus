import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, SafeAreaView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Second from './Second';
import axios from 'axios';

  
  const Home = ({ navigation }) => {

    const [newWord, setNewWord] = useState('')
    // const navigation = useNavigation();

    const searchWord = (enteredWord) => {
      setNewWord(enteredWord)
    }


    const getInfo = () => {
      const url = 'https://urbanthesaurusapi.herokuapp.com/homepage/' + newWord
      axios.get(url)
      .then(function (response) {
        console.log(response.data)        
        navigation.navigate("Second",
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
    <SafeAreaView style={styles.container}>
      
      <View style={styles.logodiv}>
      <Image 
      source={require('../assets/urbanthesaurus.png')}
      style={styles.imageDesign}
      />
      </View>


      <View style={{flex: 0.75, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center'}}>
          <TextInput
          style={styles.searchbox}
          placeholder='search a word'
          placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
          textAlign="center"
          clearButtonMode='always'
          onChangeText={searchWord}
          value={newWord}
          onSubmitEditing={() => getInfo()
          }>
          
          </TextInput>

        <View>
          <Text>{newWord}</Text>
        </View>


      </View>


      
    </SafeAreaView>
  );
  }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  searchbox: {
    width: '80%',
    height: 50,
    // borderWidth: 5,
    borderRadius: 5,
    backgroundColor: '#b399c9',
    marginBottom: 300,
    fontSize: 25
  },

  logodiv: {
    flex: 0.15, 
    justifyContent: 'center', 
    alignItems: 'center', 
    // backgroundColor: '',
    width: '70%',
    marginLeft: '15%'
  },

  imageDesign : {
    resizeMode: 'center',
    // width: '80%',
    height: '100%',
    alignContent: 'center',
    backgroundColor: '#f2d177',
  }
});

export default Home;