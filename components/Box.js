import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

export default function Box({ colorName, hexColor }) {
    const colors = {
        backgroundColor: hexColor
    }
    return (
        <View style={[styles.shared_padding, colors]}>
            <Text style={styles.box_text_color}>{colorName}: {hexColor}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    shared_padding: {
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 4
    },
    box_text_color: {
        color: 'white',
        fontWeight: "600",
    },
})