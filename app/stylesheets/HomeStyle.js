import { StyleSheet } from "react-native";
import Colors from "../commons/Colors";
import MainStyle from "./MainStyle";

const HomeStyle = StyleSheet.create({
  HotelItem: {
    flex: 1,
    width: 120,
    height: 170,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 10,
  },
  HotelItemDetail: {
    flex: 1,
    position: "absolute",
    top: 50,
    width: 120,
    height: 120,
    paddingHorizontal: 5,
    backgroundColor: Colors.Primary,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  HotelItemDetailTitle: {
    textAlign: "center",
    alignItems: "center",
    width: 110,
    height:40,
    paddingHorizontal: 5,
    fontSize: 16,
    fontWeight: "bold",
  },

  HotelBox: {
    backgroundColor: Colors.White,
    margin: 10,
    borderRadius: 10,
    padding: 5,
  },
  HotelBoxListItems: {
    marginBottom: 5,
  },
  BoxTitle: {
    fontSize: 22,
    padding: 5,
    fontWeight: "bold",
    color: Colors.Secondary,
  },
  HotelItemSapo: {
    textAlign: "justify",
    height:60
  },
  HotelItemStar:{
      height:14
  }
});
export default HomeStyle;
