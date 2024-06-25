import { TfiSearch } from "react-icons/tfi";
import { TbTemperatureSun } from "react-icons/tb";
import { useState } from "react";
const api={
    key:"db4bb61892b795cf3b690fab540294f7",
    base:"https://api.openweathermap.org/data/2.5/",
}
const Nav = () => {
    
    const [search,setsearch]=useState("");
    const [weather,setweather]=useState({});
    const change = () =>{
        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
        .then((res)=>res.json())
        .then((resultat)=>{setweather(resultat)})
    }
    
    return (
    <>
    <div className="itemsweather">
    <div className="nav1">
      <div className="navborder">
        <h3><TbTemperatureSun />Weather Local</h3>
        <input type="text" placeholder="Search..." onClick={change} onChange={(e=>setsearch(e.target.value))} />
        <TfiSearch  className="icon" onClick={change}/>
      </div>  
      </div>
      {typeof weather.main !== "undefined" ? 
      (<div className="desccenter">
        <div className="alldescription">
            <div className="country">{weather.name}</div>
            <div className="celcuis1"><img src="../src/assets/images/cloud.png" alt="" /><img src="../src/assets/images/cloud.png" alt="" /> {weather.main.temp}°C</div>
            <div className="celcuis2"><img src="../src/assets/images/windy.png" alt="" /><img src="../src/assets/images/windy.png" alt="" /> {weather.main.humidity}°F</div>
            <div className="desc1">{weather.weather[0].main}
                <br />{weather.weather[0].description}</div>
        </div>
        </div>):("")
        }
      </div>
        
    </>);
}
export default Nav;