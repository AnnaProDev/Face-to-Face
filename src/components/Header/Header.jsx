import style from "./Header.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={style.wrapper}>
      {props.isAuth ? (
        <div className={style.login}>
          <h2>{props.login}</h2> <button onClick={props.logout} className={style.btn}>LOG OUT</button>
        </div>
      ) : (
        <NavLink to={"/login"}>
          <h2>Enter</h2>
        </NavLink>
      )}
    </div>
  );
};

export default Header;
