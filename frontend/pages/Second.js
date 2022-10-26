import { StyleSheet, Text, View, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import AppLoading from 'expo-app-loading';
import axios from 'axios';
import Definition from '../components/Definition';


const listTab = [
  {
    content: 'synonyms'
  },
  {
    content: 'antonyms'
  },
  {
    content: 'definitions'
  }
]






const Second = ({route, navigation}) => {

const [isThesaurus, setThesaurus] = useState(true)

const { thesaurus, definitions } = route.params;

const data = {
  'thesaurus': thesaurus,
  'urbdefinition': definitions
}

const getDefs = (term) => {
  const url = 'https://urbanthesaurusapi.herokuapp.com/secondpage/' + term.item
  axios.get(url)
  .then((response) => {
    console.log(response.data)
    navigation.navigate("Third", response.data);
  })
            

  .catch(function (error){
    console.log(error)
  })
}

const renderThes = ({item, index}) => {

  if (false) {
    return (
        <AppLoading />
    )
  } else {

  return (
    <View key={index}>
      <TouchableOpacity 
      style={styles.itemContainer}
      onPress={() => getDefs({item})}>
      <MaterialIcons style={styles.searchIcon} name="brightness-1" size={9} color="green"/> 
      <View style={styles.itemBody}>
        <Text style={styles.itemName}>{item}</Text>
      </View>

      </TouchableOpacity>


    </View>
  );
    }
}

const renderDef = ({item}) => {

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


  const [status, setStatus] = useState('synonyms')
  const [dataList, setDataList] = useState(data['thesaurus'][status]);

  let synonyms = data['thesaurus']['synonyms']
  let antonyms = data['thesaurus']['antonyms']
  let urbans = Array.from(data['urbdefinition'])

  const setStatusFilter = stato => {
    
    if (stato == 'synonyms') {
      setDataList(synonyms)
      console.log(dataList)
      setThesaurus(true)
      // setDataType('thesaurus')
    }
    else if (stato == 'antonyms') {
      setDataList(antonyms)
      console.log(dataList)
      setThesaurus(true)
      // setDataType('thesaurus')
    }
    else{
      setDataList(urbans)
      setThesaurus(false)
      
    }
    
    setStatus(stato)
    console.log(stato)
    console.log(isThesaurus)
    
    
  }


  return (
    <SafeAreaView style={styles.container}>

      <SearchBar
      />

      {/* <Tab Bar/> */}
      <View style={styles.listTab}>
      {
        listTab.map(e => (
      <TouchableOpacity 
      style={[styles.btnTab, status === e.content && styles.btnTabActive]} 
      onPress={() => setStatusFilter(e.content)}>
        <Text style={[styles.textTab, status === e.status && styles.textTabActive ]}>{e.content}</Text>
      </TouchableOpacity>
        ))
      }
      </View>


      <View style={styles.listo}>
        {isThesaurus ? 
      <FlatList
      data={dataList}
      keyExtractor={(e, i) => i.toString()}
      renderItem={renderThes}/>
        : <FlatList
        data={dataList}
        renderItem={renderDef}
      />}
      
      </View>
      
    </SafeAreaView>
  )
}

export default Second

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: '#313447'
  },
  listTab: {
    flexDirection: 'row',
    alignSelf: 'center',
    // marginTop: 50,
  },
  btnTab: {
    width: Dimensions.get('window').width / 3,
    flexDirection: 'row',
    borderWidth: 0.5, 
    borderColor: '#EBEBEB',
    padding: 10,
    justifyContent: 'center',
  },
  textTab: {
    fontSize: 15,
    color: '#fff',
    fontFamily: ''
  },
  btnTabActive: {
    backgroundColor: '#E6838D'
  },
  textTabActive: {
    color: '#fff'
  },
  itemContainer: {
    flexDirection: 'row',
    height: 80,
    paddingVertical: 15,
    borderWidth: 0.6,
    borderColor: 'black',

  },
  itemBody: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    
  },
  itemName: {
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 16
  },
  listo: {
    // backgroundColor: 'beige',
    flex: 1
  },
  searchIcon: {
    marginTop: 21,
    marginLeft: 12,
    marginRight: 10
  }
})