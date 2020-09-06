import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Shoes from '../../components/Shoes';

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={[styles.container, { marginVertical: 20 }]}>
            <View style={styles.header}>
                <Image
                    source={require('../../assets/banner.png')}
                    style={styles.image}
                />

                <View style={styles.textContainer}>
                    <Text style={styles.text}>TÊNIS</Text>
                    <Text style={[styles.text, { color: '#CECECF' }]}>-</Text>
                    <Text style={[styles.text, { color: '#CECECF' }]}>MASCULINO</Text>
                    <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
                        <MaterialIcons name="filter-list" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.line} />

            <ScrollView>
                <Text style={[styles.text, { marginVertical: '2%' }]}>LANÇAMENTOS</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes
                        onClick={() => navigation.navigate('detail', 'teste')}
                        image={require('../../assets/1.png')}
                        price={'R$140,90'}>
                        Nike Air Max Dia
                    </Shoes>

                    <Shoes
                        onClick={() => navigation.navigate('detail')}
                        image={require('../../assets/2.png')}
                        price={'R$240,90'}>
                        Nike Downshifter 10
                    </Shoes>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes
                        image={require('../../assets/3.png')}
                        price={'R$640,90'}>
                        Max Air  Dia
                    </Shoes>

                    <Shoes
                        image={require('../../assets/4.png')}
                        price={'R$840,90'}>
                        Nike Epic 10
                    </Shoes>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes
                        image={require('../../assets/5.png')}
                        price={'R$440,90'}>
                        Nike Strong Dia 51
                    </Shoes>

                    <Shoes
                        image={require('../../assets/6.png')}
                        price={'R$140,90'}>
                        Nike black 10
                    </Shoes>
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    header: {
        marginBottom: 8
    },
    image: {
        width: '100%'
    },

    textContainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%',
    },
    text: {
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%'
    },
    line: {
        borderBottomColor: '#d8d8d8',
        borderBottomWidth: 2,
    }
})