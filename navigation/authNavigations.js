import React from 'react';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from '@react-navigation';
import { LoginScreen, HomeScreen, HotelScreen, PaymentScreen, UserScreen } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { AsyncStorage, ActivityIndicator } from 'react-native';

//Auth loading screen
const AuthLoadingScreen = (props) => {
    const [userID, setUserID] 
    React.useEffect(()=>{
        const userID = await AsyncStorage.getItem("userID");
        if(userID){
            props.navigation.navigate(Home);
        }
        else{
            props.navigation.navigate(Login);
        }
    },[])
    return (
        <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',}}>
            <ActivityIndicator />
        </View>
    )
}


const AppStack = StackNavigator(
    {
        Home: HomeScreen,
        Hotel: HotelScreen,
        Payment: PaymentScreen,
        User: UserScreen
    }
);
const AuthStack = StackNavigator({ Login: LoginScreen });

export default SwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);
//