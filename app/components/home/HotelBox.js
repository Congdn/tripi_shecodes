import React from "react";
import { View, Text, Image, FlatList, Alert } from "react-native";
import MainStyle from "../../stylesheets/MainStyle";
import HomeStyle from "../../stylesheets/HomeStyle";
import HotelItem from "./HotelItem";
import * as axios from "axios";

export default function HotelBox(props) {
  return (
    <View style={HomeStyle.HotelBox}>
      <Text style={HomeStyle.BoxTitle}>{props.title}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={props.DATA}
        style={HomeStyle.HotelBoxListItems}
        //keyExtractor={(item) => item.id}
        renderItem={(entry) => (
          <HotelItem image="" 
          hotelId={entry.item.hotel_id} 
          name={entry.item.name} 
          description={entry.item.description}  
          nav={props.nav}
          images={entry.item["hotel-imgs"]}
          ></HotelItem>
        )}
      />
    </View>
  );
}
