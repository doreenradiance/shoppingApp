import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import AddToCart from './src/screens/AddToCart';
import OnlineShopping from './src/screens/OnlineShopping';
import PaymentSuccessful from './src/screens/PaymentSuccessful';
import JacketsScreen from '../rn-eCommerce/src/screens/JacketsScreen';


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: "JacketsScreen",
          // headerStyle:{
          //   backgroundColor:"#3b31eb"
          // },
          headerTintColor: "#3b31eb",
          headerTitleAlign: "center",
          headerRight: () => (<Text style={{ color: "#3b31eb", marginRight: 20 }}>Icons</Text>)
        }}
      >
        <Stack.Screen
          // options={{}}
          name='JacketsScreen' component={JacketsScreen} />
        <Stack.Screen name='RedJacket' component={RedJacket} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

// //   }
// });
