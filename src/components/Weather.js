import { useEffect,useState } from 'react'
import axios from 'axios'

const Weather = ({ country }) => {
    const [ weather,setWeather ] = useState(null)
    // const [ weather,setWeather ] = useState({})
    const capital = country.capital
    const api_key = process.env.REACT_APP_API_KEY
    console.log(capital)


    useEffect(
        () => {
            axios
                .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
                .then(response => {
                    console.log('weather fulfilled')
                    console.log(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
                    setWeather(response.data)
                    console.log(response)
                    console.log(response.data)})
                    
        },
        [api_key, capital])    

    console.log(weather)
    return weather && (
        <div>
            <h3>Weather in {capital}</h3>
            <p>
                <strong>temperature:</strong> {weather.current.temperature} celsius <br />
                <div><img src={weather.current.weather_icons[0]} alt='' height='70' width='70' /></div>
                <strong>wind:</strong> {weather.current.wind_speed} mph direction {weather.current.wind_dir}
            </p>
        </div>
    )
}

export default Weather;