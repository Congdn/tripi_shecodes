import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  ScrollView,
  ListView,
} from "react-native";
import { FontAwesome, Feather, FontAwesome5 } from "@expo/vector-icons";
import Colors from "../commons/Colors";
import RBSheet from "react-native-raw-bottom-sheet";

import MainStyle from "../stylesheets/MainStyle";
import ListHotelStyle from "../stylesheets/ListHotelStyle";

import HotelItem from "../components/search/HotelItemComponent";

export default function ListHotelScreen(props) {
  const [listType, setListType] = React.useState("List");
  const refRBSheet = React.useRef();

  return (
    <View style={MainStyle.Container}>
      <View style={ListHotelStyle.Header}>
        <View style={ListHotelStyle.HeaderLeftBox}>
          <TouchableOpacity
            onPress={() => {
              refRBSheet.current.open();
            }}
            style={ListHotelStyle.HeaderLeftItem}
          >
            <FontAwesome name="sort-amount-asc" size={16} />
            <Text style={{ marginLeft: 5 }}>Sắp xếp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ListHotelStyle.HeaderLeftItem}>
            <Feather name="filter" size={16} />
            <Text style={{ marginLeft: 5 }}>Bộ lọc</Text>
          </TouchableOpacity>
        </View>
        <View style={ListHotelStyle.HeaderRightBox}>
          <TouchableOpacity
            style={[
              {
                backgroundColor:
                  listType === "List" ? Colors.Gray : Colors.White,
              },
              ListHotelStyle.ListType,
            ]}
            onPress={() => {
              setListType("List");
            }}
          >
            <FontAwesome name="list" size={16} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              {
                backgroundColor:
                  listType === "Map" ? Colors.Gray : Colors.White,
              },
              ListHotelStyle.ListType,
            ]}
            onPress={() => {
              setListType("Map");
            }}
          >
            <FontAwesome5 name="map-marked-alt" size={16} />
          </TouchableOpacity>
          <TouchableHighlight>
            <FontAwesome />
          </TouchableHighlight>
        </View>
      </View>
      <ScrollView
        style={{ marginTop: 10, marginBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <HotelItem nav={props.navigation}></HotelItem>
        <HotelItem nav={props.navigation}></HotelItem>
        <HotelItem nav={props.navigation}></HotelItem>
        <HotelItem nav={props.navigation}></HotelItem>
        <HotelItem nav={props.navigation}></HotelItem>
        <HotelItem nav={props.navigation}></HotelItem>
        <HotelItem nav={props.navigation}></HotelItem>
        <HotelItem nav={props.navigation}></HotelItem>
      </ScrollView>

      <RBSheet ref={refRBSheet} height={180} openDuration={250}>
        <View style={ListHotelStyle.SortPopup}>
          <Text style={ListHotelStyle.SortPopupTitle}>Sắp xếp theo</Text>
          <View style={ListHotelStyle.SortPopupContent}>
            <TouchableOpacity style={ListHotelStyle.SortPopupButton}>
              <Text style={ListHotelStyle.SortPopupButtonTitle}>Đề xuất</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ListHotelStyle.SortPopupButton}>
              <Text style={ListHotelStyle.SortPopupButtonTitle}>
                Giá tăng dần
              </Text>
            </TouchableOpacity>
          </View>
          <View style={ListHotelStyle.SortPopupContent}>
            <TouchableOpacity style={ListHotelStyle.SortPopupButton}>
              <Text style={ListHotelStyle.SortPopupButtonTitle}>
                Giá giảm dần
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
    </View>
  );
}
