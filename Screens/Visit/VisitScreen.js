import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Shops from '../../Components/Shops'
import { Button } from 'react-native-paper'
import { CartContext } from '../../Utils/AppContext'
import { useContext } from 'react'
import { useEffect } from 'react'
import Geolocation from '@react-native-community/geolocation';

export default function VisitScreen() {
  const [BeatRoute, setBeatRoute] = useState('')
  useEffect(() => {
    Geolocation.getCurrentPosition(info => setBeatRoute(
      {
        latitude: info.coords.latitude,
        longitude: info.coords.longitude
      }));
  }, [])
  const shops = [
    {
      name: 'Mini Mart shop - Shobha1',
      latitude: 12.9508,
      longitude: 77.6264,
    },
    {
      name: 'Mini Mart shop - Shobha2',
      latitude: 13.0078,
      longitude: 77.6306,
    },
    {
      name: 'Mini Mart shop - Shobha1',
      latitude: 12.9508,
      longitude: 77.6264,
    },
    {
      name: 'Mini Mart shop - Shobha2',
      latitude: 13.0078,
      longitude: 77.6306,
    },
  ];
  const [NewShops, setNewShops] = useState([...shops])
  function calculateDistance(lat1, lon1, lat2, lon2) {
    // Radius of the Earth in kilometers
    const radius = 6371;

    // Convert latitude and longitude to radians
    const lat1Rad = (lat1 * Math.PI) / 180;
    const lon1Rad = (lon1 * Math.PI) / 180;
    const lat2Rad = (lat2 * Math.PI) / 180;
    const lon2Rad = (lon2 * Math.PI) / 180;

    // Calculate the differences between the latitudes and longitudes
    const dlat = lat2Rad - lat1Rad;
    const dlon = lon2Rad - lon1Rad;

    // Calculate the distance using the Haversine formula
    const a =
      Math.sin(dlat / 2) * Math.sin(dlat / 2) +
      Math.cos(lat1Rad) *
      Math.cos(lat2Rad) *
      Math.sin(dlon / 2) *
      Math.sin(dlon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = radius * c;

    return distance;
  }





  const distance = calculateDistance(
    latitude,
    longitude,
    shop.latitude,
    shop.longitude
  ).toFixed(2);
  return (
    <ScrollView style={{ marginTop: 10 }}>

      {NewShops.map((shop, key) => {
        return <Shops shop={shop} unique={key} />

      })}
    </ScrollView>
  )





}








