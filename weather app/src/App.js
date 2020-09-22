import React,{useEffect,useState} from "react";
import "./styles.css";
import Cards from "./cards";







export default function App() {
  
  const[temp,setTemp]= useState("0");
  const[description,setDescription]= useState("0");
  const[pressure,setPressure]= useState("0");
   const[humidity,setHumidity]= useState("0");
   const [place,setPlace]=useState("");
   const [wind,setWind]=useState("");
  const [query,setquery]=useState("607001");
  const [querys,setquerys]=useState("607001");
 
   

  useEffect(()=>{
    fetch("https://api.openweathermap.org/data/2.5/weather?zip="+querys+",IN&&units=metric&APPID=Apikey"
      )
  .then(res =>res.json()) 
  .then(result =>{
    console.log(result)
     setTemp(result.main.temp)
      setDescription(result.weather[0].description)
     setPressure(result.main.pressure)
     setHumidity(result.main.humidity)
     setPlace(result.name)
     setWind(result.wind.speed)
     
    
                }
    
  );

  })

 
    function changeValue(e){
     console.log("changed")
       setquery(e.target.value);
    }
    function handle(){
      setquerys(query);
    }
  
  return (
    
    <div className="App">
            <div  className="header">
              <h1>WEATHER</h1>
              <div className="search">
                <input type="text" placeholder="city" value={query} onChange={changeValue}></input>
                <button onClick={handle}>search</button>
              </div>
              

              </div>
      
            { <div className="cards">
            <Cards color={""} title={"INDIA"}place={place} temp={temp} description={description} pressure={pressure} humidity={humidity} wind={wind}/>
            
          </div> }
    </div>
  );
}
