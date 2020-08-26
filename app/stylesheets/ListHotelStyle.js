import { StyleSheet } from "react-native";
import Colors from "../commons/Colors";
import MainStyle from "./MainStyle";

const ListHotelStyle = StyleSheet.create({
    Header:{
        flex:1,
        flexDirection:'row',
    },
    HeaderLeftBox:{
        flex: 0.8,
        flexDirection:'row'
    },
    HeaderRightBox:{
        flex: 0.2,
        flexDirection:'row',
    },
    HeaderLeftItem:{
        flexDirection:'row',
        marginLeft:10,
        height:30,
        backgroundColor:Colors.White,
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:5
    }
})
export default ListHotelStyle;