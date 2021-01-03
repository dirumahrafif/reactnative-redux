import {TAMBAHI,KURANGI} from './type'
import {kursus} from '../DataKursus'

export const reducerKursus = (state=kursus,action) => {
    switch(action.type){
        case TAMBAHI:
            console.log('PROSES TAMBAH');
            return {...state,pilihan:klikAmbilKursus(action.payload)}
        case KURANGI:
            console.log('PROSES KURANG');
            return {...state,pilihan:klikKurangiKursus(action.payload)}
    }
}

const klikAmbilKursus=(index)=>{
    if(kursus.pilihan.includes(index) == false){
        kursus.pilihan.push(index);
    }
    kursus.pilihan.sort();
    return kursus.pilihan;
}

const klikKurangiKursus = (index) => {
    kursus.pilihan.splice(index,1);
    kursus.pilihan.sort();
    return kursus.pilihan;
}