import {TAMBAHI, KURANGI} from './type'

export const tambahiList = (index) => ({
    type:TAMBAHI,
    payload:index
});

export const kurangiList = (index) => ({
    type:KURANGI,
    payload:index
})