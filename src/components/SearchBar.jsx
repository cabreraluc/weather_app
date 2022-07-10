import React, {useState}from 'react';
import styles from "./SearchBar.module.css"
import {HiSearchCircle} from "react-icons/hi"



export default function SearchBar({onSearch}) {

  

   
   

  // acá va tu código
  return <div className={styles.container}>
    <form 
    onSubmit={(e)=>{e.preventDefault();
      onSearch(document.getElementById("inputSearch").value);
      document.getElementById("inputSearch").value = ""}}>

    <input id = "inputSearch" type="text" placeholder='ciudad...' className={styles.input}/>
    <button type = "submit"  className={styles.button} value="send"><HiSearchCircle/></button>

    </form>
  </div>

  
};

/*
<form>
 <input placeholder = "ciudad..." />
 <input type = "submit" value = "Agregar"/> 
</form>

De esta manera al apretar Enter se envía el submit.
*/



