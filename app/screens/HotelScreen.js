import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
  Alert
} from "react-native";
import MapView from "react-native-maps";
import {
  FontAwesome,
  EvilIcons,
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";

import MainStyle from "../stylesheets/MainStyle";
import HotelStyle from "../stylesheets/HotelStyle";
import Colors from "../commons/Colors";

export default function HotelScreen(props) {
  const routeParams = props.route.params;

  const [hotel, setHotel] = React.useState(null);

  React.useEffect(() => {
    fetch("https://tripi-shecodes.herokuapp.com/hotels/search?hotel-id=" + routeParams.hotel_id)
      .then((response) => response.json())
      .then((res) => {
        if (res["status-code"] === 200) {
          setHotel(res.data);
        }
      })
      .catch((error) => Alert.alert("Thông báo", "Lỗi khi gọi server"));
    //console.log(hotel);
  }, []);
  return hotel === null ? (
    <ActivityIndicator size="large" />
  ) : (
    <View>
      <ScrollView style={HotelStyle.Container}>
        <Image
          style={HotelStyle.Avatar}
          source={require("../assets/images/1407953244000-177513283.jpg")}
        />
        <View style={MainStyle.Container}>
  <Text style={MainStyle.H3}>{hotel["basic-info"].name}</Text>
          <View style={HotelStyle.ScopeBox}>
            {hotel.quality.star_number > 0 && <FontAwesome name="star" size={12} color={Colors.Secondary} />}
            {hotel.quality.star_number > 1 && <FontAwesome name="star" size={12} color={Colors.Secondary} />}
            {hotel.quality.star_number > 2 && <FontAwesome name="star" size={12} color={Colors.Secondary} />}
            {hotel.quality.star_number > 3 && <FontAwesome name="star" size={12} color={Colors.Secondary} />}
            {hotel.quality.star_number > 4 && <FontAwesome name="star" size={12} color={Colors.Secondary} />}
            <Text
              style={[MainStyle.WhiteText, { padding: 2, borderRadius: 5 }]}
            >
              {hotel.quality.service_score.toFixed(1)}
            </Text>
          </View>
          <View style={HotelStyle.Location}>
            <EvilIcons name="location" size={16} />
            <Text style={HotelStyle.LocationText}>
              Thanh Xuân trung, Thanh Xuân, Hà Nội
            </Text>
          </View>
          <View style={HotelStyle.Map}></View>
          <View style={HotelStyle.HotelSpecial}>
            <Text style={[MainStyle.H4, { width: "100%" }]}>
              Tiện nghi khách sạn
            </Text>
            <View style={HotelStyle.HotelSpecialItem}>
              <MaterialCommunityIcons name="airport" size={16} />
              <Text style={[HotelStyle.SpecialTitle,{textDecorationLine:hotel.service !== null && hotel.service.tours === 1 ? 'none' : 'line-through'}]}>Đứa khách thăm quan</Text>
            </View>
            <View style={HotelStyle.HotelSpecialItem}>
              <FontAwesome name="cc-diners-club" size={16} />
              <Text style={[HotelStyle.SpecialTitle,{textDecorationLine:hotel.service !== null && hotel.service.night_club === 1 ? 'none' : 'line-through'}]}>Club đêm</Text>
            </View>
            <View style={HotelStyle.HotelSpecialItem}>
              <FontAwesome5 name="spa" size={16} />
              <Text style={[HotelStyle.SpecialTitle,{textDecorationLine:hotel.service !== null && hotel.service.relax_spa === 1 ? 'none' : 'line-through'}]}>Spa</Text>
            </View>
            <View style={HotelStyle.HotelSpecialItem}>
              <MaterialCommunityIcons name="clover" size={16} />
              <Text style={[HotelStyle.SpecialTitle,{textDecorationLine:hotel.service !== null && hotel.service.relax_massage === 1 ? 'none' : 'line-through'}]}>Massage</Text>
            </View>
            <View style={HotelStyle.HotelSpecialItem}>
              <MaterialCommunityIcons name="steam-box" size={16} />
              <Text style={[HotelStyle.SpecialTitle,{textDecorationLine:hotel.service !== null && hotel.service.relax_steam_room === 1 ? 'none' : 'line-through'}]}>Phòng tắm hơi</Text>
            </View>
            <View style={HotelStyle.HotelSpecialItem}>
              <FontAwesome name="gamepad" size={16} />
              <Text style={[HotelStyle.SpecialTitle,{textDecorationLine:hotel.service !== null && hotel.service.relax_outdoor_room === 1 ? 'none' : 'line-through'}]}>Phòng giải trí ngoài trời</Text>
            </View>
            <View style={HotelStyle.HotelSpecialItem}>
              <MaterialCommunityIcons name="pool" size={16} />
              <Text style={[HotelStyle.SpecialTitle,{textDecorationLine:hotel.service !== null && hotel.service.relax_ourdoor_pool === 1 ? 'none' : 'line-through'}]}>Bể bơi ngoài trời</Text>
            </View>
            <View style={HotelStyle.HotelSpecialItem}>
              <MaterialCommunityIcons name="steam-box" size={16} />
              <Text style={[HotelStyle.SpecialTitle,{textDecorationLine:hotel.service !== null && hotel.service.relax_sauna === 1 ? 'none' : 'line-through'}]}>Phòng tắm hơi</Text>
            </View>
            <View style={HotelStyle.HotelSpecialItem}>
              <FontAwesome5 name="swimming-pool" size={16} />
              <Text style={[HotelStyle.SpecialTitle,{textDecorationLine:hotel.service !== null && hotel.service.relax_pool === 1 ? 'none' : 'line-through'}]}>Bể bơi trong nhà</Text>
            </View>
          </View>
          <View style={HotelStyle.HotelDetailBox}>
            <Text style={[MainStyle.H4, { width: "100%" }]}>
              Thông tin hữu ích
            </Text>
            <View style={HotelStyle.HotelDetailItem}>
              <FontAwesome5 style={HotelStyle.DetailIcon} name="door-open" />
              <View style={HotelStyle.DetailTitle}>
                <Text>Giờ nhận phòng</Text>
                <Text style={HotelStyle.DetailValue}>12:00</Text>
              </View>
            </View>
            <View style={HotelStyle.HotelDetailItem}>
              <FontAwesome5 style={HotelStyle.DetailIcon} name="door-closed" />
              <View style={HotelStyle.DetailTitle}>
                <Text>Giờ trả phòng</Text>
                <Text style={HotelStyle.DetailValue}>12:00</Text>
              </View>
            </View>
            <View style={HotelStyle.HotelDetailItem}>
              <FontAwesome5
                style={HotelStyle.DetailIcon}
                name="swimming-pool"
              />
              <View style={HotelStyle.DetailTitle}>
                <Text>Bể bơi</Text>
                <Text style={HotelStyle.DetailValue}>1</Text>
              </View>
            </View>
            <View style={HotelStyle.HotelDetailItem}>
              <MaterialIcons style={HotelStyle.DetailIcon} name="restaurant" />
              <View style={HotelStyle.DetailTitle}>
                <Text>Nhà hàng</Text>
                <Text style={HotelStyle.DetailValue}>1</Text>
              </View>
            </View>
          </View>
          <View style={HotelStyle.DescriptionBox}>
            <Text style={MainStyle.H3}>Giới thiệu khách sạn</Text>
            <Text style={HotelStyle.Description}>
              {hotel["basic-info"].description.trim()}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={HotelStyle.BtnBookBox}>
        <TouchableOpacity 
        onPress={()=>{
          Linking.openURL(hotel["basic-info"].url);
        }}
        style={HotelStyle.BtnBook}>
          <Text style={HotelStyle.BtnBookTitle}>Đặt phòng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
