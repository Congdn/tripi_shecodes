import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
  Alert, AsyncStorage
} from "react-native";
import MapView, { Marker } from "react-native-maps";
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
import * as Config from "../config/AppConfig";
import * as Helper from "../commons/Helper";
import HotelItem from "../components/search/HotelItemComponent";
import HotelCarousel from "../components/hotel/HotelCarousel";
import HTMLView from 'react-native-htmlview';

export default function HotelScreen(props) {
  const routeParams = props.route.params;

  const [hotel, setHotel] = React.useState(null);
  const [reload, setReload] = React.useState(false);

  React.useEffect(() => {
    setHotel(null);
    const currentDate = new Date();
    const tomorrow = currentDate.setDate(currentDate.getDate() + 1);
    console.log(routeParams.hotel_id);
    (async () => {
      await fetch(
        `${Config.API_DOMAIN}/hotels/search?hotel-id=${routeParams.hotel_id
        }&num-adults=1&num-children=0&checkin-date=${Helper.formatDate(
          currentDate
        )}&checkout-date=${Helper.formatDate(tomorrow)}`, null, 5000
      )
        .then((response) => response.json())
        .then((res) => {
          if (res["status-code"] === 200) {
            setHotel(res.data);
            AsyncStorage.setItem("hotels_recomend", res.data["related-hotels"]["paginated-hotels"]);
          }
          else if (res["status-code"] === 400) {
            Alert.alert("Thông báo", "Không tìm thấy thông tin khách sạn");
          }
        })
        .catch((error) => { console.log(error); Alert.alert("Thông báo", "Lỗi khi gọi server"); });
    })();
  }, [reload]);
  return hotel === null ? (
    <ActivityIndicator size="large" />
  ) : (
      <View>
        <ScrollView style={HotelStyle.Container}>
          <HotelCarousel url={hotel["basic-info"].url}></HotelCarousel>
          {/* <Image
          style={HotelStyle.Avatar}
          source={require("../assets/images/1407953244000-177513283.jpg")}
        /> */}
          <View style={MainStyle.Container}>
            <Text style={MainStyle.H3}>{hotel["basic-info"].name}</Text>
            {hotel["additional-info"] !== null && (
              <View>
                <View style={HotelStyle.ScopeBox}>
                  {
                    hotel["additional-info"].quality.star_number > 0 && (
                      <FontAwesome
                        style={{ marginLeft: 10 }}
                        name="star"
                        size={12}
                        color={Colors.Secondary}
                      />
                    )}
                  {
                    hotel["additional-info"].quality.star_number > 1 && (
                      <FontAwesome
                        style={{ marginLeft: 10 }}
                        name="star"
                        size={12}
                        color={Colors.Secondary}
                      />
                    )}
                  {
                    hotel["additional-info"].quality.star_number > 2 && (
                      <FontAwesome
                        style={{ marginLeft: 10 }}
                        name="star"
                        size={12}
                        color={Colors.Secondary}
                      />
                    )}
                  {
                    hotel["additional-info"].quality.star_number > 3 && (
                      <FontAwesome
                        style={{ marginLeft: 10 }}
                        name="star"
                        size={12}
                        color={Colors.Secondary}
                      />
                    )}
                  {
                    hotel["additional-info"].quality.star_number > 4 && (
                      <FontAwesome
                        style={{ marginLeft: 10 }}
                        name="star"
                        size={12}
                        color={Colors.Secondary}
                      />
                    )}
                  <Text
                    style={[
                      MainStyle.WhiteText,
                      { padding: 2, borderRadius: 5, marginLeft: 30 },
                    ]}
                  >
                    {hotel["additional-info"].quality &&
                      hotel["additional-info"].quality.service_score.toFixed(1)
                    }
                  </Text>
                </View>
                <View style={HotelStyle.Location}>
                  <EvilIcons name="location" size={16} />
                  <Text style={HotelStyle.LocationText}>
                    {hotel["additional-info"] !== null
                      ? hotel["additional-info"].location.address
                      : ""}
                  </Text>
                </View>
                <View style={HotelStyle.Map}>
                  <MapView
                    style={{ width: "100%", height: 200 }}
                    initialRegion={{
                      latitude: hotel["additional-info"].location.latitude,
                      longitude: hotel["additional-info"].location.longitude,
                      latitudeDelta: 0.1,
                      longitudeDelta: 0.1,
                    }}
                  >
                    <Marker
                      key={hotel["basic-info"].id}
                      coordinate={{
                        latitude: hotel["additional-info"].location.latitude,
                        longitude: hotel["additional-info"].location.longitude,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1,
                      }}
                      title={hotel["basic-info"].name}
                      description={hotel["basic-info"].description}
                    ></Marker>
                  </MapView>
                </View>
              </View>
            )}
            <View style={HotelStyle.HotelSpecial}>
              <Text style={[MainStyle.H4, { width: "100%" }]}>
                Tiện nghi khách sạn
            </Text>
              <View style={HotelStyle.HotelSpecialItem}>
                <MaterialCommunityIcons name="airport" size={16} />
                <Text
                  style={[
                    HotelStyle.SpecialTitle,
                    {
                      textDecorationLine:
                        hotel["additional-info"] &&
                          hotel["additional-info"].service &&
                          hotel["additional-info"].service.tours === 1
                          ? "none"
                          : "line-through",
                    },
                  ]}
                >
                  Đứa khách thăm quan
              </Text>
              </View>
              <View style={HotelStyle.HotelSpecialItem}>
                <FontAwesome name="cc-diners-club" size={16} />
                <Text
                  style={[
                    HotelStyle.SpecialTitle,
                    {
                      textDecorationLine:
                        hotel["additional-info"] !== null &&
                          hotel["additional-info"].service &&
                          hotel["additional-info"].service.night_club === 1
                          ? "none"
                          : "line-through",
                    },
                  ]}
                >
                  Club đêm
              </Text>
              </View>
              <View style={HotelStyle.HotelSpecialItem}>
                <FontAwesome5 name="spa" size={16} />
                <Text
                  style={[
                    HotelStyle.SpecialTitle,
                    {
                      textDecorationLine:
                        hotel["additional-info"] !== null &&
                          hotel["additional-info"].service &&
                          hotel["additional-info"].service.relax_spa === 1
                          ? "none"
                          : "line-through",
                    },
                  ]}
                >
                  Spa
              </Text>
              </View>
              <View style={HotelStyle.HotelSpecialItem}>
                <MaterialCommunityIcons name="clover" size={16} />
                <Text
                  style={[
                    HotelStyle.SpecialTitle,
                    {
                      textDecorationLine:
                        hotel["additional-info"] !== null &&
                          hotel["additional-info"].service &&
                          hotel["additional-info"].service.relax_massage === 1
                          ? "none"
                          : "line-through",
                    },
                  ]}
                >
                  Massage
              </Text>
              </View>
              <View style={HotelStyle.HotelSpecialItem}>
                <MaterialCommunityIcons name="steam-box" size={16} />
                <Text
                  style={[
                    HotelStyle.SpecialTitle,
                    {
                      textDecorationLine:
                        hotel["additional-info"] !== null &&
                          hotel["additional-info"].service &&
                          hotel["additional-info"].service.relax_steam_room === 1
                          ? "none"
                          : "line-through",
                    },
                  ]}
                >
                  Phòng tắm hơi
              </Text>
              </View>
              <View style={HotelStyle.HotelSpecialItem}>
                <FontAwesome name="gamepad" size={16} />
                <Text
                  style={[
                    HotelStyle.SpecialTitle,
                    {
                      textDecorationLine:
                        hotel["additional-info"] !== null &&
                          hotel["additional-info"].service &&
                          hotel["additional-info"].service.relax_outdoor_room === 1
                          ? "none"
                          : "line-through",
                    },
                  ]}
                >
                  Phòng giải trí ngoài trời
              </Text>
              </View>
              <View style={HotelStyle.HotelSpecialItem}>
                <MaterialCommunityIcons name="pool" size={16} />
                <Text
                  style={[
                    HotelStyle.SpecialTitle,
                    {
                      textDecorationLine:
                        hotel["additional-info"] !== null &&
                          hotel["additional-info"].service &&
                          hotel["additional-info"].service.relax_ourdoor_pool === 1
                          ? "none"
                          : "line-through",
                    },
                  ]}
                >
                  Bể bơi ngoài trời
              </Text>
              </View>
              <View style={HotelStyle.HotelSpecialItem}>
                <MaterialCommunityIcons name="steam-box" size={16} />
                <Text
                  style={[
                    HotelStyle.SpecialTitle,
                    {
                      textDecorationLine:
                        hotel["additional-info"] !== null &&
                          hotel["additional-info"].service &&
                          hotel["additional-info"].service.relax_sauna === 1
                          ? "none"
                          : "line-through",
                    },
                  ]}
                >
                  Phòng tắm hơi
              </Text>
              </View>
              <View style={HotelStyle.HotelSpecialItem}>
                <FontAwesome5 name="swimming-pool" size={16} />
                <Text
                  style={[
                    HotelStyle.SpecialTitle,
                    {
                      textDecorationLine:
                        hotel["additional-info"] !== null &&
                          hotel["additional-info"].service &&
                          hotel["additional-info"].service.relax_pool === 1
                          ? "none"
                          : "line-through",
                    },
                  ]}
                >
                  Bể bơi trong nhà
              </Text>
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
              <HTMLView
                value={hotel["basic-info"].description.trim().replace(/(\r\n|\n|\r|\\n\\n|\n\n|\\n|\\t|\\r)/gm,"")}
                stylesheet={HotelStyle.Description}
              />
              {/* <Text style={HotelStyle.Description}>
                {hotel["basic-info"].description.trim().replace("<br/>", "\n")}
              </Text> */}
            </View>
            {hotel["related-hotels"] !== null &&
              hotel["related-hotels"]["nums-hotel"] > 0 ? (
                <View style={HotelStyle.ForYouBox}>
                  <Text style={HotelStyle.ForYouTitle}>Dành cho bạn</Text>
                  {hotel["related-hotels"]["paginated-hotels"].map((value, i) => (
                    <HotelItem
                      nav={props.navigation}
                      hotel={value}
                      defaultAddress={{
                        region: "",
                        country: ""
                      }}
                      setReload={setReload}
                      reload={reload}
                    ></HotelItem>
                  ))}
                </View>
              ) : null}
          </View>
        </ScrollView>

        <View style={HotelStyle.BtnBookBox}>
          <TouchableOpacity
            onPress={() => {
              hotel["basic-info"].url ? Linking.openURL(hotel["basic-info"].url) : Alert.alert("Thông báo", "Khách sạn này không cung cấp Link đặt phòng");
            }}
            style={HotelStyle.BtnBook}
          >
            <Text style={HotelStyle.BtnBookTitle}>Đặt phòng</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}
