import React from "react";
import SearchBar from "./SearchBar"
import styles from "./Nav.module.css"


export default function Nav ({onSearch}) {
    return (
        <div>
       
        <div className={styles.container}>
    
        </div>
        <div>
             <SearchBar onSearch = {onSearch}/>
        </div>
        </div>
       
    
    )
}