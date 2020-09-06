import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Shoes from '../Shoes';

export default function Footer() {
    return (
        <View>
            <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
            <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes
                            image={require('../../assets/1.png')}
                            price={'110,90'}>
                            Nike Air Max Dia
                        </Shoes>
                    </View>

                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes
                            image={require('../../assets/2.png')}
                            price={'510,90'}>
                            Nike Epic Max Dia
                        </Shoes>
                    </View>

                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes
                            image={require('../../assets/3.png')}
                            price={'150,90'}>
                            Nike Max Max Dia
                        </Shoes>
                    </View>

                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes
                            image={require('../../assets/4.png')}
                            price={'210,90'}>
                            Nike Max Max Dia
                        </Shoes>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%',
        textAlign: 'center'
    }
})