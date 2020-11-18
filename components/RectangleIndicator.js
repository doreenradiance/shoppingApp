import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function RectangleIndicator() {
    return (
        <View style={styles.midInd}></View>
    )
}

const styles = StyleSheet.create({
    midInd:{
        backgroundColor:"blue",
        height:10,
        width:30,
        borderRadius:5,
        marginHorizontal:2
      },
})
