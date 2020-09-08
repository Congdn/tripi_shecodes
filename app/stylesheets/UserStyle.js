import { StyleSheet } from "react-native";
import Colors from "../commons/Colors";
import MainStyle from "./MainStyle";

const UserStyle = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: Colors.Light,
    },
    WallImage:{
        width: '100%',
        height: 260,
    },
    Content:{
        marginLeft: '6%'
    },
    AvatarBox:{
        top: -80,
        position:'absolute',
        width: '94%',
        backgroundColor: '#FFF',
        alignItems: 'center',
        borderRadius: 16,
        maxHeight: 200
    },
    AvatarContent: {
        top: -60,
        alignItems: 'center',
    },
    Avatar: {
        width: 120,
        height: 120
    },
    UserFullName:{
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 10
    },
    UserCost:{
        fontSize: 36,
        color: Colors.Primary
    },
    ContentBox:{
        marginTop:140
    },
    ContentBoxItem:{
        marginTop:20
    },
    ContentTitle:{
        fontWeight:'600',
        fontSize:22,
    },
    ContentItemBox:{
        backgroundColor:Colors.White,
        width:'94%',
        padding:10,
        borderRadius:10,
        marginVertical:5
    },
    ContentItemRow:{
        flexDirection:'row'
    },
    ContentItemIcon:{
        padding:10,
        width:50,
    },
    ContentItemTitle:{
        marginLeft:20,
        paddingVertical:10,
    }

})
export default UserStyle;