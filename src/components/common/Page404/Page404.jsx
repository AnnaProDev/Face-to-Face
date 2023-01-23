import style from "./Page404.module.css";
import error404 from "../../../img/404error.bmp"

const Page404 = () => {
	return <div className={style.error_page}>
	<img alt="error404" src={error404} />
 </div>
}

export default Page404;