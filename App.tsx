/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Login from './HealthCare/screens/Login'

const App = () => {
  return (
    <View style={Styles.container} >
      <Login />
    </View>
  )
}

export default App

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
})