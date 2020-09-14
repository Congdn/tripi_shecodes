import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  ScrollView,
  Dimensions, ActivityIndicator
} from "react-native";
import { FontAwesome, Feather, FontAwesome5 } from "@expo/vector-icons";
import Colors from "../commons/Colors";
import RBSheet from "react-native-raw-bottom-sheet";
//import RangeSlider from 'react-native-range-slider-expo';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import MainStyle from "../stylesheets/MainStyle";
import ListHotelStyle from "../stylesheets/ListHotelStyle";

import HotelItem from "../components/search/HotelItemComponent";
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';

const Format = (text, n, x) => {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
  return text.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
}


export default function ListHotelScreen(props) {
  const routeParams = props.route.params;

  const [listType, setListType] = React.useState("List");
  const [hotelStar, setHotelStar] = React.useState(0);
  const [currentLocation, setCurrentLocation] = React.useState(null);

  const [searchParams, setSearchParams] = React.useState({ location: routeParams.location });
  const [paging, setPaging] = React.useState({ pageIndex: 1, pageSize: 10 });
  const [hotels, setHotels] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [loadingMore, setLoadingMore]= React.useState(false);

  const refSortRBSheet = React.useRef();
  const refFilterRBSheet = React.useRef();

  const fetchHotels = () => {
    (async ()=>{
    await fetch(`https://tripi-shecodes.herokuapp.com/hotels/recommendation?latitude=${searchParams.location.latitude}&longitude=${searchParams.location.longitude}&page-index=${paging.pageIndex}&page-size=${paging.pageSize}`, null, 300000)
      .then(response => response.json())
      .then(result => {
        //console.log(result);
        if (result["status-code"] === 200) {
          setHotels([...hotels,...result.data["paginated-hotels"]]);
          setLoading(false);
        }
      })
      .catch(error => console.log(error));
    })()
  }
const loadMoreHanle = ()=>{
  let pageindex = paging.pageIndex + 1;
  setPaging({
    pageIndex:pageindex,
    pageSize:10
  })
  fetchHotels();
}
  /* const loadmore = () => {
    setLoadingMore(false);
    setPaging({
      pageIndex: paging.pageIndex + 1,
      pageSize: 10
    })
    fetchHotels();
  } */

  const renderFooter = (status) => {
    return status ? <ActivityIndicator size="large" /> : null
  }

  React.useEffect(() => {
    setPaging({
      pageIndex: 1,
      pageSize: 10
    })
    fetchHotels();
  }, [searchParams])

  const SetupCurrentLocation = () => {
    (async () => {
      const location = await Location.getCurrentPositionAsync();
      setCurrentLocation(location.coords);
    })();
  }
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
              SetupCurrentLocation();
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
      {loading ? <ActivityIndicator size="large"/> : <View>
        {
          listType === "List" &&
          <FlatList
            data={hotels}
            //extraData={loadingMore}
            style={{ marginTop: 10, marginBottom: 52 }}
            //showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.4}
            onEndReached={()=> loadMoreHanle()}
            ListFooterComponent={renderFooter(true)}
            renderItem={({ item }) =>
              <HotelItem nav={props.navigation}></HotelItem>
            }
          >
          </FlatList>
        }

        {
          listType === "Map" &&
          <MapView
            style={ListHotelStyle.MapView}
            initialRegion={{
              latitude: currentLocation !== null ? currentLocation.latitude : 21.0021622,
              longitude: currentLocation !== null ? currentLocation.longitude : 105.8056478,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1
            }}
          >
            <Marker
              key={0}
              coordinate={{
                latitude: currentLocation !== null ? currentLocation.latitude : 21.0021622,
                longitude: currentLocation !== null ? currentLocation.longitude : 105.8056478,
              }}
              title="Vị trí của bạn"
            ></Marker>
            <Marker
              key={1}
              coordinate={{
                latitude: 21,
                longitude: 105.8,
              }}
              title="Khách sạn ngàn sao"
              description="Mô tả khách sạn ngàn sao"
            ></Marker>
          </MapView>
        }
      </View>}

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
            {/* <RangeSlider
              style={{ width: 160, height: 80 }}
              gravity={'center'}
              min={200}
              max={1000}
              step={20}
              selectionColor="#3df"
              blankColor="#f618"
              onValueChanged={(low, high, fromUser) => {
                
              }} */
              /* fromValueOnChange={value => console.log(value)}
              toValueOnChange={value => console.log(value)}
              min={20}
              max={40}
              step={5}
              fromKnobColor={Colors.Primary}
              toKnobColor={Colors.Danger}
              styleSize='small'
              showRangeLabels={false} /> */
            }
            <View style={{ marginHorizontal: 20 }}>
              <MultiSlider
                values={[0, 10000000]}
                selectedStyle={{ backgroundColor: Colors.Dark }}
                trackStyle={{ height: 2 }}
                isMarkersSeparated={true}
                enabledOne={true}
                enabledTwo={true}
                enableLabel={true}
                sliderLength={Dimensions.get('window').width - 70}
                markerSize={20}
                min={0}
                max={10000000}
                step={50000}
                customMarkerLeft={(e) => {
                  return (<View><FontAwesome name="dot-circle-o" size={28} /></View>)
                }}

                customMarkerRight={(e) => {
                  return (<View><FontAwesome name="dot-circle-o" size={28} /></View>)
                }}
                customLabel={(value) => {
                  const leftVal = value.oneMarkerValue ?? 0;
                  const rightVal = value.twoMarkerValue ?? 10000000;
                  const label = `${Format(leftVal)} VNĐ - ${Format(rightVal)} VNĐ`;
                  return (<Text style={{ textAlign: 'right', fontSize: 16, color: Colors.Primary }}>{label}</Text>)
                }}
              />
            </View>
          </View>
          <View style={ListHotelStyle.FilterBox}>
            <Text style={ListHotelStyle.FilterTitle}>Số sao</Text>
            <View style={ListHotelStyle.FilterStarBox}>
              <TouchableOpacity
                onPress={() => setHotelStar(1)}
                style={[{
                  backgroundColor: hotelStar === 1 ? Colors.Medium : Colors.Gray
                }, ListHotelStyle.FilterStar]}
              >
                <FontAwesome name="star" size={20} color={Colors.Secondary} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setHotelStar(2)}
                style={[{
                  backgroundColor: hotelStar === 2 ? Colors.Medium : Colors.Gray
                }, ListHotelStyle.FilterStar]}
              >
                <FontAwesome name="star" size={20} color={Colors.Secondary} />
                <FontAwesome name="star" size={20} color={Colors.Secondary} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setHotelStar(3)}
                style={[{
                  backgroundColor: hotelStar === 3 ? Colors.Medium : Colors.Gray
                }, ListHotelStyle.FilterStar]}
              >
                <FontAwesome name="star" size={20} color={Colors.Secondary} />
                <FontAwesome name="star" size={20} color={Colors.Secondary} />
                <FontAwesome name="star" size={20} color={Colors.Secondary} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setHotelStar(4)}
                style={[{
                  backgroundColor: hotelStar === 4 ? Colors.Medium : Colors.Gray
                }, ListHotelStyle.FilterStar]}
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
                }, ListHotelStyle.FilterStar]}
              >
                <FontAwesome name="star" size={20} color={Colors.Secondary} />
                <FontAwesome name="star" size={20} color={Colors.Secondary} />
                <FontAwesome name="star" size={20} color={Colors.Secondary} />
                <FontAwesome name="star" size={20} color={Colors.Secondary} />
                <FontAwesome name="star" size={20} color={Colors.Secondary} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={ListHotelStyle.FilterButton}
              onPress={() => {
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
