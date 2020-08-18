import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/homeScreen';
import PaymentScreen from '../screens/paymentScreen';
import HotelScreen from '../screens/hotelScreen';

import CashbackScreen from '../screens/cashbackScreen';

import ExtentionScreen from '../screens/extentionScreen';

import UserScreen from '../screens/userScreen';


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