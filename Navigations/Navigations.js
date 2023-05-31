import { View, Text, Image } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import HomeIcon from '../assets/svg/HomeIcon.svg'
import ActivityIcon from '../assets/svg/ActivityIcon.svg'
import DropDown from "react-native-paper-dropdown";
import VisitsIcon from '../assets/svg/VisitsIcon.svg'
import Icon from 'react-native-vector-icons/AntDesign';
import Bell from '../assets/svg/BellIcon.svg'
import TopNavigator from '../Components/TopNavigator';
import ActivityScreen from '../Screens/Activity/ActivityScreen';
import HomeScreen from '../Screens/Home/HomeScreen';
import { CartContext } from '../Utils/AppContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Navigations = () => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [BeatRoute, setBeatRoute] = useContext(CartContext)



    const Tab = createBottomTabNavigator();
  
    const BeatRoutes = [
      {
        label: "Shibaji Nagar -Mon",
        value: "Shibaji Nagar -Mon",
        Latitude: 23.226732,
        Longitude: 77.422609
      },
      {
        label: "Frazor Town -Tue",
        value: "Frazor Town -Tue",
        Latitude: 26.452630,
        Longitude: 74.651180
      },
    ];
  
  
    return (
        <NavigationContainer >
            <Tab.Navigator
                initialRouteName='Visits'
                screenOptions={{
                    tabBarScrollEnabled: true,
                    swipeEnabled: true,
                    headerShown: true,
                    tabBarActiveBackgroundColor: "#713D00",
                    tabBarActiveTintColor: "#fff",
                    tabBarInactiveTintColor: "#fff",
                    tabBarStyle: {
                        backgroundColor: "#FF981E",
                        height: 59,
                    },
                    headerStyle: {
                        backgroundColor: "#FF981E",
                    },
                    headerLeft: () => {
                        const LeftIcon = <Icon name="arrowleft" size={16} color="#FFFFFF" />
                        return LeftIcon
                    },
                    headerRight: () => {
                        return <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10 }}>
                            <View >
                                <DropDown
                                    dropDownItemStyle={{}}
                                    placeholder={BeatRoutes[0]?.value}
                                    mode={"outlined"}
                                    visible={showDropDown}
                                    showDropDown={() => setShowDropDown(true)}
                                    onDismiss={() => setShowDropDown(false)}
                                    value={BeatRoute}
                                    setValue={setBeatRoute}
                                    list={BeatRoutes}
                                // inputProps={{
                                //   right: <Icon name='chevron-down' size={15} color='#000' />,
                                // }}

                                />
                            </View>

                            <View>
                                <Bell width={25} height={25} />
                            </View>
                            <View><Image source={require('../assets/Avatar.png')} style={{ width: 25 }} /></View>
                        </View>
                    }
                }}   >


                <Tab.Screen
                    options={{
                        headerTintColor: "#fff",
                        tabBarLabel: 'Home',
                        tabBarIcon: () => (
                            <HomeIcon width={23} height={24} />
                        ),
                    }}
                    name="Visit" component={HomeScreen} />

                <Tab.Screen
                    options={{
                        headerTintColor: "#fff",

                        tabBarIcon: () => (
                            <VisitsIcon width={23} height={24} />
                        ),
                    }}
                    name="Visits" component={TopNavigator} />

                <Tab.Screen
                    options={{
                        tabBarLabel: 'Activity',
                        tabBarIcon: () => (
                            <ActivityIcon width={23} height={24} />
                        ),
                    }}
                    name="Activity" component={ActivityScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigations