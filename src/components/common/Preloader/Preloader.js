
import React from "react"
import preloader from "../../../img/Spinner-1s-200px.svg";
import style from "./Preloader.module.css"


const Preloader = () => {
	return <div className={style.preloader}> 
	<img alt="loading" src={preloader}/> 
	</div>
}

export default Preloader;

