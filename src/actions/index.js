import axios from 'axios';

const API_KEY='45683852bbe910d7d9147f78f770c0b7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
