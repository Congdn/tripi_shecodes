import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { LogoutAction } from '../redux/actions/UserActions';
import MainStyle from '../stylesheets/MainStyle';
import UserInfo from '../components/home/UserInfo';
import HotelBox from '../components/home/HotelBox';
import * as Location from 'expo-location';

export default function HomeScreen(props) {
    /* const dispatch = useDispatch();
    const Logout=()=>{
        const logout = LogoutAction();
        dispatch(logout);
    } */
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            let currentLocation;
            await Location.getCurrentPositionAsync().then((value) => {
                currentLocation = value.coords
            });
            const locationURL = currentLocation ? `https://tripi-shecodes.herokuapp.com/hotels/recommendation?latitude=${currentLocation.latitude}&longitude=${currentLocation.longitude}&page-index=1&page-size=10`
                : `https://tripi-shecodes.herokuapp.com/hotels/recommendation?latitude=21.028334&longitude=105.853334&page-index=1&page-size=10`;
            fetch(locationURL)
                .then((response) => response.json())
                .then((res) => {
                    //console.log(res.data["paginated-hotels"]);
                    if (res["status-code"] === 200) {
                        setData(res.data["paginated-hotels"])
                    }
                })
                .catch((error) => Alert.alert("Thông báo", "Lỗi khi gọi server"))
        })();
    }, []);

    return data.length === 0 ? <ActivityIndicator size="large" /> : (
        <ScrollView style={MainStyle.BackgroundMainColor}>
            <UserInfo />
            <HotelBox DATA={data} title="Deal hot" nav={props.navigation}></HotelBox>
            <HotelBox DATA={data} title="Gần đây" nav={props.navigation}></HotelBox>
            <HotelBox DATA={data} title="Đặt nhiều" nav={props.navigation}></HotelBox>
        </ScrollView>
    )
}