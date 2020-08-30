import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import MainStyle from "../../stylesheets/MainStyle";
import HomeStyle from "../../stylesheets/HomeStyle";
import HotelItem from "./HotelItem";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    image: "../../assets/images/fddab36b2d6c865c15b6d780adc66635.jpg",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    image: "../../assets/images/fddab36b2d6c865c15b6d780adc66635.jpg",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    image: "../../assets/images/fddab36b2d6c865c15b6d780adc66635.jpg",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Third Item",
    image: "../../assets/images/fddab36b2d6c865c15b6d780adc66635.jpg",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abbssad",
    title: "First Item",
    image: "../../assets/images/fddab36b2d6c865c15b6d780adc66635.jpg",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa9sdsa",
    title: "Second Item",
    image: "../../assets/images/fddab36b2d6c865c15b6d780adc66635.jpg",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e2sdaa",
    title: "Third Item",
    image: "../../assets/images/fddab36b2d6c865c15b6d780adc66635.jpg",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145sdsdadsds",
    title: "Third Item",
    image: "../../assets/images/fddab36b2d6c865c15b6d780adc66635.jpg",
  },
];
export default function HotelBox(props) {
  return (
    <View style={HomeStyle.HotelBox}>
      <Text style={HomeStyle.BoxTitle}>{props.title}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        style={HomeStyle.HotelBoxListItems}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <HotelItem image={item.image} nav={props.nav}></HotelItem>}
      />
    </View>
  );
}
