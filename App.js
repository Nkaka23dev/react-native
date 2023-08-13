import React from 'react'
import { View, StyleSheet, Text, SafeAreaView } from 'react-native'
import Box from './components/Box'

export default function App() {
  return (
    <SafeAreaView>
      {/* this the container of my app */}
      <View style={styles.container}>
        <Text style={styles.text}>
          Here are some box of different Color
        </Text>
        {/* this are my different boxes */}
        <View style={styles.parent}>
          <Box name="Red" bgColor="red" />
          <Box name="Blue" bgColor="blue" />
          <Box name="Green" bgColor="green" />
          <Box name="Yellow" bgColor="yellow" />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  parent: {
    marginTop: 20,
  },
  container: {
    marginVertical: 60,
  },
  text: {
    marginHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },
})



