import React from "react";
import { View, Text, Image, FlatList,ActivityIndicator } from "react-native";
import HomeStyle from "../../stylesheets/HomeStyle";
import HotelItem from "./HotelItem";

export default function HotelBox(props) {

  const renderFooter = (status) => {
    if(props.homeScreen) return null;
    return status ? <ActivityIndicator size="large" style={{marginTop:70}} /> : null
  }

  const loadMoreHandle = ()=>{
    //let pageindex = props.paging.pageindex + 1;
    if(props.homeScreen) return null;
    props.setPaging = {
      pageIndex:props.setPaging.pageindex++,
      pageSize:8
    }
    props.renderdata();
  }
  return (
    <View style={HomeStyle.HotelBox}>
      <Text style={HomeStyle.BoxTitle}>{props.title}</Text>
      <FlatList
        horizontal={true}
        onEndReachedThreshold={0.4}
        onEndReached={() => loadMoreHandle()}
        ListFooterComponent={renderFooter(true)}
        showsHorizontalScrollIndicator={false}
        data={props.DATA}
        style={HomeStyle.HotelBoxListItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(entry) => (
          <HotelItem
            image=""
            hotelId={entry.item.hotel_id ? entry.item.hotel_id : entry.item.id}
            name={entry.item.name}
            description={entry.item.description}
            nav={props.nav}
            url={entry.item.url}
            //images={entry.item["hotel-imgs"]}
          ></HotelItem>
        )}
      />
    </View>
  );
}
