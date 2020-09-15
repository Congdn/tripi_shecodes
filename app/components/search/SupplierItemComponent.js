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
          hotel_id: props.params.hotel_id
        })
      }}
    style={ListHotelStyle.SupplierItemBox}>
      <Text style={ListHotelStyle.ItemTitle}>{props.params.hotelName}</Text>
      <View style={[ListHotelStyle.ItemContent,{flexDirection:"row"}]}>
        <Image
          style={ListHotelStyle.SupplierItemImage}
          source={require("../../assets/images/db99b9895bfb9d842adff1d920f34ede.jpg")}
        />
        <View style={ListHotelStyle.SupplierItemDetail}>
    <Text style={MainStyle.H4}>{props.params.supplierName}</Text>
          <Text style={[MainStyle.H2,{color:Colors.Secondary}]}>{props.params.price} VNĐ</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
