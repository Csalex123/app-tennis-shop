import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import Dot from '../../components/Dot';
import SizeButton from '../../components/SizeButton';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

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

                <View style={styles.textContainer}>
                    <Text style={[styles.textTitle]}>
                        Nike Downshifter 10
                    </Text>
                    <Text style={styles.textContainer}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis ipsum sapien. Nullam blandit neque sed nibh sollicitudin luctus. Vivamus vel hendrerit mi, a aliquam nisi. Sed est risus, condimentum non metus vel
                    </Text>
                    <Text style={styles.textList}>
                        - Categoria: Amortecimento
                    </Text>
                    <Text  style={styles.textList}>
                        - Material: Mesh
                    </Text>
                </View>

                <Button />

                <View style={styles.line} />

                <Footer />
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
    },
    textContainer: {
        fontSize: 16,
        lineHeight: 25,
        marginVertical: '2%',
        paddingHorizontal: '2%',
    },
    textTitle: {
        fontSize: 22,
        lineHeight: 25,
        paddingHorizontal: '2%',
        marginVertical: '2%',
    },
    textList: {
        fontSize: 16,
        lineHeight: 25,
    },
    line: {
        borderWidth: 1,
        borderBottomColor: '#DDD',
    }
})