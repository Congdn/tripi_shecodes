import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text,TouchableOpacity,ScrollView,ActivityIndicator,Alert } from 'react-native';
import {LogoutAction} from '../redux/actions/UserActions';
import MainStyle from '../stylesheets/MainStyle';
import UserInfo from '../components/home/UserInfo';
import HotelBox from '../components/home/HotelBox';

export default function HomeScreen(props) {
    /* const dispatch = useDispatch();
    const Logout=()=>{
        const logout = LogoutAction();
        dispatch(logout);
    } */
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
      fetch("https://tripi-shecodes.herokuapp.com/hotels/recommendation?latitude=21.028333&longitude=105.853333&page-index=1&page-size=10")
        .then((response) => response.json())
        .then((res) => {
            //console.log(res.data["paginated-hotels"]);
          if(res["status-code"] === 200){
            setData(res.data["paginated-hotels"])
          }
        })
        .catch((error)=>Alert.alert("Thông báo", "Lỗi khi gọi server"))
      /* axios
        .get(
          "https://tripi-shecodes.herokuapp.com/hotels/recommendation?latitude=21.028333&longitude=105.853333&page-index=1&page-size=10"
        )
        .then((response) => {
          console.log(response);
          response.data.map((item, i) => {});
          setData(response.data);
        })
        .catch((erorr) => {
          Alert.alert("Thông báo", "Lỗi khi gọi server");
        }); */
    }, []);

    return data.length === 0 ? <ActivityIndicator size="large"/> : (
        <ScrollView style={MainStyle.BackgroundMainColor}>
            <UserInfo />
            <HotelBox DATA={data} title="Deal hot" nav={props.navigation}></HotelBox>
            <HotelBox DATA={data} title="Gần đây" nav={props.navigation}></HotelBox>
            <HotelBox DATA={data} title="Đặt nhiều" nav={props.navigation}></HotelBox>
        </ScrollView>
    )
}