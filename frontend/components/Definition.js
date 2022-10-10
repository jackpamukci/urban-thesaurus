import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Definition = () => {





  return (
    <SafeAreaView style={styles.container}>
        {/* Term */}
      <Text style={styles.term}>In the Lavender haze</Text>

      {/* Definition */}
      <Text style={styles.def}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>

      {/* Example */}
      <Text style={styles.example}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>

      {/* Author and Date */}
      <View style={styles.extras}>
        <Text style={{}}>defined by: <Text style={{fontWeight: 'bold'}}>Big Dick Brian</Text></Text>
        <Text style={{fontWeight: 'bold'}}>Aug 9, 2009</Text>
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
        backgroundColor: 'beige',
        marginTop: 8,
        padding: 20
    },

    term: {
        fontSize: 45,
        fontFamily: 'SourceSans',
        marginTop: -10
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