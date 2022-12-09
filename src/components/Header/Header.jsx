import style from "./Header.module.css"

const Header = () => {
	return (
		<header className={style.header}>
			<img className={style.image} alt="logo" src="https://cdn-icons-png.flaticon.com/512/1646/1646808.png"></img>
		</header>
	)
}

export default Header;