import React from "react";
import { View, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import Colors from "../commons/Colors";

import MainStyle from "../stylesheets/MainStyle";
import ListHotelStyle from "../stylesheets/ListHotelStyle";

export default function ListHotelScreen(props) {
  const [listType, setListType] = React.useState("List");

  return (
    <View style={MainStyle.Container}>
      <View style={ListHotelStyle.Header}>
        <View style={ListHotelStyle.HeaderLeftBox}>
          <TouchableOpacity style={ListHotelStyle.HeaderLeftItem}>
            <FontAwesome name="sort-amount-asc" size={16} />
            <Text style={{marginLeft:5}}>Sắp xếp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ListHotelStyle.HeaderLeftItem}>
            <Feather name="filter" size={16} />
            <Text style={{marginLeft:5}}>Bộ lọc</Text>
          </TouchableOpacity>
        </View>
        <View style={ListHotelStyle.HeaderRightBox}>
          <TouchableOpacity
            style={{
              backgroundColor:
                listType === "List" ? Colors.Medium : Colors.White,
            }}
            onPress={() => {
              setListType("List");
            }}
          >
            <FontAwesome name="list" size={16} />
          </TouchableOpacity>
          <TouchableHighlight>
            <FontAwesome />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}
