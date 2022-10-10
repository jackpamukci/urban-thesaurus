import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, SafeAreaView, TextInput } from 'react-native';
export default function App() {

  const [newWord, setNewWord] = useState('')

  const searchWord = (enteredWord) => {
    setNewWord(enteredWord)
  }
  
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.logodiv}>
      <Image 
      source={require('./assets/urbanthesaurus.png')}
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
          value={newWord}>
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
