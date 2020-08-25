import React from "react";
import { View, Text, TextInput, Button, Alert,TouchableOpacity } from "react-native";
import MainStyle from "../stylesheets/MainStyle";
import SearchStyle from "../stylesheets/SearchStyle";
import { FontAwesome } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import RBSheet from "react-native-raw-bottom-sheet";
import Colors from "../commons/Colors";

export default function SearchScreen(props) {
  const [sDate, setSDate] = React.useState(new Date());
  const [eDate, setEDate] = React.useState(new Date());
  const [sDateShow, setSDateShow] = React.useState(false);
  const [eDateShow, setEDateShow] = React.useState(false);
  const [zoomQuatity, setZoomQuatity] = React.useState(0);
  const [adultsQuatity, setAdultsQuatity] = React.useState(0);
  const [childrenQuatity, setChildrenQuatity] = React.useState(0);


  console.log(sDate);
  const sDateOnChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setSDateShow(false);
    setSDate(currentDate);
    //console.log(date);
  };
  const eDateOnChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setEDateShow(false);
    setEDate(currentDate);


    //console.log(date);
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
            onPress={() => props.navigation.navigate("Location")}
            style={SearchStyle.btnSelect}
          >
            <Text style={SearchStyle.btnSelectDetail}>Nơi đến</Text>
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
            <Text style={SearchStyle.btnShowDateDetail}>Từ ngày</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={showESDateTime}
            style={SearchStyle.btnShowDate}
          >
            <Text style={SearchStyle.btnShowDateDetail}>Đến ngày</Text>
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
            onPress={() => this.RBSheet.open()}
            style={SearchStyle.btnSelect}
          >
            <Text style={SearchStyle.btnSelectDetail}>Số lượng</Text>
          </TouchableOpacity>
          <RBSheet
            ref={ref => {
              this.RBSheet = ref;
            }}
            height={260}
            openDuration={250}
            >
            <View style={SearchStyle.QuatityPopup}>
            <Text style={[MainStyle.H6, { color: Colors.Primary }]}>Chọn số phòng & số người</Text>
            <View style={SearchStyle.QuatityItem}>
              <Text style={SearchStyle.QuatityItemTitle}>Số phòng</Text>
              <View style={SearchStyle.QuatityItemSelect}>
                <TouchableOpacity>
                  <FontAwesome name="minus-circle" size={28} color="#000000" />
                </TouchableOpacity>
                <Text style={{fontSize:16}}>{zoomQuatity}</Text>
                <TouchableOpacity>
                  <FontAwesome name="plus-circle" size={28} color="#fc5c65" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={SearchStyle.QuatityItem}>
              <Text style={SearchStyle.QuatityItemTitle}>Người lớn</Text>
              <View style={SearchStyle.QuatityItemSelect}>
                <TouchableOpacity>
                  <FontAwesome name="minus-circle" size={28} color="#000000" />
                </TouchableOpacity>
                <Text style={{fontSize:16}}>{adultsQuatity}</Text>
                <TouchableOpacity>
                  <FontAwesome name="plus-circle" size={28} color="#fc5c65" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={SearchStyle.QuatityItem}>
              <Text style={SearchStyle.QuatityItemTitle}>Trẻ em</Text>
              <View style={SearchStyle.QuatityItemSelect}>
                <TouchableOpacity>
                  <FontAwesome name="minus-circle" size={28} color="#000000" />
                </TouchableOpacity>
                <Text style={{fontSize:16}}>{childrenQuatity}</Text>
                <TouchableOpacity>
                  <FontAwesome name="plus-circle" size={28} color="#fc5c65" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={SearchStyle.QuatityBtnSelectBox}>
              <TouchableOpacity
              onPress={()=> this.RBSheet.close()}
              style={[MainStyle.BtnPrimary,SearchStyle.QuatityBtnSelect]}>
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
            Alert.alert("Thông báo", "Searching...")
          }}
        >
          <Text style={SearchStyle.btnSearchText}>Tìm kiếm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
