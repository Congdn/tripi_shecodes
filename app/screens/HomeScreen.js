import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text,TouchableOpacity,ScrollView } from 'react-native';
import {LogoutAction} from '../redux/actions/UserActions';
import MainStyle from '../stylesheets/MainStyle';
import UserInfo from '../components/home/UserInfo';
import HotelBox from '../components/home/HotelBox';

export default function HomeScreen(props) {
    /* const dispatch = useDispatch();
    const Logout=()=>{
        const logout = LogoutAction();
        dispatch(logout);
    } */
    return (
        <ScrollView style={MainStyle.BackgroundMainColor}>
            <UserInfo />
            <HotelBox title="Deal hot" nav={props.navigation}></HotelBox>
            <HotelBox title="Gần đây" nav={props.navigation}></HotelBox>
            <HotelBox title="Đặt nhiều" nav={props.navigation}></HotelBox>
        </ScrollView>
    )
}