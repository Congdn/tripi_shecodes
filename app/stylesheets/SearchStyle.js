import { StyleSheet } from "react-native";
import Colors from "../commons/Colors";
import MainStyle from "./MainStyle";

const SearchStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Light,
    justifyContent: "center",
    alignItems: "center",
  },
  searchItem: {
    width: "94%",
    backgroundColor: Colors.White,
    borderRadius: 5,
    marginTop: 10,
  },
  searchItemDetail: {
    flexDirection: "row",
  },
  searchIcon: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  searchInput: {
    paddingLeft: 10,
    paddingVertical: 5,
    fontSize: 16,
  },
  btnSelect: {
    paddingLeft: 10,
    paddingVertical: 5,
    fontSize: 16,
    justifyContent: "center",
    width: 345,
    height: 45,
    backgroundColor: Colors.White,
  },
  btnSelectDetail: {
    textAlign: "left",
    color: "#c8c8c8",
    fontSize: 16,
    fontWeight: "600",
  },
  btnShowDate: {
    paddingLeft: 10,
    paddingVertical: 5,
    fontSize: 16,
    justifyContent: "center",
    width: 325/2,
    marginRight:20,
    height: 45,
    backgroundColor: Colors.White,
  },
  btnShowDateDetail: {
    textAlign: "left",
    color: "#c8c8c8",
    fontSize: 16,
    fontWeight: "600",
  },
  btnSearchBox: {
    marginTop: 20,
  },
  btnSearch: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.Primary,
    borderRadius: 10,
  },
  btnSearchText: {
    color: Colors.White,
    fontSize: 16,
  },
  location: {
    backgroundColor: Colors.Light,
  },
  btnBoxLocation: {
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: Colors.White,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  btnCurrentLocRight: {
    flexDirection: "column",
    marginLeft: 10,
  },
  btnLocationHistory: {
    marginTop: 8,
    marginLeft: 5,
    paddingBottom: 2,
    flexDirection: "row",
  },
  btnLocHisRight: {
    flexDirection: "column",
    marginLeft: 10,
  },
  LocHisResult:{
    color: "#6e6969" 
  },
  QuatityPopup:{
    flex:1,
    flexDirection:'column',
    margin:30,
  },
  QuatityItem:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    marginTop:10,
    borderTopColor:Colors.Medium,
    borderTopWidth:1,

  },
  QuatityItemTitle:{
    flex:0.7,
    fontSize:16,
  },
  QuatityItemSelect:{
    flex:0.3,
    fontSize:16,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  QuatityBtnSelectBox:{
    justifyContent:'center',
    alignItems:'center'
  },
  QuatityBtnSelect:{
    width:'30%'
  }
});
export default SearchStyle;
