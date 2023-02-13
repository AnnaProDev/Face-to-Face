import style from "./Login.module.css";
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { Input } from "../common/FormsControls/FormsControls";
import { required, maxLength } from "../../utils/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import { AppStateType } from "../../redux/redux-store";

const maxLength50 = maxLength(50)

type LoginFormOwnProps = {
	captchaUrl: string | null,
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) =>{
	return <form onSubmit={handleSubmit}>
		<div className={style.input}>
			<Field placeholder="Email" 
			name={"email"} 
			component={Input} 
			validate={[required, maxLength50]}/>
		</div>
		<div className={style.input}>
			<Field placeholder="Password" 
			type={"password"} 
			name={"password"} 
			component={Input} 
			validate={[required, maxLength50]}/>
		</div>
		<label className={style.checkbox}>
			<Field type={"checkbox"} name={"rememberMe"} component={Input} /> Remember me
		</label>
		{error && <div className={style.form_error}>
			{error}
		</div>
		}
		{captchaUrl && <img alt="captcha" src={captchaUrl} />}
		{captchaUrl && <Field placeholder="Symbols from image" 
			name={"captcha"} 
			component={Input} 
			validate={[required]}/>}
		<div className={style.button}>
			<button>LOG IN</button>
		</div>
	</form>
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: "login"})(LoginForm)

type MapStatePropsType = {
	captchaUrl: string | null,
	isAuth: boolean,
}

type MapDispatchPropsType = {
	login: (email: string, password: string, rememberMe: boolean, captcha: string) => void,
}

type LoginFormValuesType = {
	email: string,
	password: string,
	rememberMe: boolean,
	captcha: string,
}
const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = ({login, isAuth, captchaUrl}) =>{

	const onSubmit = (formData: LoginFormValuesType) => {
		login(formData.email, formData.password, formData.rememberMe, formData.captcha)
	}
	if (isAuth) {
		return <Navigate to={"/profile"} />
	}

	return <div className={style.login}>
	<h1>Log In</h1>
	<p>For testing social network use the following email and password:</p>
	<p style={{fontWeight:"bold"}}>Email: free@samuraijs.com</p>
	<p style={{fontWeight:"bold"}}>Password: free</p>
		<LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
	</div>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
	isAuth: state.auth.isAuth,
	captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, {login}) (Login);