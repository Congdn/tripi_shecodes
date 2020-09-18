import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {useSelector,useDispatch} from 'react-redux';
import {Search_AddAction} from '../redux/actions/SearchAction';
import store from '../redux/store';

import HomeScreen from "../screens/HomeScreen";
import PaymentScreen from "../screens/PaymentScreen";
import HotelScreen from "../screens/HotelScreen";
import CashbackScreen from "../screens/CashbackScreen";
import ExtentionScreen from "../screens/ExtentionScreen";
import UserScreen from "../screens/UserScreen";
import SearchScreen from "../screens/SearchScreen";
import LocationScreen from "../screens/LocationScreen";
import ListHotelScreen from "../screens/ListHotelScreen";
import SupplierScreen from "../screens/SupplierScreen";

import { View, Text, Alert, TextInput, TouchableOpacity } from "react-native";
import MainStyle from "../stylesheets/MainStyle";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../commons/Colors";

//Home
const HomeStack = createStackNavigator();

export function HomeTab() {
  const keyword = useSelector(state => state.searchReducer.keyword);
  const [curentKeyword,setCurrentKeyword] = React.useState(keyword);

  const HomeOptions = (props) => ({
    title: "SHECODES",
    headerStyle: {
      backgroundColor: "#fff",
    },
    headerTintColor: "#fc5c65",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 26,
    },
    headerRight: () => (
      <View style={{ flexDirection: "row", marginRight: 10 }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Search");
            //console.log(p);
            //Alert.alert("Thông báo", "Searching...")
          }}
        >
          <FontAwesome name="search" size={26} color="#fc5c65" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={() => {
            Alert.alert("Thông báo", "Tính năng đang phát triển");
          }}
        >
          <FontAwesome name="bell" size={26} color="#fc5c65" />
        </TouchableOpacity>
      </View>
    ),
  });
  const SearchOptions = (props) => ({
    title: "Home",
    headerTintColor: Colors.Primary,
    headerTitleStyle: {
      fontSize: 16,
      color: Colors.Primary,
    },
  });
  const LocationOptions = (props) => ({
    title: "",
    headerTintColor: Colors.Primary,
    headerTitle: () => (
      <View>
        <TextInput
          style={{
            backgroundColor: Colors.Light,
            paddingLeft: 10,
            paddingVertical: 4,
            borderRadius: 10
          }}
          /* onEndEditing={value=>{
            if(keyword === value.nativeEvent.text) return;
            const addAction = Search_AddAction(value.nativeEvent.text);
            store.dispatch(addAction);          }} */
          onChangeText={value=>{
            //console.log(value);
            if(keyword === value) return;
            const addAction = Search_AddAction(value);
            store.dispatch(addAction);
          }}
          //value={keyword}
          returnKeyType="search"
          placeholder="Nhập nơi đến"
        ></TextInput>
      </View>
    ),
  });
  const ListHotelOptions = (props) => ({
    title: "Tìm kiếm",
    headerTintColor: Colors.Primary,
    headerTitleStyle: {
      fontSize: 16
    },
  })
  const SupplierOptions = () => ({
    title: "Chọn nhà cung cấp",
    headerTintColor: Colors.Primary,
  });
  const CashbackOptions = {};
  const ExtentionOptions = {};
  const UserOptions = {};
  const HotelOptions = () => ({
    title: "Chi tiết khách sạn",
    headerTintColor: Colors.Primary,
  });
  const PaymentOptions = {};
  
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={HomeOptions}
      />
      <HomeStack.Screen
        name="Search"
        component={SearchScreen}
        options={SearchOptions}
      />
      <HomeStack.Screen
        name="Location"
        component={LocationScreen}
        options={LocationOptions}
      />
      <HomeStack.Screen
        name="ListHotel"
        component={ListHotelScreen}
        options={ListHotelOptions}
      />
      <HomeStack.Screen
        name="Hotel"
        component={HotelScreen}
        options={HotelOptions}
      />
      <HomeStack.Screen name="Payment" component={PaymentScreen} />
      <HomeStack.Screen
        name="Supplier"
        component={SupplierScreen}
        options={SupplierOptions}
      />
    </HomeStack.Navigator>
  );
}
//end home
//cashback
const CashbackStack = createStackNavigator();
export function CashbackTab() {
  return (
    <CashbackStack.Navigator>
      <CashbackStack.Screen name="Cashback" component={CashbackScreen} />
    </CashbackStack.Navigator>
  );
}
//end cashback
//extention
const ExtentionStack = createStackNavigator();
export function ExtentionTab() {
  return (
    <ExtentionStack.Navigator>
      <ExtentionStack.Screen name="Extention" component={ExtentionScreen} />
    </ExtentionStack.Navigator>
  );
}
//end extention
//user
const UserStack = createStackNavigator();
export function UserTab() {
  const UserOptions = ()=>({
    title:"USER",
    headerShown:false,
    headerTintColor:Colors.Primary,
  });
  return (
    <UserStack.Navigator>
      <UserStack.Screen name="User" component={UserScreen} options={UserOptions}/>
    </UserStack.Navigator>
  );
}
//end user
