import React from "react";
import { View, Text, Image, Picker, TouchableOpacity } from "react-native";
import { FontAwesome, EvilIcons, MaterialIcons } from "@expo/vector-icons";

import Colors from "../../commons/Colors";
import MainStyle from "../../stylesheets/MainStyle";
import ListHotelStyle from "../../stylesheets/ListHotelStyle";
import * as Helper from "../../commons/Helper";
import * as Config from "../../config/AppConfig";

export default function HotelItem(props) {
  //const [supplier, setSupplier] = React.useState();
  const [hotelImage, setHotelImage] = React.useState(null);

  const price = Helper.numberTocurrency(Helper.getRandomInt(100000, 5000000));
  let star =
    typeof (props.hotel.star_number) === "undefined"
      ? 0
      : Number(props.hotel.star_number);
  if (star == 0) {
    star = typeof (props.hotel.star) === "undefined"
      ? 0 : Number(props.hotel.star)
  }
  const num_review = typeof (props.hotel.num_reviews) === "undefined"
    ? 0
    : Number(props.hotel.num_reviews);
  React.useEffect(() => {
    //let res = "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg";
    if (props.hotel.url) {
      (async () => {
        let header = new Headers();
        header.append("Content-Type", "application/x-www-form-urlencoded");

        await fetch(Config.IMAGE_DOMAIN + "/api/system/get_hotel_image", {
          method: 'POST',
          body: "api-key=congdn&hotelurl=" + props.hotel.url,
          headers: header,
          redirect: 'follow'
        })
          .then(response => response.json())
          .then(result => {
            //console.log(result);
            if (result.status && result.data) {
              setHotelImage(result.data[0]);
            }
            else{
              //console.log("test");
              setHotelImage('https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg')
            }
          })
          .catch(error => {
            setHotelImage("https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg");
            console.log('error', error);
          });
      })();
    }
    else {
      setHotelImage("https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg");
    }
  }, [])


  return (
    <TouchableOpacity
      onPress={() => {
        if (typeof (props.setReload) !== "undefined" && typeof (props.reload) !== "undefined") {
          props.setReload(!props.reload);
        }
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
        source={{ uri: hotelImage }}
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
          <Text style={ListHotelStyle.ItemReviewPoint}>({num_review})</Text>
          <Text style={[MainStyle.WhiteText, ListHotelStyle.ItemAverage]}>
            9.5
          </Text>
        </View>
        {props.isAutocomplete ?? (
          <View>
            <View style={ListHotelStyle.ItemSupplier}>
              <Text style={{ color: Colors.Medium }}>Nhà cung cấp</Text>
              <TouchableOpacity
                onPress={() => {
                  props.nav.navigate("Supplier", {
                    hotel_id: props.hotel.hotel_id ? props.hotel.hotel_id : props.hotel.id,
                    supplierName: props.hotel.domain_name,
                    hotelName: props.hotel.name,
                    price: price,
                    randomSuplier: Helper.getRandomInt(1, 5)
                  });
                }}
                style={ListHotelStyle.ItemSupplierDropBox}
              >
                <Text style={ListHotelStyle.ItemSupplierTitle}>{props.hotel.domain_name}</Text>
                <MaterialIcons name="arrow-drop-down" size={20} />
              </TouchableOpacity>
            </View>
            <Text style={ListHotelStyle.ItemPrice}>{price} VNĐ</Text>
          </View>
        )}
        <Text></Text>
      </View>
    </TouchableOpacity>
  );
}
