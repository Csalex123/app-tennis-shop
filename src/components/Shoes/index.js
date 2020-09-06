import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Shoes({ image, children = 'Tênis sem nome', price, onClick }) {

    function filterDesc(desc) {
        if (desc.length < 27) {
            return desc
        } else {
            return `${desc.substring(0, 15)} ...`
        }
    }

    return (
        <TouchableOpacity onPress={onClick} style={styles.container}>
            <Image
                source={image}
                style={styles.shoesImg}
            />
            <Text style={styles.shoesText}>
                {filterDesc(children)}
            </Text>
            <View opacity={0.4}>
                <Text style={styles.shoesPrice}>{price}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    shoesImg: {
        width: 175,
        height: 175,
    },
    shoesText: {
        textAlign: 'center',
        fontSize: 16
    },
    shoesPrice: {
        textAlign: 'center',
    }
})