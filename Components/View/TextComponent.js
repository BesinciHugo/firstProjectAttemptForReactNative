import React from 'react'
import {Text, StyleSheet} from 'react-native'

function TextComponent({textimsi, isStyled}) {
  return (
    <Text style = { isStyled && styles.text_big} >
        {textimsi}
    </Text>
  )
}

const styles = StyleSheet.create({
    text_big: {
        fontSize: 20
      },
})

export default TextComponent