import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import ListHotelStyle from "../../stylesheets/ListHotelStyle";
import MainStyle from "../../stylesheets/MainStyle";
import Colors from "../../commons/Colors";

export default function Supplier(props) {
  return (
    <TouchableOpacity 
    onPress={()=>{
        props.nav.navigate("Hotel", {
          hotel_id: '70ad23b8-40c4-4de6-8430-4960417e5186'
        })
      }}
    style={ListHotelStyle.SupplierItemBox}>
      <Text style={ListHotelStyle.ItemTitle}>Khách sạn ngàn SA0*******</Text>
      <View style={[ListHotelStyle.ItemContent,{flexDirection:"row"}]}>
        <Image
          style={ListHotelStyle.SupplierItemImage}
          source={require("../../assets/images/db99b9895bfb9d842adff1d920f34ede.jpg")}
        />
        <View style={ListHotelStyle.SupplierItemDetail}>
          <Text style={MainStyle.H4}>Booking.com</Text>
          <Text style={[MainStyle.H2,{color:Colors.Secondary}]}>400.000 VNĐ</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
