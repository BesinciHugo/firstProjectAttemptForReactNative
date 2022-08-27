import React from "react";
import {SafeAreaView, Text, View, Button, StyleSheet } from 'react-native';

const App = ()=> {
    const merhaba = (Label) => {console.log('Salam dunya  ' + Label)}

    return (
        <SafeAreaView style = {styles.container} >
            <View style = {styles.twit_box} >
                <Text style = {styles.text_big} > Master Yoda </Text>
                <Text>Fear leads to anger, anger leads to hate. And hate leads to suffering</Text>
                <Button title="LIKE" onPress={() => {alert('MAY THE FORCE BE WITH YOU')}} />
            </View>

            <View style = {styles.twit_box} >
                <Text style = {styles.text_big} >Jedi Master Obi Wan Kenobi</Text>
                <Text>Your eyes can deceive you ; don't trust them</Text>
                <Button title="LIKE" onPress={() => {alert('HELLO THERE')}} />
            </View>

            <View style = {styles.twit_box} >
                <Text style = {styles.text_big} >Shmi Skywalker</Text>
                <Text>Now, be brave and don't look back. Never</Text>
                <Button title="LIKE" onPress={() => {alert('DO NOT BE SAD ANAKIN')}}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container : {
        flex : 1,
        backgroundColor : 'gray',
        justifyContent : 'space-evenly'
    },

    twit_box : {
        flex : 0.2,
        backgroundColor : 'white',
        borderTopLeftRadius : 10 ,
        borderTopRightRadius : 10,
        borderColor : 'black',
        justifyContent : 'space-between',
    },

    text_big : {
        fontSize : 20
    },

})

export default App;