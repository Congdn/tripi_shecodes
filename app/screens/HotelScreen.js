import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
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
    console.log(routeParams);
    fetch("https://tripi-shecodes.herokuapp.com/hotels/" + routeParams.hotel_id)
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
  <Text style={MainStyle.H3}>{hotel.name}</Text>
          <View style={HotelStyle.ScopeBox}>
            <FontAwesome name="star" size={8} color={Colors.Secondary} />
            <FontAwesome name="star" size={8} color={Colors.Secondary} />
            <FontAwesome name="star" size={8} color={Colors.Secondary} />
            <FontAwesome name="star" size={8} color={Colors.Secondary} />
            <FontAwesome name="star" size={8} color={Colors.Secondary} />
            <Text
              style={[MainStyle.WhiteText, { padding: 2, borderRadius: 5 }]}
            >
              9.5
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
              <Text style={HotelStyle.SpecialTitle}>Đưa/đón tại sân bay</Text>
            </View>
            <View style={HotelStyle.HotelSpecialItem}>
              <FontAwesome name="motorcycle" size={16} />
              <Text style={HotelStyle.SpecialTitle}>Cho thuê xe máy</Text>
            </View>
            <View style={HotelStyle.HotelSpecialItem}>
              <FontAwesome name="clock-o" size={16} />
              <Text style={HotelStyle.SpecialTitle}>Lễ tân 24h</Text>
            </View>
            <View style={HotelStyle.HotelSpecialItem}>
              <FontAwesome name="bell-o" size={16} />
              <Text style={HotelStyle.SpecialTitle}>Báo thức</Text>
            </View>
            <View style={HotelStyle.HotelSpecialItem}>
              <MaterialCommunityIcons name="airport" size={16} />
              <Text style={HotelStyle.SpecialTitle}>Đưa/đón tại sân bay</Text>
            </View>
            <View style={HotelStyle.HotelSpecialItem}>
              <FontAwesome5 name="people-carry" size={16} />
              <Text style={HotelStyle.SpecialTitle}>Giữ hành lý</Text>
            </View>
            <View style={HotelStyle.HotelSpecialItem}>
              <MaterialCommunityIcons name="bread-slice-outline" size={16} />
              <Text style={HotelStyle.SpecialTitle}>Bữa sáng tại phòng</Text>
            </View>
            <View style={HotelStyle.HotelSpecialItem}>
              <MaterialCommunityIcons name="home-currency-usd" size={16} />
              <Text style={HotelStyle.SpecialTitle}>Thu đổi ngoại tệ</Text>
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
              {hotel.description.trim()}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={HotelStyle.BtnBookBox}>
        <TouchableOpacity 
        onPress={()=>{
          Linking.openURL(hotel.url);
        }}
        style={HotelStyle.BtnBook}>
          <Text style={HotelStyle.BtnBookTitle}>Đặt phòng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
