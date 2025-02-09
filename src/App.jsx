import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Weather from "./components/Weather"
import Landing from "./components/Landing";
import { useState } from "react";

function App() {

    const [city,setcity] = useState("")

    const [cloud, setcloud] = useState("")
    const [wind, setwind] = useState("")
    const [temp, settemp] = useState("")

    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing city={city} setcity={setcity} cloud={cloud} setcloud={setcloud} wind={wind} setwind={setwind} temp={temp} settemp={settemp}></Landing>}></Route>
                <Route path='/Weather' element={<Weather city={city} setcity={setcity} cloud={cloud} setcloud={setcloud} wind={wind} setwind={setwind} temp={temp} settemp={settemp}></Weather>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App