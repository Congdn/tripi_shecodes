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
    position: "absolute",
    top: 20,
    width: '100%',
    height: 150,
    //paddingHorizontal: 5,
    backgroundColor: Colors.Dark,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    opacity:0.7,
    borderTopLeftRadius:5,
    borderTopRightRadius:5
  },
  HotelItemDetailTitle: {
    color:Colors.White,
    textAlign: "center",
    alignItems: "center",
    width: 120,
    height:42,
    paddingHorizontal: 5,
    fontSize: 16,
    fontWeight: "bold",
    borderBottomColor:Colors.Gray,
    borderBottomWidth:1,
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
    height:74,
    fontSize:12,
    color:Colors.White,
    backgroundColor:null,
    paddingHorizontal:4,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  HotelItemStar:{
      height:14,
      color:Colors.Secondary,
      backgroundColor:null,
      fontSize:20,
      fontWeight:'bold',
      paddingHorizontal:4
  },
  BtnShowDetailBox:{
    position:'absolute',
    width:'100%',
    bottom:0,
    opacity:0.6
  },
  BtnShowDetailIcon:{
    textAlign:'center',
    color:Colors.White
  }
});
export default HomeStyle;
