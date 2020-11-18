import React from 'react';
import { StyleSheet, View} from 'react-native';
import AddToCart from './AddToCart';
import OnlineShopping from './OnlineShopping';



export default function App() {
  return (
    <View style={styles.container}>
      {/* <AddToCart/> */}
      <OnlineShopping/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
});
