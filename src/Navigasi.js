import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import PilihanKursus from './PilihanKursus'
import ListKursus from './ListKursus'

const RootStack = createStackNavigator();


const Navigasi = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen name="List" component={ListKursus}/>
                <RootStack.Screen name="Pilihan" component = {PilihanKursus}/>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default Navigasi
