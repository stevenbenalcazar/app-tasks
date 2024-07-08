import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL, API_KEY } from '../constants/api';

const useAirQuality = () => {
  const [airQualityData, setAirQualityData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAirQualityData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/air_quality`, {
          params: {
            place_id: 'london',  // Reemplaza con el lugar deseado
            key: API_KEY,
          },
        });
        setAirQualityData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAirQualityData();
  }, []);

  return { airQualityData, loading, error };
};

export default useAirQuality;