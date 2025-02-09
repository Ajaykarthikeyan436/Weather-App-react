import { FaCloudSun } from "react-icons/fa"
import { FiWind } from "react-icons/fi";
import { FaTemperatureHigh } from "react-icons/fa";


function Weather(props) {

    const city = props.city
    
    const cloud = props.cloud
    
    const wind = props.wind
    
    const temp = props.temp
    

    return (
        <div className="p-10 flex justify-between align-top" id="app_container">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                    <h1 className="text-3xl font-medium">{city}</h1>
                </div>

                <div className="flex gap-5 md:flex justify-center flex-wrap items-center" id="box">
                    <div className="flex flex-col justify-center items-center gap-3 p-3">
                        <h1 className="text-2xl font-medium">Weather Condition</h1>
                        <FaCloudSun className="text-5xl md:text-7xl" id="cloud_icon"></FaCloudSun>
                        <p className="text-2xl font-medium">{cloud}</p>
                    </div>

                    <div className="flex flex-col flex-wrap gap-3 justify-center items-center p-3">
                        <h1 className="text-2xl font-medium">Wind Speed</h1>
                        <FiWind className="text-5xl md:text-7xl" id="cloud_icon"></FiWind>
                        <p className="text-2xl font-medium">{wind}</p>
                    </div>

                    <div className="flex flex-col gap-3 flex-wrap justify-center items-center p-3">
                    <h1 className="text-2xl font-medium">Feels Like Temperature</h1>
                        <FaTemperatureHigh className="text-5xl md:text-7xl" id="cloud_icon"></FaTemperatureHigh>
                        <p className="text-2xl font-medium">{temp}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Weather