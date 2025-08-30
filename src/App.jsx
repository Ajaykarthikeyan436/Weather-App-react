import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Weather from "./components/Weather"
import Landing from "./components/Landing";
import { useState } from "react";

const App = () => {

    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />}></Route>
                <Route path='/Weather' element={<Weather />}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App