import React from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import MainStyle from "../stylesheets/MainStyle";
import SearchStyle from "../stylesheets/SearchStyle";
import { FontAwesome } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SearchScreen(props) {
  const [sDate, setSDate] = React.useState(new Date());
  const [eDate, setEDate] = React.useState(new Date());
  const [sDateShow, setSDateShow] = React.useState(false);
  const [eDateShow, setEDateShow] = React.useState(false);

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
            onPress={()=>props.navigation.navigate("Location")}
            style={SearchStyle.btnSelectLocation}
          >
              <Text style={SearchStyle.btnSelectLocationDetail}>Nơi đến</Text>
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
          <TextInput
            style={SearchStyle.searchInput}
            placeholder="Số lượng"
          ></TextInput>
        </View>
      </View>
      <View style={SearchStyle.btnSearchBox}>
<TouchableOpacity
 style={SearchStyle.btnSearch}
 onPress={()=>{
     Alert.alert("Thông báo","Searching...")
 }}
 >
    <Text  style={SearchStyle.btnSearchText}>Tìm kiếm</Text>
</TouchableOpacity>
      </View>
    </View>
  );
}
