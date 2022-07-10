import React from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';

import {useState} from 'react';




function App() {

  const apiKey = process.env.REACT_APP_APIKEY;

  const [cities, setCities] = React.useState([])


  function close(idDeCiudad){
    let newState = cities.filter(a => a.id !== idDeCiudad)
    setCities(newState);
  }

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
        

          const exist = cities.find((c) => c.id === ciudad.id);

          if (!exist) {
            setCities(oldCities => [...oldCities, ciudad])
          }
         
          
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }

  
  return (
    <div className="App">

      <div>
        <Nav onSearch={onSearch}/>
      </div>
      <hr />
      <div>
        <Cards
          close={close}
          cities={cities}
        />
      </div>
      
    
    </div>
  );
}

export default App;
