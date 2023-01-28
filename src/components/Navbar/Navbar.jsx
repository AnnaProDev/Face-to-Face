import style from "./Navbar.module.css"
import {NavLink} from "react-router-dom"
import logo from "../../img/1646808.png"

const Navbar = () => {
	return (
    <nav className={style.menu}>
      <div className={style.logo}>
        <img
          alt="logo"
          src={logo}
        ></img>
      </div>
      <div className={style.link}>
        <NavLink to="/profile">
          {" "}
          <span className="material-symbols-outlined">account_circle</span> Profile
        </NavLink>
      </div>
      <div className={style.link}>
        <NavLink to="/messages">
          <span className="material-symbols-outlined">mail</span>Messages
        </NavLink>
      </div>
      {/* <div className={style.link}>
        <NavLink to="/news">
          <span className="material-symbols-outlined">feed</span> News
        </NavLink>
      </div> */}
      {/* <div className={style.link}>
        <NavLink to="/music">
          <span className="material-symbols-outlined">music_note</span>Music
        </NavLink>
      </div> */}
		<div className={style.link}>
        <NavLink to="/users">
		  <span className="material-symbols-outlined">group</span>FIND USERS
        </NavLink>
      </div>
      {/* <div className={style.settings}>
        <NavLink to="/settings">
		  <span className="material-symbols-outlined">tune</span>
          Settings
        </NavLink> */}
      {/* </div> */}
    </nav>
  );
}

export default Navbar;