import React from 'react';
import { useSelector } from 'react-redux';
import MainStyle from '../../stylesheets/MainStyle';
import HomeStyle from '../../stylesheets/HomeStyle';
import Colors from '../../commons/Colors';
import { View, Text } from 'react-native';

export default function UserInfo() {
    const user = useSelector(s => s.user_info);
    const cashback = useSelector(s => s.cashback);


    return (
        <View style={[MainStyle.Container,MainStyle.WhiteText]}>
            <Text style={[MainStyle.H4,MainStyle.WhiteText]}>Xin chào {user ? user.name : "Công Ngô"}</Text>
            <View style={[MainStyle.Margin10,{flexDirection:'row', width:'100%', height:40}]}>
                <Text style={[MainStyle.FontSize,MainStyle.WhiteText]}>Số tiền hoàn lại:</Text>
                <Text style={[MainStyle.H3,MainStyle.WhiteText,{position:'absolute',right:10}]}>{cashback ?? '1.000.000'}đ</Text>
            </View>
        </View>
    )
}
