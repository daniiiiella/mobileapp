import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text} from 'react-native';
import Axios from "axios";
import { AppRoutes } from './src/routes/app.routes';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar style="auto" />
      <AppRoutes/>
    </View>
  );
}
const submeterInformacao = (texto) => {
  Axios.post( "http://192.168.0.103:3001/item", {item: texto})
}
