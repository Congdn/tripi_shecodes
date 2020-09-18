import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../commons/Colors';
import MainStyle from './MainStyle';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ListHotelStyle = StyleSheet.create({
	Header: {
		flexDirection: 'row',
	},
	HeaderLeftBox: {
		width: '80%',
		flexDirection: 'row',
	},
	HeaderRightBox: {
		width: '20%',
		flexDirection: 'row',
	},
	ListType: {
		padding: 7,
	},
	HeaderLeftItem: {
		flexDirection: 'row',
		marginLeft: 10,
		height: 30,
		backgroundColor: Colors.White,
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderRadius: 5,
	},

	HotelItemBox: {
		marginTop: 10,
		borderRadius: 10,
		// maxHeight:170,
		backgroundColor: Colors.White,
		flexDirection: 'row',
	},
	ItemImage: {
		width: '26%',
		height: '100%',
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
	},
	ItemContent: {
		padding: 10,
	},
	ItemTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		width: '70%',
	},
	ItemLocationBox: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 5,
	},
	ItemLocationText: {
		fontSize: 10,
		marginLeft: 2,
		width: '80%',
	},
	ItemScopeBox: {
		flexDirection: 'row',
		width: '100%',
		marginTop: 5,
		//justifyContent:'space-between'
	},
	ItemAverage: {
		padding: 4,
		borderRadius: 5,
	},
	ItemSupplier: {
		paddingTop: 20,
		flexDirection: 'row',
		width: windowWidth - 140,
		justifyContent: 'flex-end',
		//justifyContent:'center'
	},
	ItemSupplierDropBox: {
		flexDirection: 'row',
		marginLeft: 5,
		backgroundColor: Colors.Gray,
		paddingVertical: 2,
		paddingLeft: 30,
		paddingRight: 20,
		borderRadius: 20,
	},
	ItemSupplierTitle: {
		color: Colors.Dark,
		fontWeight: 'bold',
	},
	ItemPrice: {
		paddingTop: 10,
		fontSize: 20,
		fontWeight: 'bold',
		color: Colors.Danger,
		//textAlign:'right',
		//paddingRight:20,
		width: windowWidth - 140,
		textAlign: 'right',
	},
	Popup: {
		padding: 10,
		backgroundColor: Colors.White,
	},
	PopupTitle: {
		fontSize: 26,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	SortPopupContent: {
		marginTop: 20,
		justifyContent: 'center',
		flexDirection: 'row',
	},
	SortPopupButton: {
		backgroundColor: Colors.Light,
		//width:130,
		marginHorizontal: 10,
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 26,
		borderColor: Colors.Medium,
		borderWidth: 1,
	},
	SortPopupButtonTitle: {
		textAlign: 'center',
	},

	SupplierItemBox: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		backgroundColor: Colors.White,
		borderRadius: 10,
		marginTop: 10,
	},
	SupplierItemImage: {
		width: 100,
		height: 120,
		borderRadius: 10,
	},
	SupplierItemDetail: {
		width: '74%',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
	},
	SupplierName: {},

	FilterTitle: {
		fontSize: 18,
	},
	FilterBox: {
		marginLeft: 10,
	},
	FilterStarBox: {
		marginLeft: 20,
		marginVertical: 10,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	FilterStar: {
		flexDirection: 'row',
		paddingVertical: 6,
		paddingHorizontal: 16,
		margin: 10,
		borderRadius: 20,
	},
	FilterButton: {
		backgroundColor: Colors.Primary,
		paddingVertical: 10,
		paddingHorizontal: 26,
		width: 110,
		borderRadius: 20,
	},
	MapView: {
		width: '100%',
		height: '100%',
		marginTop: 10,
		borderRadius: 10,
	},
});
export default ListHotelStyle;
