import axios from "axios"
import { useNavigate } from "react-router-dom"

function Landing(props) {

    const navigate = useNavigate()

    const city = props.city
    const setcity = props.setcity


    const setcloud = props.setcloud
    
    const setwind = props.setwind
    
    const settemp = props.settemp

    function handleInput(evt)
    {
        setcity(evt.target.value)
    }

    function getweather()
    {
        var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5dff8ffa113dc5a824021f203431137f`)

        weatherdata.then(function(success){
            console.log(success.data)
            navigate("/Weather")
            setcloud(success.data.weather[0].main)
            setwind(success.data.wind.speed)
            settemp(success.data.main.feels_like)
        })
    }

    return (
        <div className="flex flex-col justify-center items-center gap-5" id="landing_container">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-medium">Weather Report</h1>
                <p>I can help you to know about Weather condition</p>
            </div>

            <div className="flex gap-2">
                <input type="text" placeholder="Enter Your City" className="border border-none rounded-md p-2" onChange={handleInput}></input>
                <button className="bg-black text-white p-1 border border-none rounded-md cursor-pointer" onClick={getweather}>Get Report</button>
            </div>
        </div>
    )
}

export default Landing