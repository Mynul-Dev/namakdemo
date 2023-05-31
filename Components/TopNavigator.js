import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import VisitScreen from '../Screens/Visit/VisitScreen';
import Settings from './Settings';
import { Button, Searchbar } from 'react-native-paper';
import searchIcon from '../assets/svg/SearchIcon.svg'
import { Styles } from '../App.style';
import Star from '../assets/svg/StarIcon.svg'
import NotVisited from './NotVisited';
export default function TopNavigator() {
    const Tab = createMaterialTopTabNavigator();
    return (
        <>
            <View style={{ flexDirection: "row", justifyContent: "center", backgroundColor: "#fff", paddingVertical: 10 }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: 320, gap: 6 }}>

                    <View>
                        {/* <TextInput
                        inputMode="search"
                            placeholder='Search Outlets'
                            underlineColorAndroid="transparent"
                            style={{
                                
                                backgroundColor: '#FAFAFA',
                                borderWidth: 0.1,
                                borderColor: '#000000',
                                shadowColor: '#000000',
                                shadowOffset: { width: 0, height: 1 },
                                shadowOpacity: 0.1,
                                shadowRadius: 4,
                                borderRadius: 6,
                                paddingHorizontal: 10, // optional, adjust as needed
                                paddingVertical: 8, // optional, adjust as needed
                                width: 180, height: 40,
                            }}
                            
                        /> */}
                        <Searchbar
                            placeholder="Search"
                            inputStyle={{
                                marginTop: -10
                            }}
                            style={{

                                backgroundColor: '#FAFAFA',
                                borderWidth: 0.1,
                                borderColor: '#000000',
                                shadowColor: '#000000',
                                shadowOffset: { width: 0, height: 1 },
                                shadowOpacity: 0.1,
                                shadowRadius: 4,
                                paddingHorizontal: 10,
                                width: 180, height: 40,
                            }}
                        />

                    </View>
                    <View>
                        <Star width={26} height={26} />
                    </View>

                    <View>
                        <Button labelStyle={{ color: "#fff", fontSize: 12 }} style={Styles.RetailerPluss}>
                            +  New  Retailer
                        </Button>
                    </View>
                </View>
            </View>
            <Tab.Navigator screenOptions={{
                tabBarScrollEnabled:true,
                tabBarStyle: { width: '85%',},
                tabBarLabelStyle: { fontSize: 10 },
                tabBarActiveTintColor: "#2196F3",
                tabBarInactiveTintColor: "#2B2B2B",
             
            }} initialRouteName='Not Visited(10/22)'>
                <Tab.Screen name="Not Visited(10/22)" options={{
                    tabBarLabelStyle: {
                        padding: 0,
                        fontSize: 10
                    },
                    tabBarItemStyle: { width: 98, padding: 0 }

                }} component={VisitScreen} />
                <Tab.Screen name="Visited(12/22)" options={{
                    tabBarLabelStyle: {
                        padding: 0,
                        fontSize: 11


                    },
                    tabBarItemStyle: { width: 98, padding: 0 }

                }} component={Settings} />
                <Tab.Screen name="Billed(20/23)" options={{
                    tabBarLabelStyle: {
                        padding: 0,
                        fontSize: 11

                    },
                    tabBarItemStyle: { width: 98, padding: 0, margin: 0 }

                }} component={NotVisited} />
                <Tab.Screen name="NotVisited" options={{
                    tabBarLabelStyle: {
                        padding: 0,
                        fontSize: 11

                    },
                    tabBarItemStyle: { width: 98, padding: 0, margin: 0 }

                }} component={NotVisited} />
                <Tab.Screen name="NotVisited1" options={{
                    tabBarLabelStyle: {
                        padding: 0,
                        fontSize: 11

                    },
                    tabBarItemStyle: { width: 98, padding: 0, margin: 0 }

                }} component={Settings} />
            </Tab.Navigator>

        </>

    )
}