import React from "react";
import { View, Text, Image, FlatList,ActivityIndicator } from "react-native";
import HomeStyle from "../../stylesheets/HomeStyle";
import HotelItem from "./HotelItem";

export default function HotelBox(props) {

  const renderFooter = (status) => {
    return status ? <ActivityIndicator size="large" style={{marginTop:70}} /> : null
  }

  const loadMoreHandle = ()=>{
    let pageindex = props.paging.pageindex + 1;
    props.setPaging({
      pageIndex:pageindex,
      pageSize:5
    })
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
        //keyExtractor={(item) => item.id}
        renderItem={(entry) => (
          <HotelItem
            image=""
            hotelId={entry.item.hotel_id ? entry.item.hotel_id : entry.item.id}
            name={entry.item.name}
            description={entry.item.description}
            nav={props.nav}
            //images={entry.item["hotel-imgs"]}
          ></HotelItem>
        )}
      />
    </View>
  );
}
