import React from "react";
import { View, Text, Image, Picker, TouchableOpacity } from "react-native";
import { FontAwesome, EvilIcons, MaterialIcons } from "@expo/vector-icons";

import Colors from "../../commons/Colors";
import MainStyle from "../../stylesheets/MainStyle";
import ListHotelStyle from "../../stylesheets/ListHotelStyle";

export default function HotelItem(props) {
  const [supplier, setSupplier] = React.useState();
  return (
    <TouchableOpacity
      onPress={() => {
        props.nav.navigate("Hotel", {
          hotel_id: '70ad23b8-40c4-4de6-8430-4960417e5186'
        })
      }}
      style={ListHotelStyle.HotelItemBox}>
      <Image style={ListHotelStyle.ItemImage} source={require("../../assets/images/eCEL3q.jpg")} />
      <View style={ListHotelStyle.ItemContent}>
        <Text style={ListHotelStyle.ItemTitle}>Khách sạn ngàn sao</Text>
        <View style={ListHotelStyle.ItemLocationBox}>
          <EvilIcons name="location" size={10} />
          <Text style={ListHotelStyle.ItemLocationText}>Thanh Xuân trung, Thanh Xuân, Hà Nội</Text>
        </View>
        <View style={ListHotelStyle.ItemScopeBox}>
          <FontAwesome name="star" size={8} color={Colors.Secondary} />
          <FontAwesome name="star" size={8} color={Colors.Secondary} />
          <FontAwesome name="star" size={8} color={Colors.Secondary} />
          <FontAwesome name="star" size={8} color={Colors.Secondary} />
          <FontAwesome name="star" size={8} color={Colors.Secondary} />
          <Text style={ListHotelStyle.ItemReviewPoint}>(3k)</Text>
          <Text style={[MainStyle.WhiteText, ListHotelStyle.ItemAverage]}>9.5</Text>
        </View>
        {props.isAutocomplete ?? <View><View style={ListHotelStyle.ItemSupplier}>
          <Text style={{ color: Colors.Medium }}>Nhà cung cấp</Text>
          {/* <Picker
            selectedValue={supplier}
            onValueChange={(value, index) => {
              setSupplier(value);
            }}
          >
            <Picker.Item label="Booking.com" value="Booking" />
            <Picker.Item label="Agoda.com" value="Agoda" />
          </Picker> */}
          <TouchableOpacity
            onPress={() => {
              props.nav.navigate("Supplier");
            }}
            style={ListHotelStyle.ItemSupplierDropBox}
          >
            <Text style={ListHotelStyle.ItemSupplierTitle}>
              Booking.com
            </Text>
            <MaterialIcons name="arrow-drop-down" size={20} />
          </TouchableOpacity>
        </View>
        <Text style={ListHotelStyle.ItemPrice}>400.000 VNĐ</Text></View>}
        <Text></Text>
      </View>
    </TouchableOpacity>
  );
}
