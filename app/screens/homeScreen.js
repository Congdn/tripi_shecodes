import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text,TouchableOpacity,ScrollView } from 'react-native';
import {LogoutAction} from '../redux/actions/UserActions';
import MainStyle from '../stylesheets/MainStyle';
import UserInfo from '../components/home/UserInfo';

export default function HomeScreen() {
    const dispatch = useDispatch();
    /* const Logout=()=>{
        const logout = LogoutAction();
        dispatch(logout);
    } */
    return (
        <ScrollView>
            <UserInfo />
        </ScrollView>
    )
}