import React, { useEffect, useState } from "react";
import "./style.css"
import "./Btn.css";
import WheatherCard from "./Weathercard";
import { FaSearch } from "react-icons/fa";
const App=()=>{

 const [searchValue,setSearchValue] = useState("Faridabad");
 const [weather, setWheather] = useState({});
//  const [mainPic,setPic] = useState();


//   const getImage = async() =>{
  
//        try{
//          let iurl = `https://api.unsplash.com/search/photos?query=${searchValue}&client_id=k2Bx68wIt6QeG9l9-_GIHQx4-QOdDiuxsfBKVDO7zOo`;

//          const res = await fetch(iurl);
//          const imageData = await res.json();

//          const{full:pic} = imageData.results[0].urls;
//          console.log(pic);

//          const imageObject = {
//            pic
//           }

//          setPic(pic);
//        }catch(err){
//          console.log(err);
//        }
//   };

//  useEffect(()=>{
//    getImage();
//  },[searchValue]);

  
 const getWheather = async() => {
  
   try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=d8abd77e89ddde5f611c48b324bf7dda`;

        const response = await fetch(url);
        const data = await response.json();
     
         const {humidity, pressure,temp} = data.main;
         const {country,sunset} = data.sys;
         const {speed} = data.wind;
         const {name} =data;
         const {main : weathermood} = data.weather[0];

        const mywheatherdata = {
          humidity,
           pressure,
           name,
           temp,
           weather,
           country,
           speed,
          sunset ,
          weathermood
        }

        setWheather(mywheatherdata);

   }catch(err){
     console.log(err);
   }
 };

 useEffect(()=>{
   getWheather();
   })

//  style={{backgroundImage:`url(${mainPic})`}}

    return(
        <>
        <div className="searchBox"  >
          <input type="search" id="search" placeholder="search.." className="searchInput" value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}}/>
          <button type="button" className="SearchButton" onClick={getWheather}>
          <FaSearch/>
          </button>
        </div>

          <WheatherCard {...weather}/>
        </>
    );
};

export default App;