import React from 'react';
import { View, Text, TextInput, TouchableOpacity, AsyncStorage, Alert } from 'react-native';

export default function LoginScreen(props) {
    const [userID,setUserID] = React.useState('');
    const isCheck = true;
    const Login = ()=>{
        async function asyncCheckUserID(){
            //Call api
            //...
            //Login true
            //...
            if(isCheck){
                let userStoreage = {
                    data:userID,
                    currentTime: new Date(),
                    time:1800 //seconds
                }
                await AsyncStorage.setItem("user",JSON.stringify(userStoreage))
                props.navigation.navigator('App');
            }
            else{
                Alert.alert('Thông báo','Đăng nhập không thành công',
                [
                    {
                        text:'Đồng ý'
                    }
                ],
                { cancelable: false }
                )
            }
        }
        asyncCheckUserID();
    }

    return (
        <View>
            <Image source={require('../../assets/images/abd21486e99ebef79beae157c75ac5d2.jpg')} />
            <View style={{ flex: 1, position: 'absolute', alignItems: 'center', justifyContent: 'center' }}>
                <View>
                    <Image 
                    style={{width:300,height:300}}
                    source={require('../../assets/images/abd21486e99ebef79beae157c75ac5d2.jpg')} />
                </View>
                <View>
                    <TextInput value={userID} onKeyPress={text=>setUserID(text)} />
                    <TouchableOpacity
                    onPress={Login}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}