import { StyleSheet } from "react-native";
import Colors from "../commons/Colors";
import MainStyle from "./MainStyle";

const HotelStyle = StyleSheet.create({
    Container:{
        marginBottom:42,
    },
  Avatar: {
    width: "100%",
    height: 240,
  },
  ScopeBox: {
    flexDirection: "row",
    //width: 120,
    //justifyContent: "space-between",
    marginTop: 5,
  },
  Location: {
    flexDirection: "row",
    marginTop: 10,
  },
  LocationText: {
    marginLeft: 5,
  },
  HotelSpecial: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: Colors.White,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  HotelSpecialItem: {
    width: "44%",
    flexDirection: "row",
    margin: 5,
    marginTop: 10,
  },
  SpecialTitle: {
    marginLeft: 2,
  },
  HotelDetailBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: Colors.White,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  HotelDetailItem: {
    width: "44%",
    flexDirection: "row",
    margin: 5,
    marginTop: 10,
  },
  DetailIcon: {
    borderColor: Colors.Gray,
    color:Colors.Dark,
    borderWidth: 2,
    width: 40,
    height: 40,
    paddingTop: 6,
    textAlign: "center",
    borderRadius: 999,

    fontSize: 22,
  },
  DetailTitle: {
    marginLeft: 10,
  },
  DetailValue:{
      fontSize:16, 
      fontWeight:'bold'
  },
  BtnBookBox:{
      position:'absolute',
      bottom:0,
      paddingHorizontal:20,
      paddingTop:5,
      borderTopColor:Colors.Gray,
      borderTopWidth:1,
      backgroundColor:Colors.White,
      width:'100%',
  },
  BtnBookTitle:{
    backgroundColor:Colors.Primary,
      fontSize:20,
      textAlign:'center',
      lineHeight:40,
      color:Colors.Light,
      borderRadius:20
  },DescriptionBox:{
      backgroundColor:Colors.White,
      marginTop:10,
      padding:10,
      borderRadius:10
  },
  Description:{
      marginTop:5,
      paddingHorizontal:5,
      textAlign:'justify'
  },
  Map:{
    marginTop:10,
    borderRadius:20
  },
  ForYouBox:{
    backgroundColor:Colors.White,
    borderRadius:10,
    marginTop:10,
  },
  ForYouTitle:{
    fontSize:24,
    margin:10,
    fontWeight:'bold',
    color:Colors.Secondary
  }
});
export default HotelStyle;
