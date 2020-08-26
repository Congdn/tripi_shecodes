import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import PaymentScreen from "../screens/PaymentScreen";
import HotelScreen from "../screens/HotelScreen";
import CashbackScreen from "../screens/CashbackScreen";
import ExtentionScreen from "../screens/ExtentionScreen";
import UserScreen from "../screens/UserScreen";
import SearchScreen from "../screens/SearchScreen";
import LocationScreen from "../screens/LocationScreen";
import ListHotelScreen from "../screens/ListHotelScreen";

import { View, Text, Alert, TextInput, TouchableOpacity } from "react-native";
import MainStyle from "../stylesheets/MainStyle";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../commons/Colors";

const HomeStack = createStackNavigator();

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
          Alert.alert("Thông báo", "Opening...");
        }}
      >
        <FontAwesome name="bell" size={26} color="#fc5c65" />
      </TouchableOpacity>
    </View>
  ),
});
const SearchOptions = (props) => ({
  title: "Home",
  headerTitleStyle: {
    fontSize: 16,
    color: Colors.Primary,
  },
});
const LocationOptions = (props) => ({
  title: "",
  headerTitle: () => (
    <View>
      <TextInput
        style={{
          backgroundColor: Colors.Light,
          paddingLeft: 10,
          paddingVertical: 4,
          borderRadius: 10
        }}
        placeholder="Nhập nơi đến"
      ></TextInput>
    </View>
  ),
});
const ListHotelOptions = (props) => ({
  title: "Tìm kiếm",
  headerTintColor: Colors.Primary,
  headerTitleStyle: {
    fontSize:16
  },
})
const CashbackOptions = {};
const ExtentionOptions = {};
const UserOptions = {};
const HotelOptions = {};
const PaymentOptions = {};

export function HomeTab() {
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
      <HomeStack.Screen name="Hotel" component={HotelScreen} />
      <HomeStack.Screen name="Payment" component={PaymentScreen} />
    </HomeStack.Navigator>
  );
}
const CashbackStack = createStackNavigator();
export function CashbackTab() {
  return (
    <CashbackStack.Navigator>
      <CashbackStack.Screen name="Cashback" component={CashbackScreen} />
    </CashbackStack.Navigator>
  );
}
const ExtentionStack = createStackNavigator();
export function ExtentionTab() {
  return (
    <ExtentionStack.Navigator>
      <ExtentionStack.Screen name="Extention" component={ExtentionScreen} />
    </ExtentionStack.Navigator>
  );
}
const UserStack = createStackNavigator();
export function UserTab() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen name="User" component={UserScreen} />
    </UserStack.Navigator>
  );
}
