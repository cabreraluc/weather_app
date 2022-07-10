import React from 'react';
import cities from '../data';
import Card from './Card';
import styles from "./Cards.module.css"

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map

  return <div className={styles.container}>
    { props.cities.map(a => 
    <Card
    key = {a.id}
    id = {a.id}
    max={a.max}
    min={a.min}
    name={a.name}
    img={a.img}
    close={props.close}
  />
    
    )}</div>
  
};