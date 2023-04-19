import axios from 'axios'

const baseUrl = 'https://api.openweathermap.org/data/2.5'
const owm_api_key = process.env.REACT_APP_OPEN_WEATHER_MAP_KEY

const getWeatherData = (city) => {
    return axios.get(`${baseUrl}/weather?appid=${owm_api_key}&units=metric&q=${city}`)
}

const OpenWeatherMap = {getWeatherData}

export default OpenWeatherMap
