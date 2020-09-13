import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import MainStyle from "../stylesheets/MainStyle";
import SearchStyle from "../stylesheets/SearchStyle";
import { FontAwesome } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import RBSheet from "react-native-raw-bottom-sheet";
import Colors from "../commons/Colors";
import Moment from "moment";
import { useDispatch } from "react-redux";
import { Search_AddAction } from "../redux/actions/SearchAction";

export default function SearchScreen(props) {
  const dispatch = useDispatch();

  const [location, setLocation] = React.useState(null);
  const [fromDateTitle, setFromDateTitle] = React.useState("");
  const [toDateTitle, setToDateTitle] = React.useState("");
  const [quatityTitle, setQuatityTitle] = React.useState("");

  const [sDate, setSDate] = React.useState(new Date());
  const [eDate, setEDate] = React.useState(new Date());
  const [sDateShow, setSDateShow] = React.useState(false);
  const [eDateShow, setEDateShow] = React.useState(false);
  const [zoomQuatity, setZoomQuatity] = React.useState(0);
  const [adultsQuatity, setAdultsQuatity] = React.useState(0);
  const [childrenQuatity, setChildrenQuatity] = React.useState(0);

  const refRBSheet = React.useRef();

  const sDateOnChange = (event, selectedDate) => {
    setSDateShow(false);
    if (event.type === "dismissed") return;
    const currentDate = selectedDate || date;
    setSDate(currentDate);
    setFromDateTitle(Moment(currentDate).format("DD/MM/yyyy"));
  };
  const eDateOnChange = (event, selectedDate) => {
    setEDateShow(false);
    if (event.type === "dismissed") return;
    const currentDate = selectedDate || date;
    if (selectedDate < sDate) {
      Alert.alert(
        "Không thể chọn",
        "Ngày trả phòng phải lớn hơn hoặc bằng ngày nhận phòng"
      );
      return;
    }
    setEDate(currentDate);
    setToDateTitle(Moment(currentDate).format("DD/MM/yyyy"));
  };
  const showSDateTime = () => {
    setSDateShow(true);
  };
  const showESDateTime = () => {
    setEDateShow(true);
  };
  return (
    <View style={SearchStyle.container}>
      <View style={SearchStyle.searchItem}>
        <View style={SearchStyle.searchItemDetail}>
          <View style={SearchStyle.searchIcon}>
            <FontAwesome name="search" size={24} color="#fc5c65" />
          </View>
          <TouchableOpacity
            onPress={() => {
             /*  dispatch(
                Search_AddAction({
                  keyword: "",
                  searching: false,
                })
              ); */
              props.navigation.navigate("Location", {
                setlocation: setLocation,
              });
            }}
            style={SearchStyle.btnSelect}
          >
            <Text style={SearchStyle.btnSelectDetail}>
              {location === null
                ? "Nơi đến"
                : `${location.street}, ${location.region}, ${location.country}`}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={SearchStyle.searchItem}>
        <View style={SearchStyle.searchItemDetail}>
          <View style={SearchStyle.searchIcon}>
            <FontAwesome name="calendar" size={24} color="#fc5c65" />
          </View>
          <TouchableOpacity
            onPress={showSDateTime}
            style={SearchStyle.btnShowDate}
          >
            <Text style={SearchStyle.btnShowDateDetail}>
              {fromDateTitle === "" ? "Từ ngày" : fromDateTitle}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={showESDateTime}
            style={SearchStyle.btnShowDate}
          >
            <Text style={SearchStyle.btnShowDateDetail}>
              {toDateTitle === "" ? "Đến ngày" : toDateTitle}
            </Text>
          </TouchableOpacity>
          {sDateShow && (
            <DateTimePicker
              testID="dateTimePicker"
              value={sDate}
              is24Hour={true}
              display="default"
              onChange={sDateOnChange}
            />
          )}
          {eDateShow && (
            <DateTimePicker
              testID="dateTimePicker"
              value={eDate}
              is24Hour={true}
              display="default"
              onChange={eDateOnChange}
            />
          )}
        </View>
      </View>
      <View style={SearchStyle.searchItem}>
        <View style={SearchStyle.searchItemDetail}>
          <View style={SearchStyle.searchIcon}>
            <FontAwesome name="users" size={24} color="#fc5c65" />
          </View>
          <TouchableOpacity
            onPress={() => refRBSheet.current.open()}
            style={SearchStyle.btnSelect}
          >
            <Text style={SearchStyle.btnSelectDetail}>
              {quatityTitle === "" ? "Số lượng" : quatityTitle}
            </Text>
          </TouchableOpacity>
          <RBSheet ref={refRBSheet} height={260} openDuration={250}>
            <View style={SearchStyle.QuatityPopup}>
              <Text style={[MainStyle.H6, { color: Colors.Primary }]}>
                Chọn số phòng & số người
              </Text>
              <View style={SearchStyle.QuatityItem}>
                <Text style={SearchStyle.QuatityItemTitle}>Số phòng</Text>
                <View style={SearchStyle.QuatityItemSelect}>
                  <TouchableOpacity
                    onPress={() => {
                      setZoomQuatity(zoomQuatity - 1);
                    }}
                    disabled={zoomQuatity <= 0 ? true : false}
                    style={{
                      opacity: zoomQuatity <= 0 ? 0.5 : 1,
                    }}
                  >
                    <FontAwesome
                      name="minus-circle"
                      size={28}
                      color="#000000"
                    />
                  </TouchableOpacity>
                  <Text style={{ fontSize: 16 }}>{zoomQuatity}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      setZoomQuatity(zoomQuatity + 1);
                    }}
                  >
                    <FontAwesome name="plus-circle" size={28} color="#fc5c65" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={SearchStyle.QuatityItem}>
                <Text style={SearchStyle.QuatityItemTitle}>Người lớn</Text>
                <View style={SearchStyle.QuatityItemSelect}>
                  <TouchableOpacity
                    onPress={() => {
                      setAdultsQuatity(adultsQuatity - 1);
                    }}
                    disabled={adultsQuatity <= 0 ? true : false}
                    style={{
                      opacity: adultsQuatity <= 0 ? 0.5 : 1,
                    }}
                  >
                    <FontAwesome
                      name="minus-circle"
                      size={28}
                      color="#000000"
                    />
                  </TouchableOpacity>
                  <Text style={{ fontSize: 16 }}>{adultsQuatity}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      setAdultsQuatity(adultsQuatity + 1);
                    }}
                  >
                    <FontAwesome name="plus-circle" size={28} color="#fc5c65" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={SearchStyle.QuatityItem}>
                <Text style={SearchStyle.QuatityItemTitle}>Trẻ em</Text>
                <View style={SearchStyle.QuatityItemSelect}>
                  <TouchableOpacity
                    onPress={() => {
                      setChildrenQuatity(childrenQuatity - 1);
                    }}
                    disabled={childrenQuatity <= 0 ? true : false}
                    style={{
                      opacity: childrenQuatity <= 0 ? 0.5 : 1,
                    }}
                  >
                    <FontAwesome
                      name="minus-circle"
                      size={28}
                      color="#000000"
                    />
                  </TouchableOpacity>
                  <Text style={{ fontSize: 16 }}>{childrenQuatity}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      setChildrenQuatity(childrenQuatity + 1);
                    }}
                  >
                    <FontAwesome name="plus-circle" size={28} color="#fc5c65" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={SearchStyle.QuatityBtnSelectBox}>
                <TouchableOpacity
                  onPress={() => {
                    setQuatityTitle(
                      `Số phòng: ${zoomQuatity} - Người lớn: ${adultsQuatity} - Trẻ em: ${childrenQuatity}`
                    );
                    refRBSheet.current.close();
                  }}
                  style={[MainStyle.BtnPrimary, SearchStyle.QuatityBtnSelect]}
                >
                  <Text style={MainStyle.WhiteText}>Lựa chọn</Text>
                </TouchableOpacity>
              </View>
            </View>
          </RBSheet>
        </View>
      </View>
      <View style={SearchStyle.btnSearchBox}>
        <TouchableOpacity
          style={SearchStyle.btnSearch}
          onPress={() => {
            props.navigation.navigate("ListHotel");
            //Alert.alert("Thông báo", "Searching...")
          }}
        >
          <Text style={SearchStyle.btnSearchText}>Tìm kiếm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
