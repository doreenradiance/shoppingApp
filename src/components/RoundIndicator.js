import React from 'react';
import {View, StyleSheet} from 'react-native'

const RoundIndicator = () => {
    return (
        <View style={styles.firInd}></View>
    );
}

const styles = StyleSheet.create({
    firInd:{
        backgroundColor:"#4287f5",
        height:10,
        width:10,
        borderRadius:5
      },
})
export default RoundIndicator;
