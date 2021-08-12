import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'


import axios from 'axios'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [textFilter, setTextFilter] = useState('')
  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }
  useEffect(hook, [])
  
 
  const countriesToShow = countries.filter(countries => countries.name.toLowerCase().search(textFilter.toLowerCase()) !== -1)

  const handleFilterChange = (event) => {
    setTextFilter(event.target.value)}
  
  const handleFilterSelection = (country) => {
    setTextFilter(country)}
  
    return (
    <div>
      <h2>Countries</h2>
      <Filter textFilter={textFilter} handleFilterChange={handleFilterChange}/>
      <Countries countriesToShow={countriesToShow} handleFilterSelection={handleFilterSelection}/>

    </div>
  )
}
//REACT_APP_API_KEY='9f28a7849476c72eeafc916205ba4e75' npm start
export default App;



  // const [ weather,setWeather ] = useState({})
  // const capital = 'Sudan'
  // const capital2 = 'America'
  // const api_key = process.env.REACT_APP_API_KEY

  // useEffect(
  //     () => {
  //         axios
  //             .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
  //             .then(response => {
  //                 console.log('weather fulfilled')
  //                 console.log(`http://api.weatherstack.com/current?access_key=${api_key}&query${capital}`)
  //                 console.log(response.data)})
  //     },
  //     []
  // )
  // useEffect(
  //   () => {
  //       axios
  //           .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital2}`)
  //           .then(response => {
  //               console.log('weather fulfilled')
  //               console.log(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital2}`)
  //               setWeather(response.data)
  //               console.log(response.data)})
                
  //   },
  //   []
  // )   