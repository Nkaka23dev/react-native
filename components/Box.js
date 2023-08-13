import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Box({ name, bgColor }) {
    const bgStyles = {
        backgroundColor: bgColor,
    }
    return (
        <View style={[styles.box, bgStyles]} >
            <Text style={styles.boxText}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    boxText: {
        color: 'white',
        fontSize: 18,
    },

    box: {
        paddingVertical: 10,
        marginHorizontal: 20,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

