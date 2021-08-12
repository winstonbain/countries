import React from 'react'
import Weather from './Weather'


const Countries = ({countriesToShow, handleFilterSelection}) => (
    countriesToShow.length > 10
    ? <ul>Too many matches, please specify more</ul>
    : countriesToShow.length !== 1
      ? <ul>{countriesToShow.map(num=> <ul key={num.name}>{num.name} <button onClick={()=> handleFilterSelection(num.name)}> Select </button></ul>)}</ul> //Why does there need to be a function here?
      : countriesToShow.map(num=> <div key={num.name}>
        <h1>{num.name}</h1>
        <div>Capital: {num.capital}</div>
        <div>Population: {num.population}</div>
        <h2>Languages</h2>
        <ul>{num.languages.map(lang=> <li key={lang.name}>{lang.name}</li> )}</ul>
        <img src={num.flag} alt='country flag' style={{ width: '10%' }} />
        <div>Weather in {num.capital}</div>
        <Weather country={num}/>
        </div>)
  )

export default Countries


// : countriesToShow.map(num=> <ul key={num.name}>{num.name} {num.capital} {num.population} {num.languages.map(lang=> <li key={lang.name}>{lang.name}</li> )}</ul>)
