import React from 'react';
import LoginScreen from './screens/LoginScreen';
import {useSelector} from 'react-redux';
import TabNavigation from './navigation/TabNavigations';

export default function Main(){
    /* const loginstatus = useSelector(state => state.loginstatus);
    return loginstatus > 0 ?
    (
        <TabNavigation></TabNavigation>
    )
    :
    (
        <LoginScreen></LoginScreen>
    ) */
    return <TabNavigation></TabNavigation>;
}