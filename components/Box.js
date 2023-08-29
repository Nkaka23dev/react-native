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