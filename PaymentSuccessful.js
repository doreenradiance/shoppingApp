import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from './components/Button';
import RectangleIndicator from './components/RectangleIndicator';
import RoundIndicator from './components/RoundIndicator';


export default function PaymentSuccessful() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>PAYMENT SUCCESSFUL</Text>

        <Text style={styles.details}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Text>
      </View>
      <Image source={require('./assets/payment-successful.png')} style={styles.image} />

      <Button
        onPress={() => alert('Hello Native')}
        title="Get Started"
        buttonStyle={styles.btn}
        textStyle={styles.btnText}
      />
      <View style={styles.footer}>
          <Text>Previous</Text>
        <View style={styles.indicators}>
          <RoundIndicator />
          <RoundIndicator />
          <RectangleIndicator />
        </View>
          <Text></Text>
        
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 50,
    justifyContent: "space-around"

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  details: {
    marginTop: 20
  },

  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  btn: {
    borderRadius: 50,
    backgroundColor: 'blue',
    height: 50,
    width: 200,
    alignSelf: "center",
    justifyContent: "center"
  },

  btnText: {
    color: "white",
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  footer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center"
  },
  indicators: {
    flexDirection: "row",
    alignItems: "center",
  },
  firInd: {
    backgroundColor: "blue",
    height: 10,
    width: 10,
    borderRadius: 5
  },
  midInd: {
    backgroundColor: "blue",
    height: 10,
    width: 30,
    borderRadius: 5,
    marginHorizontal: 2
  },
  lastInd: {
    backgroundColor: "blue",
    height: 10,
    width: 10,
    borderRadius: 5
  },

});
