import React from 'react';
import { View, Text, Image, Alert, TouchableOpacity, ScrollView,StatusBar } from 'react-native';
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import Colors from '../commons/Colors';
import UserStyle from '../stylesheets/UserStyle';

export default function UserScreen() {
    return (
        <View>
            <StatusBar/>
        <ScrollView
            style={UserStyle.Container}>
            <Image
                style={UserStyle.WallImage}
                source={require("../assets/images/6ee3c5cc9969ec767784419e32dc4339.jpg")} />
            <View style={UserStyle.Content}>
                <View style={UserStyle.AvatarBox}>
                    <View style={UserStyle.AvatarContent}>
                        <Image
                            style={UserStyle.Avatar}
                            source={require("../assets/images/user-type-the-shy-user.png")} />
                        <Text
                            style={UserStyle.UserFullName}
                        >Công Ngô</Text>
                        <Text>0357745871</Text>
                        <Text
                            style={UserStyle.UserCost}
                        >150.000 VNĐ</Text>
                    </View>
                </View>
                <View style={UserStyle.ContentBox}>
                    <View style={UserStyle.ContentBoxItem}>
                        <Text style={UserStyle.ContentTitle}>Giới thiệu</Text>
                        <View style={UserStyle.ContentItemBox}>
                            <View style={UserStyle.ContentItemRow}>
                                <FontAwesome style={UserStyle.ContentItemIcon} name="clock-o" size={24}  color={Colors.Primary} />
                                <Text style={UserStyle.ContentItemTitle}>Tham gia TripI được 1 ngày</Text>
                            </View>
                            <View style={UserStyle.ContentItemRow}>
                                <FontAwesome style={UserStyle.ContentItemIcon} name="calendar-o" size={24}  color={Colors.Primary} />
                                <Text style={UserStyle.ContentItemTitle}>Ngày sinh: 25/03/1999</Text>
                            </View>
                            <View style={UserStyle.ContentItemRow}>
                                <FontAwesome style={UserStyle.ContentItemIcon} name="intersex" size={24}  color={Colors.Primary} />
                                <Text style={UserStyle.ContentItemTitle}>Giới tính: Nam</Text>
                            </View>
                        </View>
                    </View>
                    <View style={UserStyle.ContentBoxItem}>
                        <Text style={UserStyle.ContentTitle}>Thông tin liên hệ</Text>
                        <View style={UserStyle.ContentItemBox}>
                            <View style={UserStyle.ContentItemRow}>
                                <FontAwesome style={UserStyle.ContentItemIcon} name="address-book-o" size={24}  color={Colors.Primary} />
                                <Text style={UserStyle.ContentItemTitle}>Địa chỉ: Thanh Xuân, Hà Nội</Text>
                            </View>
                            <View style={UserStyle.ContentItemRow}>
                                <FontAwesome style={UserStyle.ContentItemIcon} name="phone" size={24}  color={Colors.Primary} />
                                <Text style={UserStyle.ContentItemTitle}>SĐT: 0357745871</Text>
                            </View>
                            <View style={UserStyle.ContentItemRow}>
                                <FontAwesome5 style={UserStyle.ContentItemIcon} name="mail-bulk" size={24}  color={Colors.Primary} />
                                <Text style={UserStyle.ContentItemTitle}>Email: nc.garlic.dk@gmail.com</Text>
                            </View>
                        </View>
                    </View>
                    <View style={UserStyle.ContentBoxItem}>
                        <Text style={UserStyle.ContentTitle}>Thông tin TripI</Text>
                        <View style={UserStyle.ContentItemBox}>
                            <TouchableOpacity style={UserStyle.ContentItemRow}>
                                <FontAwesome style={UserStyle.ContentItemIcon} name="user-o" size={24}  color={Colors.Primary} />
                                <Text style={UserStyle.ContentItemTitle}>Loại người dùng: Thường</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={UserStyle.ContentItemRow}>
                                <FontAwesome style={UserStyle.ContentItemIcon} name="history" size={24}  color={Colors.Primary} />
                                <Text style={UserStyle.ContentItemTitle}>Lịch sử giao dịch</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={UserStyle.ContentItemRow}>
                                <MaterialCommunityIcons style={UserStyle.ContentItemIcon} name="security" size={24}  color={Colors.Primary} />
                                <Text style={UserStyle.ContentItemTitle}>Chính sách và bảo mật</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={UserStyle.ContentBoxItem}>
                        <Text style={UserStyle.ContentTitle}>Tiện ích khác</Text>
                        <View style={UserStyle.ContentItemBox}>
                            <TouchableOpacity style={UserStyle.ContentItemRow}>
                                <FontAwesome style={UserStyle.ContentItemIcon} name="wechat" size={24} color={Colors.Primary} />
                                <Text style={UserStyle.ContentItemTitle}>Chat với TripI</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={UserStyle.ContentItemRow}>
                                <FontAwesome style={UserStyle.ContentItemIcon} name="phone-square" size={24} color={Colors.Primary} />
                                <Text style={UserStyle.ContentItemTitle}>Liên hệ tổng đài</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={UserStyle.ContentItemRow}>
                                <FontAwesome style={UserStyle.ContentItemIcon} name="warning" size={24} color={Colors.Primary} />
                                <Text style={UserStyle.ContentItemTitle}>Góp ý & Báo lỗi ứng dụng</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={UserStyle.ContentItemRow}>
                                <Feather style={UserStyle.ContentItemIcon} name="settings" size={24} color={Colors.Primary} />
                                <Text style={UserStyle.ContentItemTitle}>Thiết lập ứng dụng</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{width:'100%',alignItems:'center', marginVertical:20}}>
                <Text>
                    @2020 Shecodes.
                </Text>
                <Text>
                    Design by Công Ngô
                </Text>
            </View>
        </ScrollView>
        </View>
    )
}