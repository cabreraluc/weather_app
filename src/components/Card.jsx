import React from 'react';
import styles from "./card.module.css"
import {IoCloseCircle} from "react-icons/io5"

export default function Card(props) {
  // acá va tu código
  return (
  
<div  className={styles.container}>
    <button onClick={ (e)=>{e.preventDefault();
      props.close(props.id)}
    }
    className={styles.button}><IoCloseCircle/></button>
  
    <h3 className={styles.titulo} > {props.name}</h3>
    
      <div className={styles.data}>
        <div  >
          <span className={styles.min}>Min</span>
          <label>{props.min}</label>
        </div>
        <div>
         <span className={styles.max} >Max</span>
        <label>{props.max}</label>
        </div>
        <div>
          <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} />
        </div>
      </div>

</div>
)};

/*
Otra forma de hacerlo es...
<div>
  <Temp label = "Min" value={props.min}/>
  <Temp label = "Max" value={props.max}/>
  <img src = {img} alt="icono"
</div>
*/