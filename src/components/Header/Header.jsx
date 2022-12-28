import style from "./Header.module.css"
import React from "react";
import { NavLink } from "react-router-dom";

const Header= (props) => {
	debugger
	return (
		<div className={style.wrapper}>
		{props.isAuth ? <h2>{props.login}</h2>
		: <NavLink to={"/login"}><h2>Log In</h2></NavLink> }
	 </div>
  );
}

export default Header;