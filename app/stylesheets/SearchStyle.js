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
  btnShowDate: {
    paddingLeft: 10,
    paddingVertical: 5,
    fontSize: 16,
    justifyContent: "center",
    width:345,
    height:45,
    backgroundColor: Colors.White,
  },
  btnShowDateDetail:{
    textAlign:'left',
    color:'#c8c8c8', 
    fontSize:16, 
    fontWeight:'600'
  },
  btnSearchBox:{
      marginTop:20,
  },
  btnSearch:{
    paddingVertical:10,
    paddingHorizontal:20,
    backgroundColor:Colors.Primary,
    borderRadius:10,
  },
  btnSearchText:{
      color:Colors.White,
      fontSize:16
  }
});
export default SearchStyle;
