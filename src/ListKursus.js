import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import {kursus} from './DataKursus'

import { useDispatch } from 'react-redux'
import { tambahiList } from './redux/action'

const klikAmbilKursus = (index) => {
    if(kursus.pilihan.includes(index) == false){
        kursus.pilihan.push(index);
    }else{
        alert(kursus.list[index]+" sudah pernah diambil sebelumnya.");
    }
    kursus.pilihan.sort();    
    var daftar = '';
    var i = 0;
    kursus.pilihan.map((index)=>{
        i++;
        daftar = daftar+i+'. '+kursus.list[index]+'\n';
    })
    alert('Pilihan: \n'+daftar);
}

const ListKursus = ({navigation}) => {
    const dispatch = useDispatch();
    return (
        <View style={styles.layarAtas}>
            {
                kursus.list.map((value,index)=>(
                    <View style={styles.listView} key={index}>
                        <Text style={styles.listText}>{value}</Text>
                        <TouchableOpacity onPress={()=>{klikAmbilKursus(index);dispatch(tambahiList(index))}}>
                            <Text style={styles.listButton}>+</Text>
                        </TouchableOpacity>
                    </View>
                ))
            }
            <View>
                <Button 
                    title = "Lihat List Pilihan"
                    onPress={()=>navigation.navigate('Pilihan')}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    layarAtas:{
        flex:1, 
        padding:10
    }, 
    listView:{
        borderBottomWidth:1,
        borderBottomColor:'#dedede',
        paddingTop:5,
        paddingBottom:5,
        flexDirection:'row'
    },
    listText:{
        flex:3,
        fontSize:20
    },
    listButton:{
        alignItems:'center',
        backgroundColor:'#DDDDDD',
        padding:5,
        paddingLeft:20,
        paddingRight:20
    }
})
export default ListKursus
