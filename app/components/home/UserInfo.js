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
            <Text style={[MainStyle.H4,MainStyle.WhiteText]}>Xin chào {user ? user.name : "___"}</Text>
            <View style={[MainStyle.Margin10,{flexDirection:'row'}]}>
                <Text style={[MainStyle.FontSize,MainStyle.WhiteText,{flex:0.9}]}>Số tiền hoàn lại:</Text>
                <Text style={[MainStyle.H3,MainStyle.WhiteText,{flex:0.1}]}>{cashback}đ</Text>
            </View>
        </View>
    )
}
