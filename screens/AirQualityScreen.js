import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import useAirQuality from '../hooks/useAirQuality';

const AirQualityScreen = () => {
  const { airQualityData, loading, error } = useAirQuality();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Error al cargar los datos de calidad del aire</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Calidad del aire en {airQualityData.place}:</Text>
      <Text>Nivel de calidad: {airQualityData.level}</Text>
      {/* Aquí puedes agregar más datos de calidad del aire según sea necesario */}
    </View>
  );
};

export default AirQualityScreen;