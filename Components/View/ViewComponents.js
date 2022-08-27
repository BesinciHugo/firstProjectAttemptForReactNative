import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import TextComponent from './TextComponent'

function ViewComponents({kisi, sozu, uyari}) {
  
  return (

    <View style={styles.twit_box} >

      <TextComponent isStyled = {true} textimsi = {kisi}/>
      
      <TextComponent isStyled = {false} textimsi = {sozu}/>
      
      <Button title="LIKE" onPress={() => {alert(uyari)}} />

    </View>

  )
}

const styles = StyleSheet.create({
  twit_box: {
    flex: 0.2,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: 'black',
    justifyContent: 'space-between',
  },
})

export default ViewComponents