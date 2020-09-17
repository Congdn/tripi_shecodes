import React from 'react';
import { View, Image, Dimensions, ActivityIndicator } from 'react-native';
import * as Config from '../../config/AppConfig';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import HotelStyle from '../../stylesheets/HotelStyle';
import Colors from "../../commons/Colors";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function HotelCarousel(props) {
  const [hotelImages, setHotelImages] = React.useState([]);
  const [activeSlide, setActiveSlide] = React.useState(0);

  const carousel = React.useRef();

  React.useEffect(() => {
    if (props.url) {
      (async () => {
        let header = new Headers();
        header.append("Content-Type", "application/x-www-form-urlencoded");

        await fetch(Config.IMAGE_DOMAIN + "/api/system/get_hotel_image", {
          method: 'POST',
          body: "api-key=congdn&hotelurl=" + props.url,
          headers: header,
          redirect: 'follow'
        })
          .then(response => response.json())
          .then(result => {
            if (result.status && result.data.length > 0) {
              setHotelImages(result.data);
            }
          })
          .catch(error => console.log('error', error));
      })();
    }
  }, [])

  return hotelImages.length > 0 ? (
    <View>
      <Carousel
      layout="stack"
      ref={carousel}
      data={hotelImages}
      onSnapToItem={(index) => setActiveSlide(index) }
      renderItem={({ item, index }) => {
        return (
          <View>
            <Image source={{ uri: item }} style={{ height: 260 }} />
          </View>
        )
      }}
      sliderWidth={windowWidth}
      itemWidth={windowWidth - 40}
    />
      {/* <Pagination
        dotsLength={hotelImages.length}
        activeDotIndex={activeSlide}
        carouselRef={carousel}
        dotStyle={{
          backgroundColor:Colors.Gray,
        }}
        containerStyle={{
          backgroundColor:Colors.White
        }}
        inactiveDotStyle={{
          backgroundColor:Colors.Primary,
      }}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.6}
      /> */}
    </View>
  ) : <ActivityIndicator />
}