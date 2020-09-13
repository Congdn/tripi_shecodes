import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction } from '../redux/actions/UserActions';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

export default function LoginScreen() {
    const [userID, setUserID] = React.useState('');
    const loginstatus = useSelector(state => state.userReducer.loginstatus);
    //const userid = useSelector(state => state.userid);
    const dispatch = useDispatch();
    const Login = () => {
        const loginAction = LoginAction(userID);
        dispatch(loginAction);
    }
    return (
        <View>
            <Image source={require('../assets/images/background.png')}
            style={{width:'100%',
            height:'100%'
            }} />
            <View style={{
                flex: 1,
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                marginTop: 80
            }}>
                <Image
                    style={{ width: 250, height: 250, borderRadius: 999 }}
                    source={require('../assets/images/user-type-the-shy-user.png')} />
                <Text style={{ color: '#fff', marginTop: 30 }}>{loginstatus == 0 ? "Đăng nhập không thành công" : ""}</Text>
                <TextInput
                    style={{
                        backgroundColor: '#fff',
                        width: 300,
                        marginTop: 20,
                        paddingLeft: 10,
                        borderRadius: 5,
                        fontSize: 20,
                        paddingTop:5,
                        paddingBottom:5
                    }}
                    placeholder="Username"
                    value={userID} onChangeText={text => setUserID(text)} />
                <TouchableOpacity
                    style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5, marginTop: 20 }}
                    onPress={Login}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}