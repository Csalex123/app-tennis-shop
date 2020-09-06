import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import Dot from '../../components/Dot';
import SizeButton from '../../components/SizeButton';

export default function Detail({ navigation }) {

    navigation.setOptions({
        headerTitle: 'Nike Downshifter 10'
    })

    return (
        <ScrollView style={styles.container, [{ marginVertical: 20 }]}>
            <Image
                source={require('../../assets/1.png')}
                style={styles.image}
                resizeCover={'cover'}
            />

            <View>
                <View>
                    <Text style={[styles.title, { fontSize: 24 }]}>R$ 280,90</Text>
                </View>
                <View opacity={0.4}>
                    <Text style={[styles.title, { fontSize: 30 }]}>Nike Downshifter 10</Text>
                </View>

                <View style={styles.dotContainer}>
                    <Dot color="#237964" />
                    <Dot color="#fb6e53" />
                    <Dot color="#ddd" />
                    <Dot color="#000" />
                </View>

                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <SizeButton bgColor="#17181a" color="#FFF">39</SizeButton>
                        <SizeButton>41</SizeButton>
                        <SizeButton>42</SizeButton>
                        <SizeButton>43</SizeButton>
                    </ScrollView>
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    image: {
        width: '100%',
    },
    title: {
        fontFamily: 'Anton_400Regular',
        paddingHorizontal: '2%'
    },
    dotContainer: {
        flexDirection: 'row',
        marginVertical: '7%'
    }
})