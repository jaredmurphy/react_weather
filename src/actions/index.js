const API_KEY='45683852bbe910d7d9147f78f770c0b7';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
  return {
    type: FETCH_WEATHER
  };
}
