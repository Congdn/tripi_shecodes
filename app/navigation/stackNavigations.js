import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../components/home/homeScreen';
import PaymentScreen from '../components/payment/paymentScreen';
import HotelScreen from '../components/hotel/hotelScreen';

import CashbackScreen from '../components/cashback/cashbackScreen';

import ExtentionScreen from '../components/extentions/extentionScreen';

import UserScreen from '../components/user/userScreen';

//import { LoginScreen, HomeScreen, HotelScreen, PaymentScreen, UserScreen } from '../screens';

const HomeStack = createStackNavigator();
export function HomeTab() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Hotel" component={HotelScreen} />
            <HomeStack.Screen name="Payment" component={PaymentScreen} />
        </HomeStack.Navigator>
    )
}
const CashbackStack = createStackNavigator();
export function CashbackTab() {
    return (
        <CashbackStack.Navigator>
            <CashbackStack.Screen name="Cashback" component={CashbackScreen} />
        </CashbackStack.Navigator>
    )
}
const ExtentionStack = createStackNavigator();
export function ExtentionTab() {
    return (
        <ExtentionStack.Navigator>
            <ExtentionStack.Screen name="Extention" component={ExtentionScreen} />
        </ExtentionStack.Navigator>
    )
}
const UserStack = createStackNavigator();
export function UserTab() {
    return (
        <UserStack.Navigator>
            <UserStack.Screen name="User" component={UserScreen} />
        </UserStack.Navigator>
    )
}