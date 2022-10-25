import React, {useState} from 'react';
import { SearchBar } from 'react-native-elements';
import { StyleSheet, Text, View, Button, Image, SafeAreaView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Second from './Second';
import axios from 'axios';
import { useFonts } from 'expo-font';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';


  
  const Home = ({ navigation }) => {

    const [newWord, setNewWord] = useState('')
    // const navigation = useNavigation();

    const searchWord = (enteredWord) => {
      setNewWord(enteredWord)
    }

    const [fontsLoaded] = useFonts({
      'Lora': require('../assets/fonts/Lora-VariableFont_wght.ttf'),
      'SourceSans': require('../assets/fonts/SourceSansPro-Black.ttf'),
    });



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
      
      <View style={styles.urba}>
        <Image 
      source={require('../assets/urbanthesaurus-modified.png')}
      style={styles.imageDesign}
      />
        <Text style={{color:'white', fontSize: 25, fontWeight: 'bold', fontFamily: 'serif', fontStyle: 'italic'}}>Urban Thesaurus</Text>
      </View>


      <View style={{flex: 0.75, marginTop: 50}}>

          {/* <TextInput
          style={styles.searchbox}
          placeholder='Search'
          placeholderTextColor={'rgba(255, 255, 255, 0.3)'}
          textAlign="center"
          clearButtonMode='always'
          onChangeText={searchWord}
          value={newWord}
          onSubmitEditing={() => getInfo()
          }/> */}
          <SearchBar 
              style={{width: 100}}
              placeholder='Search'
              placeholderTextColor={'rgba(255, 255, 255, 0.3)'}
              textAlign="left"
              clearButtonMode='always'
              onChangeText={searchWord}
              value={newWord}
              onSubmitEditing={() => getInfo()
                    }/>
          


      </View>


      
    </SafeAreaView>
  );
  }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#313447',
  },

  searchbox: {
    width: '90%',
    
  },

  imageDesign : {
    flex: 1,
    maxHeight: 60,
    maxWidth: 60,
    marginLeft: '8%'
  },
  urba: {
    alignItems: 'center',
    marginTop: '30%',
    backgroundColor: 'red',
    flexDirection: 'row',
    height: 50

  },
  searchIcon: {
    marginLeft: '10%',
    marginTop: 100
  }
});

export default Home;