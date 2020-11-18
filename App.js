import React from 'react';
import { StyleSheet, View} from 'react-native';
import AddToCart from './AddToCart';



export default function App() {
  return (
    <View style={styles.container}>
      <AddToCart/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
});
