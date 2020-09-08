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
import RangeSlider from 'react-native-range-slider-expo';

import MainStyle from "../stylesheets/MainStyle";
import ListHotelStyle from "../stylesheets/ListHotelStyle";

import HotelItem from "../components/search/HotelItemComponent";

export default function ListHotelScreen(props) {
  const [listType, setListType] = React.useState("List");
  const [hotelStar, setHotelStar] = React.useState(0);

  const refSortRBSheet = React.useRef();
  const refFilterRBSheet = React.useRef();

  return (
    <View style={MainStyle.Container}>
      <View style={ListHotelStyle.Header}>
        <View style={ListHotelStyle.HeaderLeftBox}>
          <TouchableOpacity
            onPress={() => {
              refSortRBSheet.current.open();
            }}
            style={ListHotelStyle.HeaderLeftItem}
          >
            <FontAwesome name="sort-amount-asc" size={16} />
            <Text style={{ marginLeft: 5 }}>Sắp xếp</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              refFilterRBSheet.current.open();
            }}
            style={ListHotelStyle.HeaderLeftItem}>
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

      <RBSheet ref={refSortRBSheet} height={180}>
        <View style={ListHotelStyle.Popup}>
          <Text style={ListHotelStyle.PopupTitle}>Sắp xếp theo</Text>
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
      <RBSheet ref={refFilterRBSheet} height={400}>
        <View style={ListHotelStyle.Popup}>
          <Text style={ListHotelStyle.PopupTitle}>Bộ lọc</Text>
          <View style={ListHotelStyle.FilterBox}>
            <Text style={ListHotelStyle.FilterTitle}>Khoảng giá</Text>
            <RangeSlider
              fromValueOnChange={value => console.log(value)}
              toValueOnChange={value => console.log(value)}
              min={20}
              max={40}
              step={5}
              fromKnobColor={Colors.Primary}
              toKnobColor={Colors.Danger}
              styleSize='small'
              showRangeLabels={false}
            />
          </View>
          <View style={ListHotelStyle.FilterBox}>
            <Text style={ListHotelStyle.FilterTitle}>Số sao</Text>
            <View style={ListHotelStyle.FilterStarBox}>
              <TouchableOpacity
                onPress={() => setHotelStar(1)}
                style={[{
                  backgroundColor: hotelStar === 1 ? Colors.Medium : Colors.Gray
                },ListHotelStyle.FilterStar ]}
              >
                <FontAwesome name="star" size={20} color={Colors.Secondary} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setHotelStar(2)}
                style={[{
                  backgroundColor: hotelStar === 2 ? Colors.Medium : Colors.Gray
                },ListHotelStyle.FilterStar]}
              >
                <FontAwesome name="star" size={20} color={Colors.Secondary} />
                <FontAwesome name="star" size={20} color={Colors.Secondary} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setHotelStar(3)}
                style={[{
                  backgroundColor: hotelStar === 3 ? Colors.Medium : Colors.Gray
                },ListHotelStyle.FilterStar]}
              >
                <FontAwesome name="star" size={20} color={Colors.Secondary} />
                <FontAwesome name="star" size={20} color={Colors.Secondary} />
                <FontAwesome name="star" size={20} color={Colors.Secondary} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setHotelStar(4)}
                style={[{
                  backgroundColor: hotelStar === 4 ? Colors.Medium : Colors.Gray
                },ListHotelStyle.FilterStar]}
              >
                <FontAwesome name="star" size={20} color={Colors.Secondary} />
                <FontAwesome name="star" size={20} color={Colors.Secondary} />
                <FontAwesome name="star" size={20} color={Colors.Secondary} />
                <FontAwesome name="star" size={20} color={Colors.Secondary} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setHotelStar(5)}
                style={[{
                  backgroundColor: hotelStar === 5 ? Colors.Medium : Colors.Gray
                },ListHotelStyle.FilterStar]}
              >
                <FontAwesome name="star" size={20} color={Colors.Secondary} />
                <FontAwesome name="star" size={20} color={Colors.Secondary} />
                <FontAwesome name="star" size={20} color={Colors.Secondary} />
                <FontAwesome name="star" size={20} color={Colors.Secondary} />
                <FontAwesome name="star" size={20} color={Colors.Secondary} />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <TouchableOpacity
            style={ListHotelStyle.FilterButton}
             onPress={()=>{
              refFilterRBSheet.current.close();
            }}>
              <Text>Áp dụng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
    </View>
  );
}
