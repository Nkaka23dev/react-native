import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import Box from './components/Box'

const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

export default function App() {
  return (
    <SafeAreaView >
      <FlatList data={COLORS} />
      <View style={styles.container}>
        <Text style={styles.myText}>Here are some boxes of different colors</Text>
        <Box colorName="Red" hexColor="#FF0000" />
        <Box colorName="blue" hexColor="#0000FF" />
        <Box colorName="Magenta" hexColor="#FF00FF" />
        <Box colorName="Orange" hexColor="#FFA500" />
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
