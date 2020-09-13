import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons,FontAwesome}  from '@expo/vector-icons';
import { HomeTab,CashbackTab,ExtentionTab,UserTab } from './StackNavigations';
import React from 'react';
import Colors from '../commons/Colors';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
    return(
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Home') {
                    /* iconName = focused
                      ? 'home'
                      : 'md-checkmark-circle'; */
                      iconName = 'home';
                  } else if (route.name === 'Cashback') {
                    /* iconName = focused ? 'ios-list-box' : 'ios-list'; */
                    iconName = 'credit-card-alt';
                  }
                  else if(route.name === 'Extention'){
                    iconName = 'plus-square';
                  }
                  else{
                    iconName = 'user-circle';
                  }

                  return <FontAwesome name={iconName} size={size} color={color} />;
                }
              })}
              tabBarOptions={{
                activeTintColor: '#fc5c65',
                inactiveTintColor: '#0c0c0c',
              }}
            >
                <Tab.Screen name="Home" component={HomeTab} />
                <Tab.Screen name="Cashback" component={CashbackTab} />
                {/* <Tab.Screen name="Extention" component={ExtentionTab} /> */}
                <Tab.Screen name="User" component={UserTab}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}