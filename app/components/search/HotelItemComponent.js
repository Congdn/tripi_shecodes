import React from "react";
import { View, Text, Image, Picker } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import Colors from "../../commons/Colors";
import MainStyle from "../../stylesheets/MainStyle";
import ListHotelStyle from "../../stylesheets/ListHotelStyle";

export default function () {
  const [supplier, setSupplier] = React.useState();
  return (
    <View>
      <Image source={} />
      <View>
        <Text>Lorem</Text>
        <Text>Location</Text>
        <View>
          <FontAwesome name="star" size={8} color={Colors.Secondary} />
          <FontAwesome name="star" size={8} color={Colors.Secondary} />
          <FontAwesome name="star" size={8} color={Colors.Secondary} />
          <FontAwesome name="star" size={8} color={Colors.Secondary} />
          <FontAwesome name="star" size={8} color={Colors.Secondary} />
          <Text>(3k)</Text>
          <Text style={MainStyle.WhiteText}>9.5</Text>
        </View>
        <View>
          <Text>Nhà cung cấp</Text>
          <Picker
            selectedValue={supplier}
            onValueChange={(value, index) => {
              setSupplier(value);
            }}
          >
            <Picker.Item label="Booking.com" value="Booking" />
            <Picker.Item label="Agoda.com" value="Agoda" />
          </Picker>
        </View>
      </View>
    </View>
  );
}
