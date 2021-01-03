import React from 'react'
import Navigasi from './Navigasi'

import { Provider } from 'react-redux';
import storeState from './redux/store'

export default function depan(){
    return (
        <Provider store={storeState}>
        <Navigasi/>
        </Provider>
    )
}