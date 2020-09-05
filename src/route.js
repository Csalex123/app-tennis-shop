import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/home';
import Detail from './pages/Detail';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home">
                <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="detail" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;
