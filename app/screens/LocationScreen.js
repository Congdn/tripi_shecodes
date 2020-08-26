import React from "react";
import { View, Text, TextInput, Button, Alert,TouchableOpacity } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import MainStyle from "../stylesheets/MainStyle";
import SearchStyle from "../stylesheets/SearchStyle";

export default function LocationScreen(props) {
  const routeParams = props.route.params;
  return (
    <View style={SearchStyle.location}>
      <TouchableOpacity
        style={[
          SearchStyle.btnBoxLocation,
          { flexDirection: "row", alignItems: "center" },
        ]}
        onPress={()=>{
          routeParams.setlocation("Thanh Xuân");
          props.navigation.pop();
        }}
      >
        <MaterialIcons name="my-location" size={34} color="#fc5c65" />
        <View style={SearchStyle.btnCurrentLocRight}>
          <Text style={{ fontSize: 18, color: "#fc5c65", fontWeight: "bold" }}>
            Quanh vị trí hiện tại
          </Text>
          <Text>Thanh Xuân</Text>
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
