import React from 'react';
import LoginScreen from './screens/LoginScreen';
import {useSelector} from 'react-redux';
import TabNavigation from './navigation/TabNavigations';
import * as Permissions from 'expo-permissions';

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
    React.useEffect(()=>{
        (async () => {
            let locStatus = false;
            while (!locStatus) {
              const {status,permissions } = await Permissions.askAsync(Permissions.LOCATION);
              //console.log(status === "granted");
              locStatus = status === "granted";
            }
          })();
    },[])
    return <TabNavigation></TabNavigation>;
}