import axios from "axios"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { WeatherContext } from "../Context Folder/WeatherContext"
import { assets } from "../assets/assets"

const Landing = () => {

    const navigate = useNavigate()

    const { city, setCity, setCloud, setWind, setTemp } = useContext(WeatherContext);

    const handleInput = (evt) => {
        setCity(evt.target.value)
    }

    const getweather = () => {
        var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5dff8ffa113dc5a824021f203431137f`)

        weatherdata.then((success) => {
            console.log(success.data)
            navigate("/Weather")
            setCloud(success.data.weather[0].main)
            setWind(success.data.wind.speed)
            setTemp(success.data.main.feels_like)
        })
    }

    return (
        <div className="flex flex-col justify-start items-center py-10 gap-5 bg-gradient-to-br from-[#00feba] to-[#5b548a] h-screen w-full">
            <div className="px-8 md:px-16 lg:px-32 flex gap-2 w-full justify-center">
                <input type="text" placeholder="Enter Your City" className="w-full md:w-auto border border-none rounded-2xl px-6 py-2.5" onChange={handleInput}></input>
                <button className="bg-white text-black p-3 border border-none rounded-2xl cursor-pointer" onClick={getweather}>
                    <img src={assets.search} className="w-7 h-7"/>
                </button>
            </div>
        </div>
    )
}

export default Landing