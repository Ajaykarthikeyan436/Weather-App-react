import React, { createContext, useState } from 'react'

export const WeatherContext = createContext()

const WeatherContextProvider = (props) => {

    const [city,setCity] = useState("");
    const [cloud, setCloud] = useState("");
    const [wind, setWind] = useState("");
    const [temp, setTemp] = useState("");

    const value = { 
        city, setCity, cloud, setCloud, 
        wind, setWind, temp, setTemp
    }

  return (
    <WeatherContext.Provider value={value}>
        {props.children}
    </WeatherContext.Provider>
  )
}

export default WeatherContextProvider
