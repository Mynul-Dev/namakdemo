import { View, Text, Image } from 'react-native'
import React from 'react'
import PhoneIcon from '../assets/svg/Phone.svg'
import Kyc from '../assets/svg/kyc.svg'
import Box from '../assets/svg/box.svg'
import LocationMarker from '../assets/svg/location.svg'
import { Styles } from '../App.style';
import CheckIn from '../assets/svg/CheckInIcon.svg'
import { Button } from 'react-native-paper'
import GoldenStart from '../assets/svg/goldenStar.svg'
const Shops = ({ shop, unique }) => {
    console.log(unique)
    return (
        <View style={{ flexDirection: "row", justifyContent: "center", paddingHorizontal: 8 }}>

            <View style={unique == 1 ? Styles.ActiveShopComponent : Styles.ShopComponent}>

                <View style={Styles.ShopComponentInner}>
                    <View style={{ position: "absolute", right: 0, top: unique == 1 ? 0 : 2, backgroundColor: "#8ED6FF", borderTopRightRadius: 2, width: 16 }}>
                        <Text style={{ textAlign: "center", color: "white" }}>+</Text>
                    </View>
                    <View style={{ flexDirection: "row", width: "98%", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text>
                                <Text style={{ fontWeight: "bold" }}>
                                    {unique == 1 ?
                                        <GoldenStart /> : null
                                    }  Mini Mart shop -
                                </Text>
                                <Text>
                                    Shobha
                                </Text>
                            </Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: 100 }}>
                            <Kyc width={32} height={20} />
                            <LocationMarker width={13} height={18} />
                            <PhoneIcon width={17} height={17} />
                        </View>
                    </View>
                    {unique == 1 ? <View>
                        <Text style={{
                            fontFamily: 'Poppins',
                            fontStyle: "normal",
                            fontWeight: 500,
                            fontSize: 8,
                            lineHeight: 12,
                            textAlign: "left",
                            color: '#818181',
                        }}>Samruddhi - Platinum </Text>
                    </View>:null}
                    <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-around" }}>
                        <View>
                            <Image source={require('../assets/shop.png')} />
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: "space-between", }}>
                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <View style={{ flexDirection: "row", }}>
                                    <View style={{
                                        background: "#2196F3",
                                        backgroundColor: "#2196F3",
                                        borderRadius: 4,
                                        width: 45,
                                        marginHorizontal: 2,
                                        height: 5
                                    }} />
                                    <View style={{
                                        background: "#CECECE",
                                        backgroundColor: "#CECECE",
                                        borderRadius: 4,
                                        width: 45,
                                        marginHorizontal: 2,
                                        height: 5
                                    }} />
                                    <View style={{
                                        background: "#2196F3",
                                        backgroundColor: "#2196F3",
                                        borderRadius: 4,
                                        width: 45,
                                        marginHorizontal: 2,
                                        height: 5
                                    }} />
                                    <View style={{
                                        background: "#FB332F",
                                        backgroundColor: "#FB332F",
                                        borderRadius: 4,
                                        width: 45,
                                        marginHorizontal: 2,
                                        height: 5
                                    }} />


                                </View>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "space-between", width: 195 }}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <View>
                                        <Box width={22} height={18} />
                                    </View>

                                    <View style={{ marginLeft: 5 }}>
                                        <Text style={Styles.saleName}>
                                            MTD sale
                                        </Text>
                                        <Text style={Styles.price}>
                                            ₹20,000
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", gap: 2.5 }}>
                                    <CheckIn width={25} height={25} />
                                    <Button style={{
                                        backgroundColor: '#2196F3',
                                        borderRadius: 0,
                                        borderBottomEndRadius: 6,
                                        borderTopEndRadius: 6,
                                        padding: 0,
                                        height: 25
                                    }}
                                        contentStyle={{
                                            margin: 0,

                                            marginTop: -5,

                                        }}
                                        labelStyle={{
                                            fontFamily: 'Poppins',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            fontSize: 10,
                                            lineHeight: 15,
                                            color: "#fff",
                                            textAlign: "center",



                                        }}>
                                        Check In
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Shops