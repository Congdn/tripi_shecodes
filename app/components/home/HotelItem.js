import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MainStyle from "../../stylesheets/MainStyle";
import { SimpleLineIcons } from "@expo/vector-icons";
import HomeStyle from "../../stylesheets/HomeStyle";

export default function HotelItem(props) {
  const [showDetail, setShowDetail] = React.useState(false);

  const description = props.description.substring(0, props.description.indexOf(".")).trim();

  return (
    <TouchableOpacity
      onPress={() => {
        props.nav.navigate("Hotel",
          {
            hotel_id:props.hotelId
          });
      }}
      style={HomeStyle.HotelItem}
    >
      <Image
        source={require("../../assets/images/156916041.jpg")}
        style={{
          borderRadius: 10,
          width: 120,
          height: 170,
        }}
      />
      {!showDetail && (
        <TouchableOpacity
          onPress={() => setShowDetail(!showDetail)}
          style={HomeStyle.BtnShowDetailBox}
        >
          <SimpleLineIcons
            style={HomeStyle.BtnShowDetailIcon}
            name="arrow-up"
            size={22}
          />
        </TouchableOpacity>
      )}
      {showDetail && (
        <View style={HomeStyle.HotelItemDetail}>
          <Text style={HomeStyle.HotelItemDetailTitle}>{props.name}</Text>
          <Text style={HomeStyle.HotelItemStar}>* * * * *</Text>
          <Text style={HomeStyle.HotelItemSapo}>
            {description}
          </Text>
          <TouchableOpacity
          onPress={() => setShowDetail(!showDetail)}
          >
            <SimpleLineIcons
              style={HomeStyle.BtnShowDetailIcon}
              name="arrow-down"
              size={22}
            />
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
}
