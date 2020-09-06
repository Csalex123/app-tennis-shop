import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function SizeButton({ bgColor, color, children }) {
    return (
        <TouchableOpacity style={[styles.container, {backgroundColor: bgColor || '#FFF'}]}>
            <Text style={[styles.text, {color: color || '#ddd'}]}>
                {children}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: '#e6e6e6',
        borderWidth: 3,
        marginHorizontal: 10,
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})