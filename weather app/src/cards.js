import React from "react";
//import axios from"axios";
import Clock from 'react-live-clock';


function Cards(props){
  

// var changetemp=props.temp-273.15;
// var result= Math.trunc(changetemp);
// var date = new Date();
// var m = date.getMinutes();
// var h = date.getHours();
// var s = date.getSeconds();

return( 
  <div className="cardcontainer">
      <div className={(props.temp>26)?"cardw":"card"}>

          
            <h1 style={{color:props.color,fontSize:40}}> {props.title}</h1>
            <h3>{props.place}  </h3>
            <hr className="new1" style={{color:props.color}} ></hr>
            <h1 className="emoji"> Temp:{props.temp}</h1>
            <h2> weather:{props.description}</h2>
            <h3>wind speed:{props.wind} Kmph</h3>
            <h4>Pressure:{props.pressure} pa</h4>
            <h4 >Humidity:{props.humidity} %</h4>
           <h3> <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} /></h3>
            
       </div>
  </div>


)
};


export default Cards;