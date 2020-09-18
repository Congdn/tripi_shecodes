import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MainStyle from '../../stylesheets/MainStyle';
import { SimpleLineIcons } from '@expo/vector-icons';
import HomeStyle from '../../stylesheets/HomeStyle';
import * as Config from '../../config/AppConfig';

export default function HotelItem(props) {
	const [showDetail, setShowDetail] = React.useState(false);
	const [hotelImage, setHotelImage] = React.useState(null);

	const description = props.description
		.substring(0, props.description.indexOf('.'))
		.trim();
	//const imageURL = getImageUrl(props.url);
	React.useEffect(() => {
		//let res = "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg";
		if (props.url) {
			(async () => {
				let header = new Headers();
				header.append('Content-Type', 'application/x-www-form-urlencoded');

				await fetch(Config.IMAGE_DOMAIN + '/api/system/get_hotel_image', {
					method: 'POST',
					body: 'api-key=congdn&hotelurl=' + props.url,
					headers: header,
					redirect: 'follow',
				})
					.then((response) => response.json())
					.then((result) => {
						//console.log(result);
						if (result.status && result.data.length > 0) {
							setHotelImage(result.data[0]);
						} else {
							setHotelImage(
								'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg'
							);
						}
					})
					.catch((error) => {
						setHotelImage(
							'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg'
						);
						console.log('error', error);
					});
			})();
		} else {
			setHotelImage(
				'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg'
			);
		}
	}, []);

	return (
		<TouchableOpacity
			onPress={() =>
				props.nav.navigate('Hotel', {
					hotel_id: props.hotelId,
				})
			}
			style={HomeStyle.HotelItem}
		>
			<Image
				source={{ uri: hotelImage }}
				style={{
					borderRadius: 10,
					width: 120,
					height: 170,
				}}
			/>
			{!showDetail && (
				<TouchableOpacity
					onPress={() => setShowDetail(!showDetail)}
					style={HomeStyle.BtnShowDetailBox}
				>
					<SimpleLineIcons
						style={HomeStyle.BtnShowDetailIcon}
						name="arrow-up"
						size={22}
					/>
				</TouchableOpacity>
			)}
			{showDetail && (
				<View style={HomeStyle.HotelItemDetail}>
					<Text style={HomeStyle.HotelItemDetailTitle}>{props.name}</Text>
					<Text style={HomeStyle.HotelItemStar}>* * * * *</Text>
					<Text style={HomeStyle.HotelItemSapo}>{description}</Text>
					<TouchableOpacity onPress={() => setShowDetail(!showDetail)}>
						<SimpleLineIcons
							style={HomeStyle.BtnShowDetailIcon}
							name="arrow-down"
							size={22}
						/>
					</TouchableOpacity>
				</View>
			)}
		</TouchableOpacity>
	);
}
