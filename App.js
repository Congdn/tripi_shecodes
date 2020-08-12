import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './components/login/loginScreen';
import HomeScreen from './components/home/homeScreen';
import HotelScreen from './components/hotel/hotelScreen';
import PaymentScreen from './components/payment/paymentScreen';
import UserScreen from './components/user/userScreen';
import Icon from 'react-native-vector-icons/Ionicons';
//import { LoginScreen, HomeScreen, HotelScreen, PaymentScreen, UserScreen } from './screens';
//import createSwitchNavigator from './navigation/authNavigations';

const HomeStack = createStackNavigator();
function HomeTab(){
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Hotel" component={HotelScreen} />
      <HomeStack.Screen name="Payment" component={PaymentScreen} />
    </HomeStack.Navigator>
  )
}

const UserStack = createStackNavigator();
const UserTab = () => {
  return (
    <UserStack.Navigator>
      <UserStack.Screen name="User" component={UserScreen} />
    </UserStack.Navigator>
  )
}

const MainTab = createBottomTabNavigator();

export default function App() {
  //const [userID, setUserID] = React.useState("");
  React.useEffect(()=>{
    console.log("test");
  },[])

  return (
    <NavigationContainer>
      <MainTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = focused
              ? 'md-home'
              : 'md-home';
          } else {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      >
        <MainTab.Screen name="HomeTab" component={HomeTab} />
        <MainTab.Screen name="UserTab" component={UserTab} />
      </MainTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
