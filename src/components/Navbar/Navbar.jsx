import style from "./Navbar.module.css"
import {NavLink} from "react-router-dom"

const Navbar = () => {
	return (
    <nav className={style.menu}>
      <div className={style.logo}>
        <img
          alt="logo"
          src="https://cdn-icons-png.flaticon.com/512/1646/1646808.png"
        ></img>
      </div>
      <div className={style.link}>
        <NavLink to="/profile">
          {" "}
          <span class="material-symbols-outlined">account_circle</span> Profile
        </NavLink>
      </div>
      <div className={style.link}>
        <NavLink to="/messages">
          <span class="material-symbols-outlined">mail</span>Messages
        </NavLink>
      </div>
      <div className={style.link}>
        <NavLink to="/news">
          <span class="material-symbols-outlined">feed</span> News
        </NavLink>
      </div>
      <div className={style.link}>
        <NavLink to="/music">
          <span class="material-symbols-outlined">music_note</span>Music
        </NavLink>
      </div>
      <div className={style.link}>
        <NavLink to="/settings">
		  <span class="material-symbols-outlined">tune</span>
          Settings
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;