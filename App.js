import { Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import Box from './components/Box'

export default function App() {
  return (
    <SafeAreaView >
      <FlatList
        style={styles.container}
        data={COLORS} keyExtractor={item => item.colorName}
        renderItem={({ item }) =>
          (<Box colorName={item.colorName} hexColor={item.hexCode} />)}
        ListHeaderComponent={<Text style={styles.myText}>List of all colors</Text>}
        ListEmptyComponent={<Text>No Data Found</Text>}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
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
    marginHorizontal: 12,
    marginVertical: 50
  },
  myText: {
    fontWeight: "900",
    fontSize: 16,
    paddingBottom: 5
  }
})

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
