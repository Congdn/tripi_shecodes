import React from "react";
import { useDispatch } from "react-redux";
import {
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import { LogoutAction } from "../redux/actions/UserActions";
import MainStyle from "../stylesheets/MainStyle";
import UserInfo from "../components/home/UserInfo";
import HotelBox from "../components/home/HotelBox";
import * as Location from "expo-location";
import * as Config from "../config/AppConfig";

const nearPaging ={
    pageindex: 1,
    pagesize: 5,
};
const watchPaging ={
    pageindex: 1,
    pagesize: 5,
};
export default function HomeScreen(props) {
  /* const dispatch = useDispatch();
    const Logout=()=>{
        const logout = LogoutAction();
        dispatch(logout);
    } */
  const [nearHotels, setNearHotels] = React.useState([]);
  /* const [nearPaging, setNearPaging] = React.useState({
    pageindex: 1,
    pagesize: 5,
  }); */
  const [watchHotels, setWatchHotels] = React.useState([]);
  /* const [watchPaging, setWatchPaging] = React.useState({
    pageindex: 1,
    pagesize: 5,
  }); */
  //const [forUserHotels, setForUserHotels] = React.useState([]);

const renderdata= ()=>{
    (async () => {
        //near hotels
        let currentLocation;
        await Location.getCurrentPositionAsync().then((value) => {
          currentLocation = value.coords;
        });
        console.log(nearPaging);
        const locationURL = currentLocation
          ? `${Config.API_DOMAIN}/hotels/recommendation/nearbys?latitude=${currentLocation.latitude}&longitude=${currentLocation.longitude}&page-index=${nearPaging.pageindex}&page-size=${nearPaging.pagesize}`
          : `${Config.API_DOMAIN}/hotels/recommendation/nearbys?latitude=21.028334&longitude=105.853334&page-index=${nearPaging.pageindex}&page-size=${nearPaging.pagesize}`;
  
        fetch(locationURL, null, 180000)
          .then((response) => response.json())
          .then((res) => {
            if (res["status-code"] === 200) {
              setNearHotels([...nearHotels, ...res.data["hotels"]]);
            }
          })
          .catch((error) => Alert.alert("Thông báo", "Lỗi khi gọi server"));
        //
  
        //watch a lot
        fetch(
          `${Config.API_DOMAIN}/hotels/recommendation/most-watched?page-index=${watchPaging.pageindex}&page-size=${watchPaging.pagesize}`,
          null,
          180000
        )
          .then((response) => response.json())
          .then((res) => {
            if (res["status-code"] === 200) {
              setWatchHotels([...watchHotels,...res.data["hotels"]]);
            }
          })
          .catch((error) => Alert.alert("Thông báo", "Lỗi khi gọi server"));
        //
      })();
}

  React.useEffect(() => {
    renderdata();
  }, []);

  return watchHotels.length === 0 || nearHotels.length === 0 ? 
  <ActivityIndicator size="large" />
  :(
    <ScrollView style={MainStyle.BackgroundMainColor}>
      <UserInfo />

      {watchHotels.length === 0 ? (
        <ActivityIndicator size="large" />
      ) : (
        <HotelBox
          DATA={watchHotels}
          title="Xem nhiều"
          nav={props.navigation}
          paging={watchPaging}
          setPaging={watchPaging}
          renderdata={renderdata}
        ></HotelBox>
      )}
      {nearHotels.length === 0 ? (
        <ActivityIndicator size="large" />
      ) : (
        <HotelBox
          DATA={nearHotels}
          title="Gần đây"
          nav={props.navigation}
          paging={nearPaging}
          setPaging={nearPaging}
          renderdata={renderdata}
        ></HotelBox>
      )}
      {/* <HotelBox
        DATA={forUserHotels}
        title="Dành cho bạn"
        nav={props.navigation}
      ></HotelBox> */}
    </ScrollView>
  );
}
