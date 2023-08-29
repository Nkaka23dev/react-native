import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Box from './components/Box'

export default function App() {
  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Text style={styles.myText}>Here are some boxes of different colors</Text>
        <Box colorName="Red" hexColor="#FF0000" />
        <Box colorName="blue" hexColor="#0000FF" />
        <Box colorName="Magenta" hexColor="#FF00FF" />
        <Box colorName="Orange" hexColor="#FFA500" />
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  box_text_color: {
    color: 'white',
    fontWeight: "600",
  },
  bg_red: {
    backgroundColor: 'red',
  },
  bg_blue: {
    backgroundColor: '#0000FF',
  },
  bg_magenta: {
    backgroundColor: '#FF00FF',
  },
  bg_orange: {
    backgroundColor: '#FFA500',
  },
  container: {
    marginHorizontal: 20,
    marginVertical: 50
  },
  myText: {
    fontWeight: "900",
    fontSize: 16,
    paddingBottom: 5
  }
})
