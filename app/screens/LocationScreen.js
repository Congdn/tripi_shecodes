import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import MainStyle from "../stylesheets/MainStyle";
import SearchStyle from "../stylesheets/SearchStyle";
import * as Location from "expo-location";
import { useSelector, useDispatch } from "react-redux";
import { Search_AddAction } from "../redux/actions/SearchAction";
import HotelItem from "../components/search/HotelItemComponent";

export default function LocationScreen(props) {
  const routeParams = props.route.params;
  const dispatch = useDispatch();

  const [geoLocation, setGeoLocation] = React.useState(null);
  const [locations, setLocations] = React.useState([]);
  const [hotels, setHotels] = React.useState([]);
  const [currentSearching, setCurrentSearching] = React.useState(false);

  const keyword = useSelector((state) => state.searchReducer.keyword);

  React.useEffect(() => {
    setCurrentSearching(true);
    (async () => {

      const currentLocation = await Location.getCurrentPositionAsync();
      const res = await Location.reverseGeocodeAsync(currentLocation.coords);
      setGeoLocation({
        city: res[0].city,
        country: res[0].country,
        isoCountryCode: res[0].isoCountryCode,
        name: res[0].name,
        postalCode:res[0].postalCode,
        region: res[0].region,
        street: res[0].street,
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude
      });

      //location
      setLocations([]);
      await fetch(
        "https://tripi-shecodes.herokuapp.com/hotels/autocomplete?type=province&query=" +
        keyword +
        "&page-index=1&page-size=10", null, 120000
      )
        .then((response) => response.json())
        .then((result) => {
          if (result["status-code"] === 200) {
            setLocations(result.data["paginated-hotels"]);
          }
        })
        .catch((error) => console.log(error));
      //
      //hotel
      setHotels([]);
      await fetch("https://tripi-shecodes.herokuapp.com/hotels/autocomplete?type=hotel&query=" +
        keyword +
        "&page-index=1&page-size=10", null, 180000)
        .then((response) => response.json())
        .then((result) => {
          //console.log(result);
          if (result["status-code"] === 200) {
            setHotels(result.data["paginated-hotels"]);
          }
        })
        .catch((error) => console.log(error));
      //

      setCurrentSearching(false);
    })();

  }, [keyword]);

  return keyword !== "" ? (
    <View>
      <ScrollView>
        {currentSearching ? <ActivityIndicator size="large" /> :
          <View style={SearchStyle.location}>
            <View style={SearchStyle.btnBoxLocation}>
              <Text style={MainStyle.H6}>Vị trí</Text>
              {locations.length > 0 &&
                locations.map((item, i) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        routeParams.setlocation({
                          city: item.shortname,
                          country: "Việt Nam",
                          isoCountryCode: "VN",
                          name: item.code,
                          postalCode: null,
                          region: item.name,
                          street: item.name,
                          latitude: item.latitude,
                          longitude: item.longitude
                        });
                        props.navigation.pop();
                      }}
                      style={SearchStyle.btnLocationHistory}>
                      <FontAwesome name="location-arrow" size={34} color="#000" />
                      <View style={SearchStyle.btnLocHisRight}>
                        <Text>{item.name}</Text>
                        <Text style={SearchStyle.LocHisResult}>{item.code}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
            </View>
            <View style={SearchStyle.btnBoxLocation}>
              <Text style={MainStyle.H6}>Khách sạn</Text>
              <FlatList
                data={hotels}
                style={{ marginTop: 10 }}
                showsVerticalScrollIndicator={false}
                //keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <HotelItem
                    nav={props.navigation}
                    isAutocomplete={true}
                    hotel={item}
                  ></HotelItem>
                )}
              ></FlatList>
            </View>
          </View>
        }
      </ScrollView>
    </View>
  ) : (
      <View style={SearchStyle.location}>
        <TouchableOpacity
          style={[
            SearchStyle.btnBoxLocation,
            { flexDirection: "row", alignItems: "center" },
          ]}
          onPress={() => {
            routeParams.setlocation(geoLocation);
            props.navigation.pop();
          }}
        >
          <MaterialIcons name="my-location" size={34} color="#fc5c65" />
          <View style={SearchStyle.btnCurrentLocRight}>
            <Text style={{ fontSize: 18, color: "#fc5c65", fontWeight: "bold" }}>
              Quanh vị trí hiện tại
          </Text>
            <Text>
              {geoLocation !== null
                ? `${geoLocation.street}, ${geoLocation.region}, ${geoLocation.country}`
                : "Không tìm thấy vị trí của bạn, vui lòng bật định vị"}
            </Text>
          </View>
        </TouchableOpacity>

        <View style={SearchStyle.btnBoxLocation}>
          <Text style={MainStyle.H6}>Lịch sử tìm kiếm</Text>

          <TouchableOpacity style={SearchStyle.btnLocationHistory}>
            <FontAwesome name="history" size={34} color="#000" />
            <View style={SearchStyle.btnLocHisRight}>
              <Text>Thanh Xuân</Text>
              <Text style={SearchStyle.LocHisResult}>1234 kết quả</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={SearchStyle.btnLocationHistory}>
            <FontAwesome name="history" size={34} color="#000" />
            <View style={SearchStyle.btnLocHisRight}>
              <Text>Cầu giấy</Text>
              <Text style={SearchStyle.LocHisResult}>4311 kết quả</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={SearchStyle.btnLocationHistory}>
            <FontAwesome name="history" size={34} color="#000" />
            <View style={SearchStyle.btnLocHisRight}>
              <Text>Ba Đình</Text>
              <Text style={SearchStyle.LocHisResult}>431 kết quả</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
}
