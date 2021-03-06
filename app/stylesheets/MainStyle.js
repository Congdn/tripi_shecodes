import {StyleSheet} from 'react-native';
import Colors from '../commons/Colors';

const MainStyle = StyleSheet.create({
    Container:{
        paddingLeft:10,
        paddingRight:10,
        paddingTop:20,
        paddingBottom:10,
        backgroundColor:Colors.Light
    },
    H1:{
        fontSize:28,
        fontWeight:'bold'
    },
    H2:{
        fontSize:26,
        fontWeight:'bold'
    },
    H3:{
        fontSize:24,
        fontWeight:'bold'
    },
    H4:{
        fontSize:22,
        fontWeight:'bold'
    },
    H5:{
        fontSize:20,
        fontWeight:'bold'
    },
    H6:{
        fontSize:18,
        fontWeight:'bold'
    },
    Vertical:{
        flex:1,
        flexDirection:'column'
    },
    Horizontal:{
        flex:1,
        flexDirection:'row'
    },
    FontSize:{
        fontSize:14
    },
    WhiteText:{
        color:Colors.White,
        backgroundColor:Colors.Primary
    },
    BlackText:{
        color:'#000',
        backgroundColor:Colors.Light
    },
    BackgroundMainColor:{
        backgroundColor:Colors.Light
    },
    Margin20:{
        marginTop:20
    },
    Margin10:{
        marginTop:10
    },
    BtnPrimary:{
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:10,
        backgroundColor:Colors.Primary
    },
    Loading:{
        fontSize:30
    }
})
export default MainStyle;