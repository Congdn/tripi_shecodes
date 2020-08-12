import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createSwitchNavigator } from "@react-navigation/core";
import { LoginScreen, HomeScreen, HotelScreen, PaymentScreen, UserScreen } from '../screens';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import TabNavigation from './tabNavigations';

//Auth loading screen
const AuthLoadingScreen = (props) => {
    //const [userID, setUserID] = React.useState("");
    console.log("test");
    React.useEffect(() => {
        (async () => {
            const userID = await AsyncStorage.getItem("userID");
            console.log(userID);
            if (userID) {
                props.navigation.navigate(Home);
            }
            else {
                props.navigation.navigate(Login);
            }
        })();
    }, [])
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <ActivityIndicator />
        </View>
    )
}


const AppStack = createStackNavigator(
    {
        Home: HomeScreen,
        Hotel: HotelScreen,
        Payment: PaymentScreen,
        User: UserScreen
    }
);
const AuthStack = createStackNavigator({ Login: LoginScreen });

export default createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: TabNavigation,
        Auth: LoginScreen,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);
//