import React from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import MainStyle from "../stylesheets/MainStyle";
import SearchStyle from "../stylesheets/SearchStyle";
import { FontAwesome } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SearchScreen() {
  const [date, setDate] = React.useState(new Date());
  const [dateShow, setDateShow] = React.useState(false);

  const dateOnChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDateShow(false);
    setDate(currentDate);
    //console.log(date);
  };
  const showDateTime = () => {
    setDateShow(true);
  };
  return (
    <View style={SearchStyle.container}>
      <View style={SearchStyle.searchItem}>
        <View style={SearchStyle.searchItemDetail}>
          <View style={SearchStyle.searchIcon}>
            <FontAwesome name="search" size={24} color="#fc5c65" />
          </View>
          <TextInput
            style={SearchStyle.searchInput}
            placeholder="Nơi đến"
          ></TextInput>
        </View>
      </View>
      <View style={SearchStyle.searchItem}>
        <View style={SearchStyle.searchItemDetail}>
          <View style={SearchStyle.searchIcon}>
            <FontAwesome name="calendar" size={24} color="#fc5c65" />
          </View>
          <TouchableOpacity
            onPress={showDateTime}
            style={SearchStyle.btnShowDate}
          >
              <Text style={SearchStyle.btnShowDateDetail}>Chọn ngày</Text>
          </TouchableOpacity>
          {dateShow && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              is24Hour={true}
              display="default"
              onChange={dateOnChange}
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
            placeholder="Nơi đến"
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
