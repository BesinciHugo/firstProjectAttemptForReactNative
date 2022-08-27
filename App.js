import React from "react";
import {SafeAreaView, Text, View, Button, StyleSheet } from 'react-native';
import ViewComponents from "./Components/View/ViewComponents";

const App = () => {
   
    const veriler = [
        {
        'kisi' : 'Jedi Master Yoda',
        'sozu' : 'Fear leads to anger, anger leads to hate. And hate leads to suffering',
        'alert' : 'MAY THE FORCE BE WITH YOU'
    },
    {
        'kisi' : 'Jedi Master Obi Wan Kenobi',
        'sozu' : 'Your eyes can deceive you ; do not trust them',
        'alert' : 'HELLO THERE'
    },
    {
        'kisi' : 'Shmi Skywalker',
        'sozu' : 'Now, be brave and do not look back. Never',
        'alert' : 'DO NOT BE SAD ANAKIN'
    }
]

    

    return (
        <SafeAreaView style = {styles.container} >
            {veriler.map((veri, index) => {
                return(
                <ViewComponents kisi = {veri.kisi} sozu = {veri.sozu} uyari = {veri.alert} />
            )})}

                

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container : {
        flex : 1,
        backgroundColor : 'gray',
        justifyContent : 'space-evenly'
    }

})

export default App;