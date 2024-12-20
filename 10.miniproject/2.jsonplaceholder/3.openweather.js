import axios from "axios";
import "dotenv/config";

const url = "https://api.openweathermap.org/data/2.5/weather";
const params = {
  q: "Seoul",
  appid: process.env.OPEN_WEATHER_API_KEY,
  units: "metric",
  lang: "kr",
};

const fetchWeather = async () => {
  const response = await axios.get(url, { params });
  // console.log("응답: ", response.data);
  const weather = response.data;
  console.log(`도시: ${weather.name}`);
  console.log(`온도: ${weather.main.temp}`);
  console.log(`날씨: ${weather.weather[0].description}`);
};

fetchWeather();

// axios.get(url, { params })
//  .then((response) => {
//   console.log("응답: ", response.data);
// });
