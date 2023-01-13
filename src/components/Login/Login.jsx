import style from "./Login.module.css";
import { Field, reduxForm } from 'redux-form'
import { Input } from "../common/FormsControls/FormsControls";
import { required, maxLength } from "../../utils/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";

const maxLength50 = maxLength(50)

const LoginForm = ({handleSubmit, error}) =>{
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
		<div className={style.button}>
			<button>LOG IN</button>
		</div>
	</form>
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = ({login, isAuth}) =>{

	const onSubmit = (formData) => {
		login(formData.email, formData.password, formData.rememberMe)
	}

	if (isAuth) {
		return <Navigate to={"/profile"} />
	}

	return <div className={style.login}>
	<h1>Log In</h1>
	<p>For testing social network use the following email and password:</p>
	<p style={{fontWeight:"bold"}}>Email: free@samuraijs.com</p>
	<p style={{fontWeight:"bold"}}>Password: free</p>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {login}) (Login);