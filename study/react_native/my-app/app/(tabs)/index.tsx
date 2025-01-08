import {StyleSheet, ScrollView, View, Text, Dimensions} from 'react-native';
import {useEffect, useState} from "react";

import * as Location from 'expo-location';
import {FontAwesome6, Fontisto, Octicons} from "@expo/vector-icons";

const { width: SCREEN_WIDTH } = Dimensions.get('window')

export default function HomeScreen() {
  const weatherData = [
    {
      temp: 27,
      weather: 'Sunny'
    },
    {
      temp: 18,
      weather: 'Clouds'
    },
    {
      temp: -8,
      weather: 'Snow'
    },
    {
      temp: 12,
      weather: 'Rain'
    }
  ]

  const icons = {
    Sunny: 'day-sunny',
    Clouds: 'day-cloudy',
    Snow: 'day-snow',
    Rain: 'day-rain',
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30}}>
        <FontAwesome6 name="bars" size={20} color="black" />
        <Text style={styles.cityName}>Seoul</Text>
        <Fontisto name="search" size={20} color="black" />
      </View>
      <View style={{ height: 120, justifyContent: 'center' }}>
        <Text style={[styles.fontLg, styles.fontExtraBold]}>Monday</Text>
        <Text style={styles.fontLg}>04 September</Text>
      </View>
      <View style={styles.divider} />
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={styles.weather}>
        {
          weatherData.map((day, index) => (
            <View key={index} style={styles.day}>
              <Text style={styles.temp}>{day.temp}º</Text>
              <View style={{ flexDirection: 'row', marginTop: -20, alignItems: 'center', gap: 10 }}>
                <Fontisto name={icons[day.weather]} size={24} color="black" />
                <Text style={styles.description}>{day.weather}</Text>
              </View>
            </View>
          ))
        }
      </ScrollView>
      <View style={styles.divider} />
      <View style={{ height: 100, justifyContent: 'center' }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={[styles.fontSm, styles.fontExtraBold]}>21°</Text>
          <Text style={[styles.fontSm, styles.fontExtraBold]}>0% Precipitation</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.fontSm}>8º</Text>
          <Text style={styles.fontSm}>3 km/h Wind</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC85A',
    padding: 20
  },
  cityName: {
    fontSize: 20,
    fontWeight: 600
  },
  weather: {
    alignItems: 'center'
  },
  day: {
    // 패딩값 계산
    width: SCREEN_WIDTH - 40,
  },
  temp: {
    fontWeight: '600',
    fontSize: 140
  },
  description: {
    fontSize: 30,
    fontWeight: '500',
  },
  divider: {
    height: 3,
    backgroundColor: '#000'
  },
  fontSm: {
    fontSize: 16,
  },
  fontMd: {
    fontSize: 18,
  },
  fontLg: {
    fontSize: 20,
  },
  fontBold: {
    fontWeight: 600
  },
  fontExtraBold: {
    fontWeight: 700
  }
});
