import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text,TouchableOpacity } from 'react-native';
import {LogoutAction} from '../redux/actions/userActions';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const Logout=()=>{
        const logout = LogoutAction();
        dispatch(logout);
    }
    return (
        <View>
            <Text>Home</Text>
            <TouchableOpacity
                        style={{backgroundColor:'#fff',padding:10,borderRadius:5,marginTop:20}}
                        onPress={Logout}>
                        <Text>Logout</Text>
                    </TouchableOpacity>
        </View>
    )
}