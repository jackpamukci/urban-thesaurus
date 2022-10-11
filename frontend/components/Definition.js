import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Definition = (props) => {

  return (
    <SafeAreaView style={styles.container}>
        {/* Term */}
      <Text style={styles.term}>{props.word}</Text>

      {/* Definition */}
      <Text style={styles.def}>{props.definition}</Text>

      {/* Example */}
      <Text style={styles.example}>{props.example}</Text>

      {/* Author and Date */}
      <View style={styles.extras}>
        <Text style={{}}>defined by: <Text style={{fontWeight: 'bold'}}>{props.author}</Text></Text>
        <Text style={{fontWeight: 'bold'}}>{props.written_on}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Definition

const styles = StyleSheet.create({
    container: {
        // flex: 0.4,
        width: '96%',
        alignSelf: 'center',
        backgroundColor: '#f2f2d3',
        marginTop: 8,
        padding: 20
    },

    term: {
        fontSize: 45,
        fontFamily: 'SourceSans',
        marginTop: -10,
    },
    
    def: {
      fontSize: 18,
      marginTop: 10,
      fontFamily: 'Lora'
    },

    extras: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 13
    },

    example: {
      fontSize: 16,
      marginTop: 18,
      fontFamily: 'Lora',
      fontStyle: 'italic',
      marginBottom: 15
    }
})