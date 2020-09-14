import React from "react";
import { View, Text, Image, Picker, TouchableOpacity } from "react-native";
import { FontAwesome, EvilIcons, MaterialIcons } from "@expo/vector-icons";

import Colors from "../../commons/Colors";
import MainStyle from "../../stylesheets/MainStyle";
import ListHotelStyle from "../../stylesheets/ListHotelStyle";

export default function HotelItem(props) {
  const [supplier, setSupplier] = React.useState();

  const star =
    typeof props.hotel.star_number === "undefined"
      ? 0
      : Number(props.hotel.star_number);
  console.log(star);
  return (
    <TouchableOpacity
      onPress={() => {
        props.nav.navigate("Hotel", {
          hotel_id: props.hotel.hotel_id
            ? props.hotel.hotel_id
            : props.hotel.id,
        });
      }}
      style={ListHotelStyle.HotelItemBox}
    >
      <Image
        style={ListHotelStyle.ItemImage}
        source={require("../../assets/images/eCEL3q.jpg")}
      />
      <View style={ListHotelStyle.ItemContent}>
        <Text style={ListHotelStyle.ItemTitle}>{props.hotel.name}</Text>
        <View style={ListHotelStyle.ItemLocationBox}>
          <EvilIcons name="location" size={10} />
          <Text style={ListHotelStyle.ItemLocationText}>
            {props.hotel.address
              ? props.hotel.address
              : `${props.defaultAddress.region}, ${props.defaultAddress.country}`}
          </Text>
        </View>
        <View style={ListHotelStyle.ItemScopeBox}>
          {star > 0 ? (
            <FontAwesome name="star" size={12} color={Colors.Secondary} />
          ) : null}
          {star > 1 ? (
            <FontAwesome name="star" size={12} color={Colors.Secondary} />
          ) : null}
          {star > 2 ? (
            <FontAwesome name="star" size={12} color={Colors.Secondary} />
          ) : null}
          {star > 3 ? (
            <FontAwesome name="star" size={12} color={Colors.Secondary} />
          ) : null}
          {star > 4 ? (
            <FontAwesome name="star" size={12} color={Colors.Secondary} />
          ) : null}
          <Text style={ListHotelStyle.ItemReviewPoint}>(3k)</Text>
          <Text style={[MainStyle.WhiteText, ListHotelStyle.ItemAverage]}>
            9.5
          </Text>
        </View>
        {props.isAutocomplete ?? (
          <View>
            <View style={ListHotelStyle.ItemSupplier}>
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
                <Text style={ListHotelStyle.ItemSupplierTitle}>Booking</Text>
                <MaterialIcons name="arrow-drop-down" size={20} />
              </TouchableOpacity>
            </View>
            <Text style={ListHotelStyle.ItemPrice}>400.000 VNĐ</Text>
          </View>
        )}
        <Text></Text>
      </View>
    </TouchableOpacity>
  );
}
