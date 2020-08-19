import React from 'react';
import {View,Text,Image} from 'react-native';
import MainStyle from '../../stylesheets/MainStyle';
import HomeStyle from '../../stylesheets/HomeStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HotelItem(props){
    return (
        <TouchableOpacity style={HomeStyle.HotelItem}>
            <Image source={require('../../assets/images/fddab36b2d6c865c15b6d780adc66635.jpg')}
            style={{
                borderRadius:10,
                width: 120,
                height:170,
            }}/>
            <View style={HomeStyle.HotelItemDetail}>
                <Text style={[HomeStyle.HotelItemDetailTitle,MainStyle.WhiteText]}>Lorem Ipsum</Text>
                <Text style={[MainStyle.FontSize,MainStyle.WhiteText,HomeStyle.HotelItemStar]}>*****</Text>
                <Text style={[MainStyle.FontSize,MainStyle.WhiteText,HomeStyle.HotelItemSapo]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            </View>
        </TouchableOpacity>
    )
}