/* eslint-disable prettier/prettier */
import { View, Text, Image, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from './assets/svg/HomeIcon.svg'
import ActivityIcon from './assets/svg/ActivityIcon.svg'
import DropDown from "react-native-paper-dropdown";

import OrdersIcons from './assets/svg/OrdersIcons.svg'
import VisitsIcon from './assets/svg/VisitsIcon.svg'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Slider from '@react-native-community/slider';
import {
  Button, Searchbar, TextInput, Appbar,
  DarkTheme,
  DefaultTheme,
  Provider,
  Surface,
  ThemeProvider,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import Avatar from './assets/svg/Avatar.svg'
import Bell from './assets/svg/BellIcon.svg'
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker'
import { Styles } from './App.style';
import Shops from './Components/Shops';
import Settings from './Components/Settings';
import VisitScreen from './Screens/Visit/VisitScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopNavigator from './Components/TopNavigator';
import { SearchBar } from 'react-native-screens';
import ActivityScreen from './Screens/Activity/ActivityScreen';
import HomeScreen from './Screens/Home/HomeScreen';
import { AppProvider, CartContext } from './Utils/AppContext';
import Navigations from './Navigations/Navigations';

const App = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [BeatRoute, setBeatRoute] = useContext(CartContext)
  const [BeatRoute1, setBeatRoute1] = useState('')

  
  // const data = new FormData();
  // data.append('file', {
  //   name: file.name,
  //   type: file.type,
  //   uri: Platform.OS === 'ios' ?
  //     file.uri.replace('file://', '')
  //     : file.uri,
  // });
  // fetch("https://freeimage.host/api/1/upload/6d207e02198a847aa98d0a2a901485a5", {
  //   method: "post",
  //   body: data,
  //   headers: {
  //     "Content-Type": "multipart/form-data; ",
  //   },
  // });
  const HandleGallery = async () => {
    const result = await launchImageLibrary({ mediaType: "mixed" });
    console.log(result)
  }
  const HandleDocument = async () => {
    const result = await DocumentPicker.pickMultiple({ allowMultiSelection: false })
    console.log(result)

  }
  const falvours = ['AGNI', "eLAICHI", "ADRAK", "STRONG"]
  const variants = ['50gm', '100gm', "250gm", '500gm', '1kg', '2kg']
  const Units = [1, 2, 3, 4, 5, 6]
  const offers = ['Tata Tea Agni 500 gms Free']
  const Headers = ['FLAVOURS', "VARIANTS", "Units", "Offers"]
  const [StateBrands, setStateBrands] = useState(null)
  const [StateFlavours, setStateFlavours] = useState(null)
  const [StateUnits, setStateUnits] = useState(null)
  const [StateMeasure, setStateMeasure] = useState(null)
  const [StateOffers, setStateOffers] = useState(null)
  const Tab = createBottomTabNavigator();
  const TopTab = createMaterialTopTabNavigator();

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
    <AppProvider>
      <Provider>
<Navigations/>

      </Provider>
    </AppProvider>


    /* <View style={{flexDirection:"row",alignItems:"center",}}>
        {Headers.map(header => {
          return <View style={{width:50,alignItems:"center",justifyContent:'center'}}><Text>
            {
              header
            }
          </Text></View>
        })}
      </View> */
    /* <Button onPress={HandleGallery}>See Gallery</Button>
    <Button onPress={HandleDocument}>See Document</Button>
    <View>
      <Slider
        style={{ height: 40 }}
        minimumValue={0}
        maximumValue={5}
        value={3}

        minimumTrackTintColor="#00FF00"
        maximumTrackTintColor="#000000"
      />
    </View>
    <View>
      <Slider
        value={3}
        inverted={true}
        style={{ transform:[{rotate: "-90deg"}],height:300, }}
        minimumValue={0}
        maximumValue={5}
        minimumTrackTintColor="#00FF00"
        maximumTrackTintColor="#000000"
      />
    </View> */
    /* <View style={{ flexDirection: "row", }}>
      <View style={[Styles.columnShadow, { marginLeft: 10 }]}>
        {falvours.map((falvour, key) => {
          return <View onStartShouldSetResponder={() => setStateBrands(key)} style={{ width: 70, flexDirection: 'row', alignItems: "center", justifyContent: "center", height: 100, }}>
            <Image source={require("./assets/demoTea.png")} />
            {key == StateBrands ?

              <View style={[{ width: 5, height: 75, backgroundColor: "#2196F3", position: "absolute", left: -3 }]}></View>

              :
              <View style={[{ width: 5, height: 75, backgroundColor: "#DEDEDE", position: "absolute", left: -3 }]}></View>

            }
          </View>
        })}
      </View>

      <View style={[Styles.columnShadow]}>
        {falvours.map((falvour, key) => {
          return <View onStartShouldSetResponder={() => setStateFlavours(key)} style={{ width: 70, flexDirection: 'row', alignItems: "center", justifyContent: "center", height: 100, }}>
            <Text>{falvour}</Text>
            {key == StateFlavours ?
              <View style={[{ width: 5, height: 50, backgroundColor: "#2196F3", position: "absolute", left: -3 }]}></View>

              :
              <View style={[{ width: 5, height: 50, backgroundColor: "#DEDEDE", position: "absolute", left: -3 }]}></View>

            }
          </View>
        })}
      </View>
      <View style={[Styles.columnShadow,]}>
        {variants.map((variant, key) => {
          return <View onStartShouldSetResponder={() => setStateUnits(key)} style={{ position: "relative", width: 70, flexDirection: 'row', alignItems: "center", justifyContent: "center", height: 100, }}>
            <Text>{variant}</Text>
            {key == StateUnits ?
              <View style={[{ width: 5, height: 50, backgroundColor: "#2196F3", position: "absolute", left: -3 }]}></View>

              :
              <View style={[{ width: 5, height: 50, backgroundColor: "#DEDEDE", position: "absolute", left: -3 }]}></View>

            }
          </View>
        })}
      </View>

      <View style={[Styles.columnShadow,]}>
        {Units.map((variant, key) => {
          return <View onStartShouldSetResponder={() => setStateMeasure(key)} style={{ position: "relative", width: 70, flexDirection: 'row', alignItems: "center", justifyContent: "center", height: 100, }}>
            <Text>{variant}</Text>

            {key == StateMeasure ?
              <View style={[{ width: 5, height: 50, backgroundColor: "#2196F3", position: "absolute", left: -3 }]}></View>

              :
              <View style={[{ width: 5, height: 50, backgroundColor: "#DEDEDE", position: "absolute", left: -3 }]}></View>

            }

          </View>
        })}
      </View>
      <View style={[Styles.columnShadow,]}>
        {offers.map((variant, key) => {
          return <View onStartShouldSetResponder={() => setStateOffers(key)} style={{ position: "relative", width: 70, flexDirection: 'row', alignItems: "center", justifyContent: "center", height: 100, }}>
            <Text style={{ fontSize: 12, paddingHorizontal: 10 }}>{variant}</Text>

            {key == StateOffers ?
              <View style={[{ width: 5, height: 50, backgroundColor: "#2196F3", position: "absolute", left: -3 }]}></View>

              :
              <View style={[{ width: 5, height: 50, backgroundColor: "#DEDEDE", position: "absolute", left: -3 }]}></View>

            }

          </View>
        })}
      </View>

    </View> */

  )
}
const stylesInline = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  spacerStyle: {
    marginBottom: 15,
  },
  safeContainerStyle: {
    flex: 1,
    margin: 20,
    justifyContent: "center",
  },
});
export default App