import React from 'react';
import {View,Text,TouchableOpacity,TouchableHighlight} from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

import MainStyle from "../stylesheets/MainStyle";
import ListHotel from "../stylesheets/ListHotelStyle";

export default function ListHotelScreen(props){
    return (
        <View>
            <View>
                <View>
                <TouchableOpacity>
                    <View>
                        <FontAwesome />
                        <Text>Sắp xếp</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <FontAwesome />
                        <Text>Sắp xếp</Text>
                    </View>
                </TouchableOpacity>
                </View>
                <View>
                    <TouchableHighlight>
                        <FontAwesome />
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <FontAwesome />
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}