import { StyleSheet, Text, View, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import AppLoading from 'expo-app-loading';
import axios from 'axios';


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

const [dataRecieved, setDataRecieved] = useState(false)

const { thesaurus, urbandefinitions } = route.params;

const data = {
  'thesaurus': thesaurus,
  'urbdefinition': urbandefinitions
}

const getDefs = (term) => {
  const url = 'https://urbanthesaurusapi.herokuapp.com/secondpage/' + term.item
  axios.get(url)
  .then((response) => {
    console.log(response.data)
    navigation.navigate("Third", response.data);
  })
            
    // navigation.navigate("Second",
    //     {
    //       'thesaurus': response.data.thesaurus,
    //       'definitions': response.data.urbdefinition
    //     });

  .catch(function (error){
    console.log(error)
  })
}

const renderItem = ({item, index}) => {

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
      <MaterialIcons style={styles.searchIcon} name="brightness-1" size={13} color="green"/> 
      <View style={styles.itemBody}>
        <Text style={styles.itemName}>{item}</Text>
      </View>

      </TouchableOpacity>


    </View>
  );
    }
}

  const [status, setStatus] = useState('synonyms')
  const [dataList, setDataList] = useState(data['thesaurus'][status]);


  const setStatusFilter = status => {
    if (status == 'synonyms') {
      setDataList(data['thesaurus']['synonyms'])
    }
    else if (status == 'antonyms') {
      setDataList(data['thesaurus']['antonyms'])
    }
    console.log(status)
    console.log(dataList)
    setStatus(status)
  }


  return (
    <SafeAreaView style={styles.container}>

      <SearchBar/>

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
      <FlatList
      data={dataList}
      keyExtractor={(e, i) => i.toString()}
      renderItem={renderItem}/>

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
    marginTop: 19,
    marginLeft: 9,
    marginRight: 10
  }
})